import React from 'react';
import { Field, reduxForm } from 'redux-form';

class TodoForm extends React.Component {
    renderError = ({ touched, error }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    };

    renderForm = (props) => {
        const { input, label, meta } = props;
        const className = `field ${meta.touched && meta.error ? 'error': ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field
                    name="todo"
                    component={this.renderForm}
                    label="Enter Todo"
                />
                <button className="ui button primary">Add todo</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.todo) {
        errors.todo = 'Required!';
    }

    return errors;
};

export default reduxForm({
    form: 'todoForm',
    validate
})(TodoForm);
