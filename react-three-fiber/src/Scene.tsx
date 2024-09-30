import { Environment, Float, OrbitControls } from '@react-three/drei';
import React from 'react';
import GradientCube from './GradientCube';
import Sphere from './Sphere';

export default function Scene() {
	return (
		<>
			{/* Lighting */}
			<ambientLight intensity={20} />
			<directionalLight position={[10, 10, 5]} intensity={4.5} />

			{/* Floating Gradient Cube */}
			<Float
				speed={0.5} // Animation speed
				rotationIntensity={3} // How much rotation
				floatIntensity={2} // How high the cube floats
				scale={3}
			>
				<Sphere />
			</Float>
			<Float speed={0.5} rotationIntensity={1} floatIntensity={2} scale={1}>
				<GradientCube />
			</Float>
			<OrbitControls enableZoom={false} />
		</>
	);
}
