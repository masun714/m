import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.components";
import { SearchBox } from "./components/search-box/search-box.components";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField:''
    };

    console.log(this)
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      // fetch('https://win.on.cc/js/realtimeodds/HAD2.js?t=20200531003142&_=1590856302247')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ monsters: data });
      });
  }

  testingFunction = (e) =>{
    console.log(this)
  }

  render() {
    const {monsters, searchField} = this.state;
    const fitleredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App">
        <SearchBox 
          type='search' 
          placeHolder='search monster' 
          chnageHandling={this.testingFunction}
          // chnageHandling={ e =>{
          //   this.setState({searchField: e.target.value})
          // }}
        />
        <CardList monsters={fitleredMonsters} />
      </div>
    );
  }
}

export default App;
