// Sophie
import { useRef } from "react";
import CustomerBasket from "./CustomerBasket";

export default function Basket(props) {
  console.log(props);

  const EmptyBasket = useRef();
  const Overlay = useRef();

  function paymentClicked() {
    if (props.basket.length > 0) {
      props.setPayment();
      props.setButtonRemoved((oldState) => !oldState);
    } else {
      console.log("nothing in basket");
      EmptyBasket.current.classList.remove("hide");
      Overlay.current.classList.add("active");
    }
  }

  function hideAlert() {
    EmptyBasket.current.classList.add("hide");
    Overlay.current.classList.remove("active");
  }

  return (
    <>
      <fieldset className={`Your_order_id ${props.setThanks ? "hide" : ""}`}>
        <legend>
          <h1>Your Order</h1>
        </legend>
        <p className="ClosingTime">Last round at 22:00</p>
        <CustomerBasket basket={props.basket} />
        <button className={`Next ${props.buttonRemoved ? "hide" : ""}`} onClick={paymentClicked}>
          Go to payment
        </button>
      </fieldset>

      <div ref={Overlay} className="Overlay"></div>
      <div ref={EmptyBasket} className="hide EmptyBasket">
        <button onClick={hideAlert} className="Close">
          X
        </button>
        <p>Your basket is empty</p>
      </div>
    </>
  );
}
