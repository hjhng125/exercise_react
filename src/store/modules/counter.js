import {createAction, handleActions} from 'redux-actions'
// 액션 타입 정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 함수 생성
// 나중에 다른 파일에서 불러와야 하기 때문에 내보냄
// export const increment = () => ({type: INCREMENT});
// export const decrement = () => ({type: DECREMENT});
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const initialState = {
    number: 0
};

// 리듀서를 만들어서 내보낸다.
// export default function reducer(state = initialState, action) {
//     // 리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하여 반환한다.
//     // state = initialState 이렇게 하면 initialState 가 기본 값이다.
//     switch (action.type) {
//         case INCREMENT:
//             return {number: state.number + 1};
//         case DECREMENT:
//             return {number: state.number - 1};
//         default:
//             return state;
//     }
// }

// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이루어진 객체이고,
// 두번째 파라미터는 초기 상태이다.
export default handleActions({
    [INCREMENT]: (state, action) => {
        return {number: state.number + 1};
    },
    // action 객체를 참조하지 않으므로 생략가능
    // state 부분에서 비구조화 할당도 해주어 더욱 간소화
    [DECREMENT]: ({number}) => ({number: number - 1})
}, initialState);
