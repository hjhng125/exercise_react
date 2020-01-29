import React, {Component} from 'react';
import './App.css';
import PhoneForm from "./components/PhoneForm";
import PhoneList from "./components/PhoneList";

class App extends Component {
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: '홍진형',
        phone: '010-0101-0101'
      },
      {
        id: 1,
        name: 'ghdgh',
        phone: '010-1919-1919'
      }
    ],
    keyword: ''
  };
  handleChange = (e) => {
    console.log('app handleChange ');
    console.log(e.target.value);
    this.setState({
      keyword: e.target.value
    })
  }
  handleCreate = (data) => {
    const {information} = this.state;
    console.log('app handleCreate');
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
  };
  handleRemove = (id) => {
    const {information} = this.state;
    console.log('app handleRemove');
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  };
  handleUpdate = (id, data) => {
    const {information} = this.state;
    console.log('app handleUpdate');
    this.setState({
      information: information.map(
          info => id === info.id
              ? {...info, ...data} // id가 같다면 기존의 값에 새로운 data를 붙인다.
              : info // 기존의 값을 유
      )
    })
  };
  render() {
    const {information, keyword} = this.state;
    const filteredList = information.filter(
        info => info.name.indexOf(keyword) !== -1
    );
    console.log('app render ');
    console.log(information);
    return (
        <div>
          <PhoneForm onCreate={this.handleCreate}/>
          <input placeholder="Search name.." onChange={this.handleChange} value={keyword}/>
          <PhoneList data={filteredList} onRemove={this.handleRemove} onUpdate={this.handleUpdate}/>
        </div>
    );
  }
}

export default App;
