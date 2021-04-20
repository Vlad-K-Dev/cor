import React from "react";
import * as L from "korus-ui";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";

function ReviewsBlock() {
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);

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
      <L.Div className="review">
        <L.Div className="review-head">
          <L.H3>
            Виктор Уткин
          </L.H3>
        </L.Div>
        <L.P>
          С&nbsp;моего счёта списали штраф и&nbsp;пени, хотя штраф я&nbsp;оплатил сразу,
          но&nbsp;не&nbsp;смог вовремя предоставить приставам соответствующие документы.
          После того, как документы были предоставлены, деньги мне так и&nbsp;не&nbsp;вернули.
          Я&nbsp;обратился за&nbsp;консультацией&nbsp;и...
        </L.P>
        <L.P className="review-modal-button" onClick={() => setIsOpen1(true)}>
          Читать
        </L.P>
        <L.Modal isOpen={isOpen1} onClose={() => setIsOpen1(false)}>
          <L.Div className="review-head">
            <L.H3>
              Виктор Уткин
            </L.H3>
          </L.Div>
          <L.P>
            С&nbsp;моего счёта списали штраф и&nbsp;пени, хотя штраф я&nbsp;оплатил сразу,
            но&nbsp;не&nbsp;смог вовремя предоставить приставам соответствующие документы.
            После того, как документы были предоставлены, деньги мне так и&nbsp;не&nbsp;вернули.
            Я&nbsp;обратился за&nbsp;консультацией и&nbsp;получил понятный алгоритм действий&nbsp;&mdash;
            как мне следует поступить, чтобы разрешить свою проблему. Сделал всё, как рекомендовал мне юрист,
            и&nbsp;смог вернуть деньги.
          </L.P>
        </L.Modal>
      </L.Div>
      <L.Div className="review">
        <L.Div className="review-head">
          <L.H3>
            Дарья Козловская
          </L.H3>
        </L.Div>
        <L.P>
          Я&nbsp;очень долго билась с&nbsp;судебными приставами, писала даже жалобу,
          потому что с&nbsp;меня явно неправомерно сняли деньги.
          Помогло обращение в&nbsp;суд, которое вёл и&nbsp;сопровождал грамотный адвокат.
          Он&nbsp;добился того, чтобы судебное решение отменили.
        </L.P>
        <L.P className="review-modal-button" onClick={() => setIsOpen2(true)}>
          Читать
        </L.P>
        <L.Modal isOpen={isOpen2} onClose={() => setIsOpen2(false)}>
          <L.Div className="review-head">
            <L.H3>
              Дарья Козловская
            </L.H3>
          </L.Div>
          <L.P>
            Я&nbsp;очень долго билась с&nbsp;судебными приставами, писала даже жалобу,
            потому что с&nbsp;меня явно неправомерно сняли деньги. Помогло обращение в&nbsp;суд, которое вёл
            и&nbsp;сопровождал грамотный адвокат. Он&nbsp;добился того, чтобы судебное решение отменили.
          </L.P>
        </L.Modal>
      </L.Div>
      <L.Div className="review">
        <L.Div className="review-head">
          <L.H3>
            Никита Дроздов
          </L.H3>
        </L.Div>
        <L.P>
          Я&nbsp;не&nbsp;мог выплатить сумму по&nbsp;кредиту в&nbsp;банке и&nbsp;через 7&nbsp;месяцев получил
          судебный приказ о&nbsp;взыскании с&nbsp;меня задолженности. Долг я&nbsp;начал погашать и&nbsp;погасил,
          но&nbsp;сумма штрафа от&nbsp;банка все равно большая. Мне помогли добиться уменьшения этой суммы через суд.
        </L.P>
        <L.P className="review-modal-button" onClick={() => setIsOpen3(true)}>
          Читать
        </L.P>
        <L.Modal isOpen={isOpen3} onClose={() => setIsOpen3(false)}>
          <L.Div className="review-head">
            <L.H3>
              Никита Дроздов
            </L.H3>
          </L.Div>
          <L.P>
            Я&nbsp;не&nbsp;мог выплатить сумму по&nbsp;кредиту в&nbsp;банке и&nbsp;через 7&nbsp;месяцев получил
            судебный приказ о&nbsp;взыскании с&nbsp;меня задолженности. Долг я&nbsp;начал погашать и&nbsp;погасил,
            но&nbsp;сумма штрафа от&nbsp;банка все равно большая. Мне помогли добиться уменьшения этой суммы через суд.
          </L.P>
        </L.Modal>
      </L.Div>
    </OwlCarousel>
  );
}

export default ReviewsBlock;
