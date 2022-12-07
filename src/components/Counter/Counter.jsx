import "./Counter.scss";
import { useState } from "react";

const Counter = () => {
  const [ticketNumber, setTicketNumber] = useState(0);
  //Plus Btn
  const handlePlusBtn = () => {
    if (ticketNumber >= 0) {
      setTicketNumber(ticketNumber + 1);
    }
  };
  //Minus Btn
  const handleMinusBtn = () => {
    if (ticketNumber > 0) {
      setTicketNumber(ticketNumber - 1);
    }
  };

  return (
    <div className="counter">
      <button className="counter__btn--minus" onClick={handleMinusBtn}>
        -
      </button>
      <p className="counter__number">{ticketNumber}</p>
      <button className="counter__btn--plus" onClick={handlePlusBtn}>
        +
      </button>
    </div>
  );
};

export default Counter;
