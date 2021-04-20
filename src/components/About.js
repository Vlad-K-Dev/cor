import React from "react";
import * as L from "korus-ui";
import AboutConsultation from "./about/AboutConsultation";
import AboutAnalysis from "./about/AboutAnalysis";
import AboutCourtOrderCancellation from "./about/AboutCourtOrderCancellation";
import AboutCourtDecisionAppealing from "./about/AboutCourtDecisionAppealing";


class About extends React.Component {
  render() {
    return (
      <L.Div className="about container" id="about">
        <L.H2 className="tasks-head">Как мы&nbsp;вам поможем</L.H2>
        <L.Tabs>
          <L.Tab title="Консультация с&nbsp;анализом документов" tabKey={0}>
            <AboutConsultation />
          </L.Tab>
          <L.Tab title="Анализ возможности оспаривания взыскания" tabKey={1}>
            <AboutAnalysis />
          </L.Tab>
          <L.Tab title="Обжалование решения суда" tabKey={2}>
            <AboutCourtDecisionAppealing />
          </L.Tab>
          <L.Tab title="Отмена судебного приказа" tabKey={3}>
            <AboutCourtOrderCancellation />
          </L.Tab>
        </L.Tabs>
      </L.Div>
    );
  }
}

export default About;
