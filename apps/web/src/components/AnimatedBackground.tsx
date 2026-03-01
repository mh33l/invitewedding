import { Canvas } from 'react-three-fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const AnimatedBackground = () => {
  const particlesRef = useRef();

  const count = 5000;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    const color = new THREE.Color(Math.random(), Math.random(), Math.random());
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  return (
    <Canvas>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach='attributes-position'
            count={count}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach='attributes-color'
            count={count}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.1} vertexColors sizeAttenuation={true} />
      </points>
    </Canvas>
  );
};

export default AnimatedBackground;
