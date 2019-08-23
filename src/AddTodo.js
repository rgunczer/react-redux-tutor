import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, loadItems } from './store/actionCreators';

class AddTodo extends Component {

    constructor() {
        super()
        this.state = {
            text: 'aaa'
        }
        this.inpRef = React.createRef();
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleAdd = () => {
        // alert(this.state.text)
        this.props.addItem(this.state.text);
        this.setState({
            text: ''
        })
        this.inpRef.current.focus();
    }

    handleLoad = () => {
        this.props.loadItems();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inpRef} value={this.state.text} onChange={this.handleChange} />
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handleLoad}>Load</button>
            </div>
        );
    }

}

export default connect(
    null,
    { addItem, loadItems }
)(AddTodo);
