import React from "react";
import * as L from "korus-ui";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import task1 from "../../images/task-1.svg";
import task2 from "../../images/task-2.svg";
import task3 from "../../images/task-3.svg";

function TasksBlock() {
  const options = {
    autoWidth: true,
    responsive: {
      0: {
        margin: 16,
      },
      1200: {
        margin: 20,
      },
    },
  };

  return (
    <OwlCarousel options={options}>
      <L.Div className="task">
        <L.Img
          className="task-img"
          src={task1}
          alt="Документы под лупой"
        />
        <L.H4>
          Проверим основания
        </L.H4>
        <L.P>
          Проанализируем материалы о&nbsp;списании с&nbsp;вас денежных средств и&nbsp;точно установим,
          есть&nbsp;ли основания для обжалования.
        </L.P>
      </L.Div>
      <L.Div className="task">
        <L.Img
          className="task-img"
          src={task2}
          alt="Женщина на фоне планшета"
        />
        <L.H4>
          Установим истину
        </L.H4>
        <L.P>
          Соберём необходимые доказательства необоснованности списания или взыскания с&nbsp;вас конкретной суммы.
        </L.P>
      </L.Div>
      <L.Div className="task">
        <L.Img
          className="task-img"
          src={task3}
          alt="Мужчина с весами"
        />
        <L.H4>
          Восстановим справедливость
        </L.H4>
        <L.P>
          Подготовим жалобу и&nbsp;необходимые ходатайства для суда и&nbsp;отстоим ваши интересы в&nbsp;суде.
        </L.P>
      </L.Div>
    </OwlCarousel>
  );
}

export default TasksBlock;
