import {
	OrbitControls,
	Sparkles,
	Splat,
	Text,
	Text3D,
	Trail,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import Scene from './Scene';

function RotatingCube() {
	const meshRef = useRef<any>();
	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.y += 0.01;
			meshRef.current.rotation.x += 0.01;
		}
	});
	return (
		<mesh ref={meshRef}>
			<cylinderGeometry args={[1, 1, 1]} />
			<meshLambertMaterial color='#468585' emissive='#468585' />

			<Sparkles count={100} scale={1} size={3} speed={0.002} noise={0.2} />
		</mesh>
	);
}

function RotatingDonut() {
	const meshRef = useRef<any>();

	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.y += 0.005;
			meshRef.current.rotation.x += 0.005;
		}
	});

	return (
		<mesh ref={meshRef}>
			<torusGeometry args={[5, 2, 16, 100]} />
			<meshLambertMaterial color='#fff00' emissive='#468585' />
			<Sparkles
				count={900}
				scale={5}
				size={5}
				speed={4}
				noise={0.5}
				color={'#1f1f1f'}
			/>
		</mesh>
	);
}
export default function App() {
	return (
		<>
			<Canvas
				style={{
					height: '100vh',
					width: '100vw',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				camera={{ position: [0, 5, 5] }}
			>
				<color attach='background' args={['#000000']} />
				<Scene />
			</Canvas>
		</>
	);
}
