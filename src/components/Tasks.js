import React from "react";
import * as L from "korus-ui";
import TasksBlock from "./tasks/TaskBlocks";

class Tasks extends React.Component {
  render() {
    return (
      <L.Div className="tasks container" id="tasks">
        <L.Div className="gradient" />
        <L.H2 className="tasks-head">Чем мы&nbsp;вам поможем</L.H2>
        <TasksBlock />
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

export default Tasks;
