import React from "react";
import * as L from "korus-ui";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import price1 from "../../images/price-1.svg";
import price2 from "../../images/price-2.svg";
import price3 from "../../images/price-3.svg";
import price4 from "../../images/price-4.svg";

class PriceBlocks extends React.Component {
  render() {
    const options = {
      autoWidth: true,
      responsive: {
        0: {
          margin: 16,
        },
        1200: {
          margin: 32,
        },
      },
    };

    return (
      <OwlCarousel options={options}>
        <L.Div className="price">
          <L.Img src={price1} alt="Руки и документы" />
          <L.H4>Консультация с&nbsp;анализом документов</L.H4>
          <L.P>
            Сможете уменьшить списываемые с&nbsp;вас суммы и&nbsp;узнаете,
            как получить отсрочку или рассрочку по&nbsp;взысканиям.
          </L.P>
          <L.P className="price-value">800 ₽</L.P>
          <L.A
            className="order-button"
            href="#feedback"
            id="button-order"
          >
            Заказать<br />консультацию
          </L.A>
        </L.Div>
        <L.Div className="price">
          <L.Img src={price2} alt="Изучение документов" />
          <L.H4>Анализ возможности оспаривания взыскания</L.H4>
          <L.P>
            Будете абсолютно уверены, правомерно&nbsp;ли взыскание, и&nbsp;можно&nbsp;ли его обжаловать.
          </L.P>
          <L.P className="price-value">по&nbsp;договорённости</L.P>
          <L.A
            className="order-button"
            href="#feedback"
            id="button-representation"
          >
            Заказать<br />анализ
          </L.A>
        </L.Div>
        <L.Div className="price">
          <L.Img src={price3} alt="Мужчина читает документ" />
          <L.H4>Отмена судебного приказа</L.H4>
          <L.P>
            Добьёмся Отмены в&nbsp;отношении вас судебного приказа о&nbsp;взыскании.
          </L.P>
          <L.P className="price-value">5 000 ₽</L.P>
          <L.A
            className="order-button"
            href="#feedback"
            id="button-order"
          >
            Заказать отмену судебного приказа
          </L.A>
        </L.Div>
        <L.Div className="price">
          <L.Img src={price4} alt="Адвокат и судья" />
          <L.H4>Обжалование решения суда</L.H4>
          <L.P>
            Добьёмся обжалования решения суда о&nbsp;взыскании.
          </L.P>
          <L.P className="price-value">по&nbsp;договорённости</L.P>
          <L.A
            className="order-button"
            href="#feedback"
            id="button-representation"
          >
            Заказать обжалование решения суда
          </L.A>
        </L.Div>
      </OwlCarousel>
    );
  }
}

export default PriceBlocks;
