import React from "react";
import 'components/AppTemplate.css'

// 두가지 화면을 띄워주기 위한 Template
const AppTemplate=({counter, todos}) => {
    return (
        <div className="app-template">
            {/* counter view */}
            <div className="counter">{counter}</div>
            {/* todos view */}
            <div className="todos">{todos}</div>
        </div>
    );
};
export default AppTemplate;
