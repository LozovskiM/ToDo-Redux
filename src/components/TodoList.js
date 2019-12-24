import React from 'react';
import { connect } from 'react-redux';

import { getTodos, deleteTodo } from '../actions';

class TodoList extends React.Component {
    componentDidMount() {
        this.props.getTodos();
    }

    deleteTodo = (item) => {
        this.props.deleteTodo(item.id)
    };

    renderHelper = () => {
        const todos = this.props.todos.map((item) => {
            return (
                <div className="item" key={item.id}>
                    <div className="right floated content">
                        <button onClick={() => this.deleteTodo(item)} className="ui button negative">X</button>
                    </div>
                    <li>{item.title}</li>
                </div>
            );
        });

        return todos;
    };

    render() {
        return (
            <div>
                <h3>Todo List</h3>
                <ul className="ui celled list">{this.renderHelper()}</ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, {
    getTodos,
    deleteTodo
})(TodoList);
