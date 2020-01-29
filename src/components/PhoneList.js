import React, {Component} from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneList extends Component{
    static defaultProps = {
        data: [],
        onRemove: () => console.warn('onRemove not define'),
        onUpdate: () => console.warn('onUpdate not define'),
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate');
        console.log(nextProps.data);
        console.log(this.props.data);
        return nextProps.data !== this.props.data;
    }

    render() {
        const {data, onRemove, onUpdate} = this.props;
        console.log('phoneList render ');
        console.log(this.props);
        const list = data.map(
            info => (<PhoneInfo key={info.id} info={info} onRemove={onRemove} onUpdate={onUpdate}/>)
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneList;