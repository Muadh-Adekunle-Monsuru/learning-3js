import { useTexture } from '@react-three/drei';
import React from 'react';

export default function GradientCube() {
	const [texture] = useTexture(['/colors2.jpg']);
	return (
		<mesh position={[3, -2, 0]}>
			<boxGeometry args={[2, 2, 2]} />
			<meshStandardMaterial
				map={texture}
				envMapIntensity={0.9}
				roughness={0}
				metalness={0.9}
				transparent
				opacity={0.95}
			/>
		</mesh>
	);
}
