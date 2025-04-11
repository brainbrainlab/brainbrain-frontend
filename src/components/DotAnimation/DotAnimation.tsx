import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { gsap, Power0, Power2, Elastic } from 'gsap';

// Import shader code
import vertexShader from './vertexShader.glsl';
import fragmentShader from './fragmentShader.glsl';
interface CustomVector3 extends THREE.Vector3 {
  color: number;
  theta: number;
  phi: number;
  scaleX: number;
  tl?: gsap.core.Timeline;
}

const StyledCanvas = styled.canvas`
  z-index: 0;
  position: absolute;
`;

const DotCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef(new THREE.Vector2(-100, -100));
  const prevHovered = useRef<number[]>([]);
  const attributePositions = useRef<THREE.BufferAttribute | null>(null);
  const attributeSizes = useRef<THREE.BufferAttribute | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 2000);
    const scene = new THREE.Scene();
    const raycaster = new THREE.Raycaster();
    raycaster.params.Points.threshold = 6;
    camera.position.set(0, 0, 350);

    const resizeCanvas = () => {
      renderer.setSize(600, 600);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const colors = [new THREE.Color(0x69cffb), new THREE.Color(0xc1e9fa), new THREE.Color(0xe7f6fd)];
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    renderer.setClearColor(0xffffff, 0);

    const galaxy = new THREE.Group();
    scene.add(galaxy);

    const loader = new THREE.TextureLoader();
    const dotTexture = loader.load('assets/images/dotTexture.png');
    const dotsAmount = 100;
    const positions = new Float32Array(dotsAmount * 3);
    const vertices: CustomVector3[] = Array.from({ length: dotsAmount }, () => new THREE.Vector3() as CustomVector3);
    const sizes = new Float32Array(dotsAmount);
    const colorsAttribute = new Float32Array(dotsAmount * 3);

    vertices.forEach((vector, i) => {
      vector.color = Math.floor(Math.random() * colors.length);
      vector.theta = Math.random() * Math.PI * 2;
      vector.phi = (((1 - Math.sqrt(Math.random())) * Math.PI) / 2) * (Math.random() > 0.5 ? 1 : -1);

      vector.x = Math.cos(vector.theta) * Math.cos(vector.phi);
      vector.y = Math.sin(vector.phi);
      vector.z = Math.sin(vector.theta) * Math.cos(vector.phi);
      vector.multiplyScalar(120 + (Math.random() - 0.5) * 5);
      vector.scaleX = 5;

      if (Math.random() > 0.5) {
        moveDot(vector, i);
      }
      vector.toArray(positions, i * 3);
      colors[vector.color].toArray(colorsAttribute, i * 3);
      sizes[i] = 15;
    });

    function moveDot(vector: CustomVector3, index: number) {
      const tempVector = vector.clone();
      tempVector.multiplyScalar((Math.random() - 0.5) * 0.2 + 1);
      gsap.to(vector, {
        duration: Math.random() * 3 + 3,
        x: tempVector.x,
        y: tempVector.y,
        z: tempVector.z,
        yoyo: true,
        repeat: -1,
        delay: -Math.random() * 3,
        ease: Power0.easeNone,
        onUpdate: function () {
          if (attributePositions.current) {
            attributePositions.current.array[index * 3] = vector.x;
            attributePositions.current.array[index * 3 + 1] = vector.y;
            attributePositions.current.array[index * 3 + 2] = vector.z;
          }
        },
      });
    }

    const bufferWrapGeom = new THREE.BufferGeometry();
    attributePositions.current = new THREE.BufferAttribute(positions, 3);
    bufferWrapGeom.setAttribute('position', attributePositions.current);
    attributeSizes.current = new THREE.BufferAttribute(sizes, 1);
    bufferWrapGeom.setAttribute('size', attributeSizes.current);
    const attributeColors = new THREE.BufferAttribute(colorsAttribute, 3);
    bufferWrapGeom.setAttribute('color', attributeColors);
    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        pointTexture: { value: dotTexture },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      vertexColors: true,
      depthWrite: false,
      depthTest: true,
      blending: THREE.NoBlending,
    });

    const wrap = new THREE.Points(bufferWrapGeom, shaderMaterial);
    wrap.renderOrder = 1;
    scene.add(wrap);

    const render = () => {
      raycaster.setFromCamera(mouse.current, camera);
      const intersections = raycaster.intersectObjects([wrap]);
      const hovered: number[] = intersections.map(intersection => intersection.index as number);

      hovered.forEach(index => {
        if (prevHovered.current.indexOf(index) === -1) {
          onDotHover(index);
        }
      });

      prevHovered.current.forEach(index => {
        if (!hovered.includes(index)) {
          mouseOut(index);
        }
      });

      prevHovered.current = [...hovered];
      if (attributeSizes.current && attributePositions.current) {
        attributeSizes.current.needsUpdate = true;
        attributePositions.current.needsUpdate = true;
      }
      renderer.render(scene, camera);
    };

    const onDotHover = (index: number) => {
      if (vertices[index].tl) {
        vertices[index].tl.kill();
      }
      vertices[index].tl = gsap.timeline();
      gsap.to(vertices[index], {
        duration: 0.4,
        scaleX: 40,
        ease: Elastic.easeOut.config(1.3, 0.8),
        onUpdate: function () {
          if (attributeSizes.current) {
            attributeSizes.current.array[index] = vertices[index].scaleX;
          }
        },
        onComplete: function () {
          vertices[index].scaleX = 40;
          if (attributeSizes.current) {
            attributeSizes.current.array[index] = vertices[index].scaleX;
          }
        },
      });
    };

    const mouseOut = (index: number) => {
      if (vertices[index].tl) {
      }
      gsap.to(vertices[index], {
        duration: 0.4,
        scaleX: 15,
        ease: Power2.easeOut,
        onUpdate: function () {
          if (attributeSizes.current) {
            attributeSizes.current.array[index] = vertices[index].scaleX;
          }
        },
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      const canvasBounding = canvas.getBoundingClientRect();
      mouse.current.x = ((e.clientX - canvasBounding.left) / canvas.clientWidth) * 2 - 1;
      mouse.current.y = -((e.clientY - canvasBounding.top) / canvas.clientHeight) * 2 + 1;
    };

    gsap.ticker.add(render);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      gsap.ticker.remove(render);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  });

  return <StyledCanvas ref={canvasRef} />;
};

const DotAnimation: React.FC = () => {
  return <DotCanvas />;
};

export default DotAnimation;
