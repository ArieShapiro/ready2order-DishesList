import React, { Component } from "react";
import { any, number } from "prop-types";
import Dishes from './Dishes';

class App extends Component<{}, { dishes: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      dishes: [
        //Later on this data should be fetched from another file
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
  //Change it that it should mark dish as coocked and not delete it
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
    
    console.log(this.state)
    
    // const selectedDish: object = this.state.dishes.filter((dish: any) => {
    //   return dish.id === id;
    // });

    // const dishes: any = this.state.dishes.filter((dish: any) => {
    //   return dish.id !== id;
    // });
   
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
