import React, { Component } from 'react';
import Counter from "./counter";

import {
ApolloClient,
InMemoryCache,
ApolloProvider,
useQuery,
gql
} from "@apollo/client";


function ExchangeRates() {
  const { loading, error, data } = useQuery(gql`
    {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
<span className="badge badge-pill badge-secondary">{currency}:</span> {rate}
      </p>
    </div>
  ));
}

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
<ExchangeRates />
      </div>
    );

  }
}

export default Counters;
