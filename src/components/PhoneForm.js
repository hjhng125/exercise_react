import React, {Component} from "react";

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handelSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        })
    };

    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <input placeholder="Name" value={this.state.name} onChange={this.handleChange} name="name"/>
                <input placeholder="Phone number" value={this.state.phone} onChange={this.handleChange} name="phone"/>
                <button type="submit"> Register </button>
            </form>
        );
    }
}
export default PhoneForm;