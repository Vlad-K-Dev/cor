import React from "react";
import * as L from "korus-ui";
import aboutAnalysisImg from "../../images/about-2.svg";

function AboutAnalysis() {

  return (
    <L.Div className="about-Analysis">
      <L.Div className="about-main">
        <L.Div className="about-content">
          <L.Div className="about-img">
            <L.Img
              className="about-representation-img"
              src={aboutAnalysisImg}
              alt="Женщина изучает документ"
            />
          </L.Div>
          <L.P>
            Вы&nbsp;не&nbsp;знаете, почему с&nbsp;вас взысканы денежные средства, и&nbsp;не&nbsp;представляете,
            можно&nbsp;ли их&nbsp;вернуть.
          </L.P>
          <L.H4>Адвокат сделает для вас следующее:</L.H4>
          <L.Ul className="main-list">
            <L.Li>
              точно установит причину взыскания, в&nbsp;том числе изучив материалы
              в&nbsp;Федеральной службе судебных приставов;
            </L.Li>
            <L.Li>
              подготовит заключение о&nbsp;наличии или отсутствии оснований для обжалования взыскания.
            </L.Li>
          </L.Ul>
        </L.Div>
      </L.Div>
      <L.H4 className="about-happen-title">Как всё будет происходить?</L.H4>
      <L.H5>Заявка на&nbsp;Анализ возможности обжалования</L.H5>
      <L.P>
        Вы&nbsp;звоните нам или оставляете заявку на&nbsp;сайте,
        мы&nbsp;связываемся с&nbsp;вами незамедлительно.
      </L.P>
      <L.H5>Анализ ситуации и&nbsp;экспертиза</L.H5>
      <L.P>
        Вы&nbsp;рассказываете нам о&nbsp;вашей проблеме, предоставляете имеющиеся у&nbsp;вас документы.
        Мы&nbsp;анализируем сложившуюся ситуацию, в&nbsp;том числе изучаем дело
        в&nbsp;Федеральной службе судебных приставов и&nbsp;материалы первичного дела.
      </L.P>
      <L.H5>Результат</L.H5>
      <L.P>
        Вы&nbsp;получаете точную информацию о&nbsp;рекомендуемых действиях,
        их&nbsp;перспективах и&nbsp;последствиях.
      </L.P>
      <L.Div className="buttons-block">
        <L.A
          className="order-button"
          href="#feedback"
        >
          Оформить заявку
        </L.A>
      </L.Div>
    </L.Div>
  );
}

export default AboutAnalysis;
