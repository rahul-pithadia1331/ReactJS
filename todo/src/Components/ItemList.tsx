import { ItemListProps } from './Types/Types';
import { Button, Stack } from 'react-bootstrap';
import { useMutation } from '@tanstack/react-query';
import DeleteItem from './../Apis/DeleteITem';

const ItemList = (props: ItemListProps) => {
    console.log(typeof props.index);

    const mutation = useMutation(DeleteItem);

    const setCurrentItemTOInputText = (): any => {
        props.setItems(props.item);
        props.setButtonState(false);
        props.setUpdateIndex(props.index);
        // console.log('dsdmasdklaskldj');
    };

    const removeItemFromList = async () => {
        await mutation.mutateAsync(props.index);
        props.refetch();
    };

    return (
        <Stack direction='horizontal' className='card bg-light py-3 pe-3'>
            <div className='col-11'>
                <h3 className='text-center'>{props.item}</h3>
            </div>
            <div className='col-1 mx-auto'>
                <Button
                    variant='danger'
                    className=' me-3 mx-auto'
                    onClick={() => {
                        removeItemFromList();
                    }}
                >
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
        </Stack>
    );
};
export default ItemList;
