import React, {Component} from "react";

const Problematic = () => {
    throw (new Error('bugs'));
    return (
        <div>

        </div>
    );
}

class Counter extends Component {
    state = {
        number: 0,
        error: false
    };

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount is deprecated');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate');
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    handleIncrease = () => {
        const {number} = this.state;
        this.setState({
            number: number + 1
        });
    };

    handleDecrease = () => {
        this.setState(
            ({number}) => ({
                number: number - 1
            })
        )
    };

    render() {
        if (this.state.error) return (<h1>Error</h1>);
        return (
            <div>
                <p>Value: {this.state.number}</p>
                {this.state.number === 4 && <Problematic/>}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;