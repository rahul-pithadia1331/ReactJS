import { Button, Stack, Container, Form, InputGroup } from 'react-bootstrap';
import ItemList from './ItemList';
import { useState } from 'react';

const ContentContainer = () => {
    const [item, setItem] = useState<string>('');
    const [buttonState, setButtonState] = useState<boolean>(true);
    const [addItem, setAddItem] = useState<string[]>([]);
    const [updateIndex, setUpdateIndex] = useState<number>(0);

    const setItems = (event: any): any => {
        setItem(event.target.value);
    };

    const AddItem = () => {
        if (!item) return;
        setAddItem([item, ...addItem]);
        setItem('');
    };

    const updateItem = (): void => {
        console.log(' console.log()', updateIndex, addItem);
        addItem.splice(updateIndex, 1, item);
        setAddItem([...addItem]);
        setButtonState(true);
        setItem('')
        // setAddItem[updateItem.index](updatedItem.item)
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
                    />
                </InputGroup>
                {buttonState ? (
                    <Button variant='primary' size='sm' onClick={AddItem}>
                        {' '}
                        Add Item{' '}
                    </Button>
                ) : (
                    <Button variant='warning' size='sm' onClick={updateItem}>
                        {' '}
                        Update Item{' '}
                    </Button>
                )}
            </Stack>
            {}
            <Stack gap={3} className='col-md-auto'>
                {addItem.map((items, index) => (
                    <ItemList
                        key={index}
                        item={items}
                        addItem={addItem}
                        setAddItem={setAddItem}
                        index={index}
                        items={item}
                        setItems={setItem}
                        setButtonState={setButtonState}
                        setUpdateIndex={setUpdateIndex}
                    />
                ))}
            </Stack>
        </Container>
    );
};

export default ContentContainer;
