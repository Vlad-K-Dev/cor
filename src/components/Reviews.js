import React from "react";
import * as L from "korus-ui";
import ReviewsBlock from "./reviews/ReviewsBlock";

class Reviews extends React.Component {
  render() {
    return (
      <L.Div className="reviews container" id="reviews">
        <L.H2 className="reviews-head">Что говорят клиенты<span>*</span></L.H2>
        <ReviewsBlock />
        <L.Div className="buttons-block">
          <L.A
            className="order-button"
            href="#feedback"
          >
            Отправить заявку
          </L.A>
        </L.Div>
      </L.Div>
    );
  }
}

export default Reviews;
