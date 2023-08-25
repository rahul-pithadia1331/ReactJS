/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Stack, Container, Form, InputGroup } from 'react-bootstrap';
import ItemList from './ItemList';
import { useQuery, useMutation } from '@tanstack/react-query';
import fetchItemList from '../Apis/FetchItem';
import addItems from '../Apis/AddItems';
import { useState } from 'react';
import updateItems from '../Apis/UpdateItems';

const ContentContainer = () => {
    const [item, setItem] = useState<string>('');
    const [buttonState, setButtonState] = useState<boolean>(true);
    const [updateIndex, setUpdateIndex] = useState<string>('');

    const AddItemMutation = useMutation(addItems);
    const UpdateItemMutation = useMutation(updateItems);

    const setItems = (event: any): any => {
        setItem(event.target.value);
    };

    const { data, refetch } = useQuery(['item'], fetchItemList);

    const AddItem = async () => {
        if (!item) return;
        await AddItemMutation.mutateAsync(item);
        setItem('');
        refetch();
    };

    const updateItem = async () => {
        const data = { sItemName: item, sId: updateIndex };
        await UpdateItemMutation.mutateAsync(data);
        setButtonState(true);
        setItem('');
        refetch();
    };

    const handlekeyevent = (event: any) => {
        if (event.keyCode === 13 && buttonState) {
            console.log('kaam kar raha hai');
            return AddItem();
        }

        if (event.keyCode === 13 && !buttonState) {
            return updateItem();
        }
    };

    return (
        <Container className='my-5'>
            <h1 className='text-center mb-5'>Todo List 📥</h1>
            <hr></hr>
            <Stack
                direction='horizontal'
                gap={4}
                className='col-md-auto mx-auto'
            >
                <InputGroup className='my-3'>
                    <InputGroup.Text>Item</InputGroup.Text>
                    <Form.Control
                        placeholder='Username'
                        aria-label='Username'
                        id='item'
                        aria-describedby='basic-addon1'
                        value={item}
                        onChange={setItems}
                        onKeyDown={handlekeyevent}
                    />
                </InputGroup>
                {buttonState ? (
                
                    <Button variant='primary' size='sm' onClick={AddItem}>
                        Add Item
                    </Button>
                ) : (
                    <Button variant='warning' size='sm' onClick={updateItem}>
                        Update Item
                    </Button>
                )}
            </Stack>
            {}
            <Stack gap={3} className='col-md-auto'>
                {data?.map((items, index) => (
                    <ItemList
                        key={index}
                        index={items._id}
                        item={items.sItemName}
                        setItems={setItem}
                        setButtonState={setButtonState}
                        setUpdateIndex={setUpdateIndex}
                        refetch={refetch}
                    />
                ))}
            </Stack>
        </Container>
    );
};

export default ContentContainer;
