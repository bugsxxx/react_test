import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props
    console.log("counters - rendered");

    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >Reset
        </button>
        {
          counters.map(
            counter => (
              <Counter
                key={counter.id}
                onIncrement={onIncrement}
                onDelete={onDelete}
                counter={counter} // pass the entire object with all its props
              />
            )
          )
        }
      </div>
    );

  }
}

export default Counters;
