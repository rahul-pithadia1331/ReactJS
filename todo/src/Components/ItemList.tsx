import { ItemListProps } from './Types/Types';
import { Button } from 'react-bootstrap';

const ItemList = (props: ItemListProps) => {
    console.log(typeof props.index);

    const setCurrentItemTOInputText = (): any => {
        props.setItems(props.item);
        props.setButtonState(false);
        props.setUpdateIndex(props.index);
        console.log('dsdmasdklaskldj');
    };

    const removeItemFromList = () => {
        console.log('Item', props.addItem);
        props.addItem.splice(props.index, 1);
        props.setAddItem([...props.addItem])
        console.log('removedItem', props.addItem);
    }

    return (
        <div className='bg-light'>
            <h3 className='text-center'>{props.item}</h3>
            <div className='text-center'>
                <Button variant='danger' className='me-3' onClick={()=>{
                     removeItemFromList()
                }}>
                    <i className='bi bi-trash'></i>
                </Button>
                <Button
                    variant='warning'
                    onClick={() => {
                        setCurrentItemTOInputText();
                    }}
                >
                    <i className='bi bi-pencil-square'></i>
                </Button>
            </div>
        </div>
    );
};
export default ItemList;
