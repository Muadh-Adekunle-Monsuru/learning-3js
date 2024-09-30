import { GradientTexture, useTexture } from '@react-three/drei';

export default function Sphere() {
	const [texture] = useTexture(['/colors3.jpg']);
	return (
		<mesh position={[1, -2, 0]} scale={0.4}>
			<sphereGeometry args={[2, 32, 16]} />
			<meshBasicMaterial>
				<GradientTexture
					stops={[0, 1]} // As many stops as you want
					colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
					size={1024} // Size is optional, default = 1024
				/>
			</meshBasicMaterial>
		</mesh>
	);
}
