import React, { Component } from 'react';
import NavBar from './components/navbar'
import Counters from './components/counters';
import './App.css';

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log('App - constructor');
  }

  componentDidMount() {
    // Ajax Call
    // this.setState({ movies })

    console.log('App - Mounted');
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

      counters[index] = {...counter}; //clone object counter
      counters[index].value++;

      this.setState({ counters })
  }

  handleDelete = (counterId) => {
    // create a new array without the deleted
    const counters = this.state.counters.filter(c => c.id !== counterId)
    // this.setState({counters: counters })
    // since the key and value counters are the same it can be simplyfied to just counter
    this.setState({ counters })
  }

  handleReset = () => {
    console.log('teste');
    const counters = this.state.counters.map( c => {
      c.value = 0
      return c
    });

    this.setState( { counters } )
  };

  render(){
    console.log('App - rendered');
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>

        );
  }
}

export default App;
