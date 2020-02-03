// 리덕스와 연동해 줄 컴포넌트. 컨테이너 컴포넌트
// 뷰 만을 보여주는 컴포넌트는 프리젠테이셔널 컴포넌트

import React, {Component} from "react";
import Counter from "components/Counter";
import {CounterActions} from 'store/actionCreators';
import {connect} from 'react-redux';

class CounterContainer extends Component {
    handleIncrement = () => {
        CounterActions.increment();
    };
    handleDecrement = () => {
        CounterActions.decrement();
    };

    render() {
        const {handleIncrement, handleDecrement} = this;
        const {number} = this.props;
        return (
            <Counter
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                number={number}
            />
        );
    }
}

// props 값으로 넣어 줄 상태 정의
// const mapStateToProps = (state) => ({
//     number: state.counter.number
// });

// props 값으로 넣어 줄 액션 정의
// const mapDispatchToProps = (dispatch) => ({
//     increment: () => dispatch(counterActions.increment()),
//     decrement: () => dispatch(counterActions.decrement())
// });

// 컴포넌트를 리덕스와 연동 할 때에는 connect를 사용
// connect()의 결과는 컴포넌트에 props를 넣어주는 함수를 반환
// 반환된 함수에 우리가 만든 컴포넌트를 넣어줌
export default connect(
    (state) => ({
        number: state.counter.number
    })
)(CounterContainer);