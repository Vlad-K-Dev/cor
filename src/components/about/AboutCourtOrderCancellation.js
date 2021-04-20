import React from "react";
import * as L from "korus-ui";
import aboutCourtOrderCancellationImg from "../../images/about-4.svg";

function AboutCourtOrderCancellation() {
  
  return (
    <L.Div className="about-consultation">
      <L.Div className="about-main">
        <L.Div className="about-content">
          <L.Div className="about-img">
            <L.Img
              className="about-representation-img"
              src={aboutCourtOrderCancellationImg}
              alt="Женщина демонстрирует свой большой палец"
            />
          </L.Div>
          <L.P>
            С&nbsp;вас взыскали денежную сумму по&nbsp;решению суда, но&nbsp;вы&nbsp;с&nbsp;взысканием не&nbsp;согласны.
          </L.P>
          <L.H4>Адвокат сделает для вас следующее:</L.H4>
          <L.Ul className="main-list">
            <L.Li>
              подготовит материалы и&nbsp;составит апелляционную жалобу с&nbsp;ходатайством
              о&nbsp;восстановлении срока обжалования;
            </L.Li>
            <L.Li>
              отстоит ваши интересы в&nbsp;суде.
            </L.Li>
          </L.Ul>
        </L.Div>
      </L.Div>
      <L.H4 className="about-happen-title">Как всё будет происходить?</L.H4>
      <L.H5>Заявка на&nbsp;Отмену судебного приказа</L.H5>
      <L.P>
        Вы&nbsp;звоните нам или оставляете заявку на&nbsp;сайте,
        мы&nbsp;связываемся с&nbsp;вами незамедлительно.
      </L.P>
      <L.H5>Анализ ситуации и&nbsp;экспертиза</L.H5>
      <L.P>
        Вы&nbsp;рассказываете нам о&nbsp;вашей проблеме, предоставляете имеющиеся у&nbsp;вас документы.
        Мы&nbsp;анализируем ситуацию, в&nbsp;том числе изучаем материалы Федеральной службы судебных приставов.
      </L.P>
      <L.H5>Суд</L.H5>
      <L.P>
        Подготовим и&nbsp;направим в&nbsp;суд заявление с&nbsp;необходимым пакетом документов
        об&nbsp;отмене судебного приказа.
      </L.P>
      <L.H5>Результат</L.H5>
      <L.P>
        Защитим ваши интересы в&nbsp;суде и&nbsp;проконтролируем
        отмену судом вынесенного судебного приказа о&nbsp;взыскании с&nbsp;вас денежных средств.
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

export default AboutCourtOrderCancellation;
