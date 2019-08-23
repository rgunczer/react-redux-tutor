import React from 'react';
import { connect } from 'react-redux';

const todoList = (props) => {
    return (
        <ul>
            { props.todos.map((x, index) => <li key={index}>{x}</li>) }
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps,
    null
)(todoList);
