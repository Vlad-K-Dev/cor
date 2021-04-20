import React from "react";
import * as L from "korus-ui";
import aboutCourtDecisionAppealingImg from "../../images/about-3.svg";

function AboutCourtDecisionAppealing() {
  
  return (
    <L.Div className="about-consultation">
      <L.Div className="about-main">
        <L.Div className="about-content">
          <L.Div className="about-img">
            <L.Img
              className="about-representation-img"
              src={aboutCourtDecisionAppealingImg}
              alt="Женщина со свитком"
            />
          </L.Div>
          <L.P>
            С&nbsp;вас взыскали деньги по&nbsp;судебному приказу, но&nbsp;вы&nbsp;не&nbsp;согласны с&nbsp;суммой
            и/или самим фактом взыскания.
          </L.P>
          <L.H4>Адвокат сделает для вас следующее:</L.H4>
          <L.Ul className="main-list">
            <L.Li>
              изучит материалы дела, в&nbsp;том числе в&nbsp;Федеральной службе судебных приставов;
            </L.Li>
            <L.Li>
              подготовит и&nbsp;направит в&nbsp;суд заявление об&nbsp;отмене судебного приказа;
            </L.Li>
            <L.Li>
              защитит ваши интересы в&nbsp;суде.
            </L.Li>
          </L.Ul>
        </L.Div>
      </L.Div>
      <L.H4 className="about-happen-title">Как всё будет происходить?</L.H4>
      <L.H5>Заявка на&nbsp;обжалование решения суда</L.H5>
      <L.P>
        Вы&nbsp;звоните нам или оставляете заявку на&nbsp;сайте,
        мы&nbsp;связываемся с&nbsp;вами незамедлительно.
      </L.P>
      <L.H5>Анализ ситуации и&nbsp;экспертиза</L.H5>
      <L.P>
        Вы&nbsp;рассказываете нам о&nbsp;вашей проблеме, предоставляете имеющиеся у&nbsp;вас документы.
        Мы&nbsp;анализируем сложившуюся ситуацию.
      </L.P>
      <L.H5>Суд</L.H5>
      <L.P>
        Подготовим материалы, составим апелляционную жалобу с&nbsp;ходатайством о&nbsp;восстановлении срока
        обжалования, примем участие в&nbsp;судебных заседаниях по&nbsp;восстановлению срока
        обжалования и&nbsp;апелляционной инстанции.
      </L.P>
      <L.H5>Результат</L.H5>
      <L.P>
        Отстоим ваши интересы и&nbsp;добьёмся обжалования решения суда.
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

export default AboutCourtDecisionAppealing;
