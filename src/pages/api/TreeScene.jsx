"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const mountRef = useRef(null);
  const cubeRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(2, 2, 2);
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
      cube.rotation.x += 0.003;
      cube.rotation.y += 0.003;
      renderer.render(scene, camera);
    };
    animate();

    const handleScroll = () => {
      if (cubeRef.current) {
        const scrollY = window.scrollY;
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cubeRef.current.position.y = -scrollY * 0.004;
        cubeRef.current.position.x = Math.sin(scrollY * 0.003) * 2;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
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
