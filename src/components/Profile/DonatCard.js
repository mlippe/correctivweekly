import React from "react";

import donat from "../../assets/donat.png";

export default function DonatCard(props) {
  function clickHandler() {
    let newCount = props.donatCount + props.amount;

    props.setDonatCount(newCount);
  }

  return (
    <div className={"donat-card " + props.colorScheme}>
      <img src={donat} alt="Donat" />
      <div className="amount">{props.amount + " Donats"}</div>
      <button className="small" onClick={clickHandler}>
        {props.price}
      </button>
    </div>
  );
}

DonatCard.defaultProps = {
  colorScheme: "yellow-gradient",
  amount: "10 Donats",
  price: "5 €"
};
