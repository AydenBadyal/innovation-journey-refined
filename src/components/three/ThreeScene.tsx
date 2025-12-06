import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  className?: string;
}

const ThreeScene = ({ className }: ThreeSceneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points;
    shapes: THREE.Group;
    nodes: THREE.Group;
    animationId: number;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 2000;
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 100;
      posArray[i + 1] = (Math.random() - 0.5) * 100;
      posArray[i + 2] = (Math.random() - 0.5) * 100;

      // Gradient colors: purple to pink to cyan
      const t = Math.random();
      if (t < 0.33) {
        colorArray[i] = 0.8; // R
        colorArray[i + 1] = 0.4; // G
        colorArray[i + 2] = 1.0; // B (purple)
      } else if (t < 0.66) {
        colorArray[i] = 1.0;
        colorArray[i + 1] = 0.4;
        colorArray[i + 2] = 0.8; // pink
      } else {
        colorArray[i] = 0.4;
        colorArray[i + 1] = 0.8;
        colorArray[i + 2] = 1.0; // cyan
      }
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Geometric shapes
    const shapes = new THREE.Group();
    
    const createShape = (geometry: THREE.BufferGeometry, color: number, position: THREE.Vector3) => {
      const material = new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(position);
      return mesh;
    };

    const icosahedron = createShape(
      new THREE.IcosahedronGeometry(3, 0),
      0xcc66ff,
      new THREE.Vector3(-15, 10, -10)
    );
    const octahedron = createShape(
      new THREE.OctahedronGeometry(2.5, 0),
      0x66ccff,
      new THREE.Vector3(18, -8, -15)
    );
    const dodecahedron = createShape(
      new THREE.DodecahedronGeometry(2, 0),
      0xff66cc,
      new THREE.Vector3(-12, -12, -8)
    );
    const torus = createShape(
      new THREE.TorusGeometry(2, 0.5, 8, 16),
      0x66ffcc,
      new THREE.Vector3(15, 12, -12)
    );

    shapes.add(icosahedron, octahedron, dodecahedron, torus);
    scene.add(shapes);

    // Node network
    const nodes = new THREE.Group();
    const nodePositions: THREE.Vector3[] = [];
    const nodeCount = 20;

    for (let i = 0; i < nodeCount; i++) {
      const nodeGeometry = new THREE.SphereGeometry(0.3, 16, 16);
      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: i % 3 === 0 ? 0xcc66ff : i % 3 === 1 ? 0x66ccff : 0xff66cc,
        transparent: true,
        opacity: 0.8,
      });
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 20 - 20
      );
      node.position.copy(pos);
      nodePositions.push(pos);
      nodes.add(node);
    }

    // Create connections between nearby nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x8866ff,
      transparent: true,
      opacity: 0.3,
    });

    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < 15) {
          const lineGeometry = new THREE.BufferGeometry().setFromPoints([
            nodePositions[i],
            nodePositions[j],
          ]);
          const line = new THREE.Line(lineGeometry, lineMaterial);
          nodes.add(line);
        }
      }
    }

    scene.add(nodes);

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Scroll effect
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    // Animation
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      sceneRef.current!.animationId = animationId;

      const time = Date.now() * 0.001;

      // Rotate particles
      particles.rotation.x = time * 0.05 + mouseY * 0.1;
      particles.rotation.y = time * 0.08 + mouseX * 0.1;

      // Animate shapes
      icosahedron.rotation.x = time * 0.3;
      icosahedron.rotation.y = time * 0.2;
      octahedron.rotation.x = time * 0.4;
      octahedron.rotation.z = time * 0.3;
      dodecahedron.rotation.y = time * 0.25;
      dodecahedron.rotation.z = time * 0.35;
      torus.rotation.x = time * 0.2;
      torus.rotation.y = time * 0.4;

      // Float animation for shapes
      shapes.children.forEach((shape, i) => {
        shape.position.y += Math.sin(time * 0.5 + i) * 0.01;
      });

      // Rotate node network
      nodes.rotation.y = time * 0.1 + mouseX * 0.2;
      nodes.rotation.x = mouseY * 0.1;

      // Parallax based on scroll
      camera.position.y = -scrollY * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    sceneRef.current = {
      scene,
      camera,
      renderer,
      particles,
      shapes,
      nodes,
      animationId: 0,
    };

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 -z-10 ${className || ''}`}
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeScene;