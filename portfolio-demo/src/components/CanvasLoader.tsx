import { Html, useProgress } from '@react-three/drei';
import { Loader2 } from 'lucide-react';

export default function CanvasLoader() {
	const { progress } = useProgress();
	return (
		<Html
			as='div'
			center
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<span className='canvas-loader'>
				<p
					style={{
						fontSize: 14,
						color: '#f1f1f1',
						fontWeight: 800,
						marginTop: 40,
					}}
				>
					{progress !== 0 ? (
						`${progress.toFixed(2)}%`
					) : (
						<Loader2 className='size-5 animate-spin' />
					)}
				</p>
			</span>
		</Html>
	);
}
