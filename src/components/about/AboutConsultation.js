import React from "react";
import * as L from "korus-ui";
import aboutConsultationImg from "../../images/about-1.svg";

function AboutConsultation() {

  return (
    <L.Div className="about-consultation">
      <L.Div className="about-main">
        <L.Div className="about-content">
          <L.Div className="about-img">
            <L.Img
              src={aboutConsultationImg}
              alt="Женщина проводит консультацию"
            />
          </L.Div>
          <L.P>
            Вы&nbsp;согласны с&nbsp;взысканной суммой,
            но&nbsp;хотите сделать процесс принудительного взыскания более комфортным.
          </L.P>
          <L.H4>Адвокат подробно расскажет вам:</L.H4>
          <L.Ul className="main-list">
            <L.Li>
              как уменьшить периодически списываемые суммы;
            </L.Li>
            <L.Li>
              как получить отсрочку или рассрочку в&nbsp;исполнении решения суда.
            </L.Li>
          </L.Ul>
        </L.Div>
      </L.Div>
      <L.H4 className="about-happen-title">Как всё будет происходить?</L.H4>
      <L.H5>Заявка на&nbsp;консультацию</L.H5>
      <L.P>
        Вы&nbsp;звоните нам или оставляете заявку на&nbsp;сайте,
        мы&nbsp;связываемся с&nbsp;вами незамедлительно.
      </L.P>
      <L.H5>Анализ ситуации</L.H5>
      <L.P>
        Вы&nbsp;рассказываете нам о&nbsp;вашей проблеме, предоставляете имеющиеся у&nbsp;вас документы.
        Мы&nbsp;всё анализируем.
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
          Отправить заявку
        </L.A>
      </L.Div>
    </L.Div>
  );
}

export default AboutConsultation;
