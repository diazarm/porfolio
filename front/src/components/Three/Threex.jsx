import React, { useEffect } from 'react';
import * as THREE from 'three';

const Threex = () => {
  useEffect(() => {
    // Configurar una escena
    const scene = new THREE.Scene();

    // Configurar una cámara
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.3, 100000);
    camera.position.z = 5;

    // Configurar un lienzo WebGL
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Agregar el lienzo WebGL al componente React
    const canvasContainer = document.getElementById('canvas-container');
    canvasContainer.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
      requestAnimationFrame(animate);

      // Actualizar la animación aquí (por ejemplo, cambiar la posición del cubo)

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });

    // Limpieza: detener el bucle de animación cuando el componente se desmonte
    return () => {
     // window.removeEventListener('resize');
      // Detener cualquier otra limpieza necesaria aquí, si es necesario
    };
  }, []);

  return (
    <div id="canvas-container">Three is Alive</div>
  );
}

export default Threex;
