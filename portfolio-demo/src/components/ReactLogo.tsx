import { Float } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

//@ts-nocheck

export default function ReactLogo(props) {
	const { nodes, materials } = useGLTF('/models/react.glb');
	return (
		<Float floatIntensity={1}>
			<group scale={0.5} position={[8, 8, 0]} {...props} dispose={null}>
				<mesh
					//@ts-ignore
					geometry={nodes['React-Logo_Material002_0'].geometry}
					material={materials['Material.002']}
					position={[0, 0.079, 0.18]}
					rotation={[0, 0, -Math.PI / 2]}
					scale={[0.39, 0.39, 0.5]}
				/>
			</group>
		</Float>
	);
}

useGLTF.preload('/models/react.glb');
