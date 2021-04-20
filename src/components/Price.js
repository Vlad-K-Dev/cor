import React from "react";
import * as L from "korus-ui";
import PriceBlock from "./price/PriceBlocks";

class Price extends React.Component {
  render() {
    return (
      <L.Div className="prices container" id="price">
        <L.Div className="gradient" />
        <L.H2 className="price-head">Сколько стоит?</L.H2>
        <PriceBlock />
      </L.Div>
    );
  }
}

export default Price;
