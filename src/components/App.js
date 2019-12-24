import React from 'react';

import TodoList from './TodoList';
import AddTodo from './AddTodo';

const App = () => {
    return (
        <div style={{ width: '50%' }} className="ui container">
            <AddTodo />
            <div style={{ width: '50%' }} className="ui container">
                <TodoList />
            </div>
        </div>
    );
};

export default App;
