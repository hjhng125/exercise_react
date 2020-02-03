// 리덕스 스토어를 생성하는 함수를 모듈화하여 내보냄
import { createStore } from 'redux';
import modules from 'store/modules';

// const configure = () => {
//     const store = createStore(modules);
//     return store;
// };
const configure = () => {
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    const store = createStore(modules, devTools);
    return store;
};
export default configure;