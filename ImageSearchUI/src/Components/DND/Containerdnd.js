import Dustbin from './Dustbin';
import Box from './Box';
const rowStyle = { overflow: 'hidden', clear: 'both' };
export const Container = () => (<div>
		<div style={rowStyle}>
			<Dustbin />
		</div>
		<div style={rowStyle}>
			<Box name="Glass"/>
			<Box name="Banana"/>
			<Box name="Paper"/>
		</div>
	</div>);