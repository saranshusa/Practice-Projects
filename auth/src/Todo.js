import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Card, Header, AddItems, Title, Add, ListItems, ItemTitle, Delete } from './TodoPage';

const Todo = () => {
    const location = useLocation();
    const [refresh, setRefresh] = useState(1);

    const [TodoItems, setTodoItems] = useState([]);
    const [TodoTitle, setTodoTitle] = useState('');

    useEffect(() => {
        getItems();
    },[refresh]);

    const getItems = async () => {
        // https://dry-crag-58790.herokuapp.com/
        const response = await fetch(`https://saranshapi.herokuapp.com/todo/?uid=${location.uid}&note=&delete=`);
        const items = await response.json();
        setTodoItems(items);
    }

    const addItems = async () => {
        await fetch(`https://saranshapi.herokuapp.com/todo/?uid=${location.uid}&note=${TodoTitle}&delete=`);
        setRefresh(refresh * -1)
        setTodoTitle('');
    }

    const deleteItem = async (props) => {
        let itemToDelete = props;
        await fetch(`https://saranshapi.herokuapp.com/todo/?uid=${location.uid}&note=&delete=${itemToDelete}`);
        setRefresh(refresh * -1)
    }

    return (
        <Card>
        <Header>Notes</Header>
        <AddItems>
            <Title placeholder='Add notes here' value={TodoTitle} onChange={(e) => setTodoTitle(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && addItems()} />
            <Add onClick={addItems}/>
        </AddItems>
        <ListItems>
            {TodoItems.map((item, index) => (
                <>
                <ItemTitle key={index}>{item}</ItemTitle>
                <Delete value={item} onClick={(e) => deleteItem(e.target.value)}/>
                </>
                )
                ).reverse()}
        </ListItems>
    </Card>
    );
}

export default Todo
