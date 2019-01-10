import React from "react";
import { any } from "prop-types";

const Dishes: any = (props: any) => {
  const chefHatIcon = (
    <img className="chef-hat" src="https://img.icons8.com/wired/64/000000/chef-hat.png"/>
  );
  const readyToServeIcon = <i className="fas fa-concierge-bell"></i>;
  const dishesList: any = props.dishes.map((dish: any) => {
    return (
      <li  onClick={() => {props.markAsCooked(dish.id)}} className="collection-item" key={dish.id}>
        <span>{dish.dishType}</span>
        <span className="right">{dish.isCooked ? readyToServeIcon : chefHatIcon}</span>
        <span className="right"><input type="checkbox"/></span>
      </li>
    );
  });

  return <ul className="dishes collection">{dishesList}</ul>;
};

export default Dishes;

