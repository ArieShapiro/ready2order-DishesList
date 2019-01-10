import React, { Component } from "react";
// import { any, number } from "prop-types";
import Dishes from './Dishes';

//Data should be fetched from another file
//Checkboxes by the cooking status icon, that activates markAsCooked function onChanging it
//Real fake date to dishes
//Lazy loading 
//May be to add 'loading...' icon when it in 'staek cooking' status


class App extends Component<{}, { dishes: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      dishes: [
        {
          id: 2,
          dishType: "T‑bone steak",
          table: 1,
          quantity: 1,
          orderedAt: "19:36",
          notes: "half raw please",
          isCooked: false
        },
        {
          id: 3,
          dishType: "T‑bone steak",
          table: 1,
          quantity: 1,
          orderedAt: "19:36",
          notes: "half raw please",
          isCooked: false
        }
      ]
    };
  }

  markAsCooked = (id: number) => {
    let dishes = this.state.dishes;
    dishes.forEach((dish: any) => {
      if (dish.id === id) {
        dish.isCooked = true;
      }
    });
    this.setState({
      dishes
    });
  };

  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Dishes</h1>
        <Dishes dishes={this.state.dishes} markAsCooked={this.markAsCooked} />
      </div>
    );
  }
}

export default App;
