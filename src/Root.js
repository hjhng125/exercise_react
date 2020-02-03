import React from "react";
import App from "components/App";
import store from 'store';
import {Provider} from 'react-redux';
// 최상위 Component
const Root = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};

export default Root;