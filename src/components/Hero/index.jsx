import React from "react";

Hero.propTypes = {};

function Hero(props) {
  const {name} = props;
  console.log(name);
  return <div>name={name}</div>;
}

export default React.memo(Hero);
