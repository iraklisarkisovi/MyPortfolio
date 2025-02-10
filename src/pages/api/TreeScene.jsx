"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

const ThreeScene = () => {
  const mountRef = useRef(null);
  const cubeRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(3, 3, 3);
    scene.add(directionalLight);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        void main() {
          gl_FragColor = mix(vec4(0.2, 0.0, 1.0, 1.0), vec4(0.6, 0.0, 0.8, 1.0), vUv.y);
        }
      `,
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cubeRef.current = cube;

    const animate = () => {
      requestAnimationFrame(animate);
      if (cubeRef.current) {
        cubeRef.current.rotation.x += 0.002;
        cubeRef.current.rotation.y += 0.002;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleScroll = () => {
      if (cubeRef.current) {
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const progress = scrollY / maxScroll; // Scroll progress (0 to 1)

        // Adjust size: Grow in the middle, shrink at start/end
        const scaleFactor = 1 + Math.sin(progress * Math.PI) * 1;

        gsap.to(cubeRef.current.position, {
          y: -scrollY * 0.004,
          x: Math.sin(scrollY * 0.003) * 2,
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.to(cubeRef.current.rotation, {
          x: "+=0.05",
          y: "+=0.05",
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(cubeRef.current.scale, {
          x: scaleFactor,
          y: scaleFactor,
          z: scaleFactor,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        rendererRef.current.setPixelRatio(window.devicePixelRatio);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-10"
    />
  );
};

export default ThreeScene;
