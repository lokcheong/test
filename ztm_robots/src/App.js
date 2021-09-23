import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';


class App extends Component {

    //this constructor super access the state of the parent of class App
    //i.e. component
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };

        //we don't need this if we use => function to define handleChange
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        console.log('before fetch')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
        console.log('after fetch')
    }

    //using arrow function allows us to lexically bind the component context
    //to the function context, so this within handlChange now 
    handleChange = (e) => {
      this.setState({searchField : e.target.value})
    }

    render() {

      const {monsters, searchField} = this.state;

      const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

      return (
          <div className="App">
            <h1>Monsters</h1>
            <SearchBox
              placeholder = 'type to filter monster'
              handleChange = {this.handleChange}
            />
            <CardList monsters={filteredMonsters}/>
        </div>
      );

    }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;