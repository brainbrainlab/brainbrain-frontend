import { useEffect, useRef } from 'react';

import { Elastic, gsap, Power0, Power2 } from 'gsap';
import * as THREE from 'three';

import fragmentShader from '@/components/DotAnimation/fragmentShader.glsl';
import vertexShader from '@/components/DotAnimation/vertexShader.glsl';

interface CustomVector3 extends THREE.Vector3 {
  color: number;
  theta: number;
  phi: number;
  scaleX: number;
  tl?: gsap.core.Timeline;
}

interface DotAnimationConfig {
  canvasSize?: number;
  dotsAmount?: number;
  baseScale?: number;
  hoverScale?: number;
}

const DEFAULT_CONFIG: DotAnimationConfig = {
  canvasSize: 600,
  dotsAmount: 100,
  baseScale: 15,
  hoverScale: 40,
};

export const useDotAnimation = (config: DotAnimationConfig = {}) => {
  const mergedConfig = { ...DEFAULT_CONFIG, ...config };
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef(new THREE.Vector2(-100, -100));
  const prevHovered = useRef<number[]>([]);
  const attributePositions = useRef<THREE.BufferAttribute | null>(null);
  const attributeSizes = useRef<THREE.BufferAttribute | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const raycasterRef = useRef<THREE.Raycaster | null>(null);
  const wrapRef = useRef<THREE.Points | null>(null);
  const verticesRef = useRef<CustomVector3[]>([]);

  const initThree = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    rendererRef.current = renderer;

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 2000);
    cameraRef.current = camera;
    camera.position.set(0, 0, 350);

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const raycaster = new THREE.Raycaster();
    raycasterRef.current = raycaster;
    raycaster.params.Points.threshold = 6;

    return { renderer, camera, scene, raycaster };
  };

  const initDots = (scene: THREE.Scene) => {
    const colors = [new THREE.Color(0x69cffb), new THREE.Color(0xc1e9fa), new THREE.Color(0xe7f6fd)];

    const loader = new THREE.TextureLoader();
    const dotTexture = loader.load('assets/images/dotTexture.png');
    const positions = new Float32Array(mergedConfig.dotsAmount! * 3);
    const vertices: CustomVector3[] = Array.from(
      { length: mergedConfig.dotsAmount! },
      () => new THREE.Vector3() as CustomVector3,
    );
    verticesRef.current = vertices;
    const sizes = new Float32Array(mergedConfig.dotsAmount!);
    const colorsAttribute = new Float32Array(mergedConfig.dotsAmount! * 3);

    vertices.forEach((vector, i) => {
      vector.color = Math.floor(Math.random() * colors.length);
      vector.theta = Math.random() * Math.PI * 2;
      vector.phi = (((1 - Math.sqrt(Math.random())) * Math.PI) / 2) * (Math.random() > 0.5 ? 1 : -1);

      vector.x = Math.cos(vector.theta) * Math.cos(vector.phi);
      vector.y = Math.sin(vector.phi);
      vector.z = Math.sin(vector.theta) * Math.cos(vector.phi);
      vector.multiplyScalar(120 + (Math.random() - 0.5) * 5);
      vector.scaleX = mergedConfig.baseScale!;

      if (Math.random() > 0.5) {
        moveDot(vector, i);
      }
      vector.toArray(positions, i * 3);
      colors[vector.color].toArray(colorsAttribute, i * 3);
      sizes[i] = mergedConfig.baseScale!;
    });

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
    wrapRef.current = wrap;
    wrap.renderOrder = 1;
    scene.add(wrap);
  };

  const moveDot = (vector: CustomVector3, index: number) => {
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
  };

  const onDotHover = (index: number) => {
    const vertices = verticesRef.current;
    if (!vertices[index]) return;

    if (vertices[index].tl) {
      vertices[index].tl.kill();
    }
    vertices[index].tl = gsap.timeline();
    gsap.to(vertices[index], {
      duration: 0.4,
      scaleX: mergedConfig.hoverScale,
      ease: Elastic.easeOut.config(1.3, 0.8),
      onUpdate: function () {
        if (attributeSizes.current) {
          attributeSizes.current.array[index] = vertices[index].scaleX;
        }
      },
      onComplete: function () {
        vertices[index].scaleX = mergedConfig.hoverScale!;
        if (attributeSizes.current) {
          attributeSizes.current.array[index] = vertices[index].scaleX;
        }
      },
    });
  };

  const mouseOut = (index: number) => {
    const vertices = verticesRef.current;
    if (!vertices[index]) return;

    if (vertices[index].tl) {
      vertices[index].tl.kill();
    }
    gsap.to(vertices[index], {
      duration: 0.4,
      scaleX: mergedConfig.baseScale,
      ease: Power2.easeOut,
      onUpdate: function () {
        if (attributeSizes.current) {
          attributeSizes.current.array[index] = vertices[index].scaleX;
        }
      },
    });
  };

  const render = () => {
    if (!raycasterRef.current || !cameraRef.current || !wrapRef.current || !rendererRef.current) return;

    raycasterRef.current.setFromCamera(mouse.current, cameraRef.current);
    const intersections = raycasterRef.current.intersectObjects([wrapRef.current]);
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
    rendererRef.current.render(sceneRef.current!, cameraRef.current);
  };

  useEffect(() => {
    const { renderer, camera, scene, raycaster } = initThree() || {};
    if (!renderer || !camera || !scene || !raycaster) return;

    const resizeCanvas = () => {
      renderer.setSize(mergedConfig.canvasSize!, mergedConfig.canvasSize!);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    renderer.setClearColor(0xffffff, 0);

    initDots(scene);

    const onMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const canvasBounding = canvas.getBoundingClientRect();
      mouse.current.x = ((e.clientX - canvasBounding.left) / canvas.clientWidth) * 2 - 1;
      mouse.current.y = -((e.clientY - canvasBounding.top) / canvas.clientHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);
    gsap.ticker.add(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', onMouseMove);
      gsap.ticker.remove(render);

      // Cleanup Three.js resources
      if (renderer) {
        renderer.dispose();
      }
      if (scene) {
        scene.clear();
      }
      if (wrapRef.current) {
        wrapRef.current.geometry.dispose();
        (wrapRef.current.material as THREE.Material).dispose();
      }
    };
  }, []);

  return { canvasRef };
};
