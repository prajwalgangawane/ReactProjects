import { ItemTypes } from './ItemTypes';
import { DragSource } from 'react-dnd';
const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
};
const Box = ({ name, isDragging, connectDragSource }) => {
    const opacity = isDragging ? 0.2 : 1;
    return (<div ref={connectDragSource} role={'Box'} data-testid={`box-${name}`} style={{ ...style, opacity }}>
			{name}
		</div>);
};
export default DragSource(ItemTypes.BOX, {
    beginDrag: (props) => {
        return { name: props.name };
    },
    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();
        if (dropResult) {
            alert(`You dropped ${item.name} into ${dropResult.name}!`);
        }
    },
}, (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    };
})(Box);
