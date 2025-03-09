import styled, { keyframes, css } from 'styled-components';
import { useEffect, useRef } from 'react';
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

interface DotAnimationProps {
  width: number;
  height: number;
}

// Styled component for the canvas
const StyledCanvas = styled.canvas`
  width: ${props => props.width}rem;
  height: ${props => props.height}rem;
  display: block;
`;

const Container = styled.div<{ size: number }>`
  width: ${({ size }) => size}rem;
  height: ${({ size }) => size}rem;
  border-radius: 50%;
  background-color: #f0f0f0;
  position: relative;
  overflow: hidden;
`;

const generateRandomKeyframes = () => keyframes`
  0% { transform: translate(0, 0); }
  100% { transform: translate(${Math.random() * 10}rem, ${Math.random() * 10}rem); }
`;

const Dot = styled.div<{ size: number; top: number; left: number; animation: any }>`
  width: ${({ size }) => size}rem;
  height: ${({ size }) => size}rem;
  background-color: #3498db;
  border-radius: 50%;
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  transition: transform 0.3s;
  animation: ${({ animation }) =>
    css`
      ${animation} 5s linear infinite alternate
    `};

  &:hover {
    transform: scale(1.5);
  }

  &:not(:hover) {
    transform: scale(1); // Reset scale when not hovered
  }
`;

function DotAnimation({ width, height }: DotAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef(new THREE.Vector2(-100, -100));
  const prevHovered = useRef<number[]>([]);
  const attributePositions = useRef<THREE.BufferAttribute | null>(null);
  const attributeSizes = useRef<THREE.BufferAttribute | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    if (!canvas) return;

    canvas.style.width = `${width}rem`;
    canvas.style.height = `${height}rem`;

    const colors = [new THREE.Color(0x39bcf5), new THREE.Color(0x39bcf5), new THREE.Color(0xf3f3f3)];

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff, 0);

    const scene = new THREE.Scene();
    const raycaster = new THREE.Raycaster();
    raycaster.params.Points.threshold = 6;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 2000);
    camera.position.set(0, 0, 350);

    const galaxy = new THREE.Group();
    scene.add(galaxy);

    const loader = new THREE.TextureLoader();
    const dotTexture = loader.load('assets/images/dotTexture.png');
    const dotsAmount = 200;
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
      sizes[i] = 18;
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
        scaleX: 25,
        ease: Elastic.easeOut.config(1.3, 0.8),
        onUpdate: function () {
          if (attributeSizes.current) {
            attributeSizes.current.array[index] = vertices[index].scaleX;
          }
        },
        onComplete: function () {
          vertices[index].scaleX = 25;
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
        scaleX: 18,
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
      mouse.current.x = ((e.clientX - canvasBounding.left) / width) * 2 - 1;
      mouse.current.y = -((e.clientY - canvasBounding.top) / height) * 2 + 1;
    };

    gsap.ticker.add(render);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      gsap.ticker.remove(render);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [width, height]);

  return <StyledCanvas ref={canvasRef} />;
}

export default DotAnimation;
