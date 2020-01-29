import React, {Component} from "react";

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        },
    };
    state = {
        editing: false,
        name: '',
        phone: '',
    };

    handleRemove = () => {
        const {info, onRemove} = this.props;
        console.log('phoneInfo handleRemove ');
        console.log(this.props);
        onRemove(info.id);
    };
    handleToggleEdit = () => {
        const {editing} = this.state;
        console.log('phoneInfo handleToggleEdit ');
        console.log(this.state);
        this.setState({
            editing: !editing
        })
    };
    handleChange = (e) => {
        const {name, value} = e.target;
        console.log('phoneInfo handleChange ');
        console.log(e.target);
        this.setState({
            [name]: value
        })
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {info, onUpdate} = this.props;
        console.log('phoneInfo componentDidUpdate ');
        console.log(this.props);
        if(!prevState.editing && this.state.editing) {
            console.log('phoneInfo componentDidUpdate false -> true');
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }
        if (prevState.editing && !this.state.editing){
            console.log('phoneInfo componentDidUpdate true -> false');
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextProps.info);
        console.log(this.props.info);
        console.log(this.state.editing);
        console.log(nextState.editing);
        return !(!this.state.editing && !nextState.editing && nextProps.info === this.props.info);
    }

    render() {
        console.log('phoneInfo render ' + this.props.info.id);
        const style ={
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };
        const {editing} = this.state;
        if (editing){
            console.log('phoneInfo render editing ');
            console.log(this.state);
            return (
                <div style={style}>
                    <div>
                        <input value={this.state.name} name="name" placeholder="name" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <input value={this.state.phone} name="phone" placeholder="phone number" onChange={this.handleChange}/>
                    </div>
                    <button onClick={this.handleToggleEdit}>Apply</button>
                    <button onClick={this.handleRemove}>Remove</button>
                </div>
            );
        }
        const {
            name, phone
        } = this.props.info;
        console.log('phoneInfo render ');
        console.log(this.props.info);
        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>Modify</button>
                <div><button onClick={this.handleRemove}>Remove</button></div>
            </div>
        );
    }
}

export default PhoneInfo;