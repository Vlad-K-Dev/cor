import React from "react";
import * as L from "korus-ui";
import logolg from "../images/logo.svg";
import mainImg from "../images/main.svg";

class Header extends React.Component {
  render() {
    return (
      <L.Div className="header container" id="main">
        <L.Header className="header-logo">
          <L.Img src={logolg} alt="Логотип" />
        </L.Header>
        <L.Div className="header-main">
          <L.Div className="header-main-content">
            <L.H1 className="header-head">
              С&nbsp;вашего счёта списали деньги?
            </L.H1>
            <L.H4>
              Не&nbsp;волнуйтесь. Мы&nbsp;выясним причину и&nbsp;вернём деньги, если взыскание неправомерно.
            </L.H4>
            <L.P>
              Причины для взыскания могут быть разными: штрафы, невыплаченные кредиты, долги за&nbsp;коммуналку,
              не&nbsp;уплаченные вовремя налоги или забытый платёж по&nbsp;алиментам.
              Квалифицированный юрист поможет разобраться и&nbsp;решить проблему.
            </L.P>
          </L.Div>
          <L.Div className="header-main-img">
            <L.Img src={mainImg} alt="Мужчина обеспокоен списанием денег" />
          </L.Div>
        </L.Div>
        <L.Div>
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

export default Header;
