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
    ]
  };
  handleCreate = (data) => {
    const {information} = this.state;
    console.log(data);
    console.log(information);
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
  };

  render() {
    const {information} = this.state;
    console.log(information);
    return (
        <div>
          <PhoneForm onCreate={this.handleCreate}/>
          <PhoneList data={this.state.information}/>
        </div>
    );
  }
}

export default App;
