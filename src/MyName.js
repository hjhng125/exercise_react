import React from "react";

// class MyName extends Component {
//     render() {
//         return (
//             <div>
//                 Hi my name is <b>{this.props.name}</b>
//             </div>
//         );
//     }
// }
const MyName = ({name}) => {
    return (
        <div>
            Hi my name is <b>{name}</b>
        </div>
    )
};
MyName.defaultProps = {
    name: '기본 이름'
};

export default MyName