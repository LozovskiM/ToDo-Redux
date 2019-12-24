import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';
import TodoForm from './TodoForm';

class AddTodo extends React.Component {
    onSubmit = (formValues) => {
        this.props.addTodo(formValues.todo);
    };

    render() {
        return (
            <div className="ui container">
                <TodoForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.newTodo
    };
};

export default connect(mapStateToProps, {
    addTodo
})(AddTodo);
