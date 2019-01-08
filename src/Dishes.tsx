import React from "react";
import { any } from "prop-types";

const Dishes: any = (props: any) => {
  const chefHat = <img className="chef-hat" src="https://img.icons8.com/wired/64/000000/chef-hat.png"/>
  const readyToServe = <i className="fas fa-concierge-bell"></i>;
  const dishesList: any = props.dishes.map((dish: any) => {
    return (
      <li className="collection-item" key={dish.id}>
        <span onClick={() => {props.markAsCooked(dish.id)}}>{dish.dishType}</span>
        <span className="right">{dish.isCooked ? readyToServe : chefHat}</span>
      </li>
    );
  });

  return <ul className="dishes collection">{dishesList}</ul>;
};

export default Dishes;

