import React, {Component} from "react";

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    };

    handleChange = (e) => {
        console.log('phoneForm handleChange');
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handelSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        console.log('phoneForm handelSubmit ');
        console.log(this.state);
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        })
    };

    render() {
        console.log('phoneForm render');
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