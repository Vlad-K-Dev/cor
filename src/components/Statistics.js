import React from "react";
import * as L from "korus-ui";
import statisticsImg from "../images/statistics.svg";

class Statistics extends React.Component {
    render() {
        return (
            <L.Div className="statistics container" id="statistics">
                <L.H2 className="statistics-head">
                    Кто мы&nbsp;и&nbsp;что мы&nbsp;можем
                </L.H2>
                <L.Div className="statistics-main-content">
                    <L.Div className="statistics-main">
                      <L.P>
                        Мы&nbsp;&mdash; представители адвокатских сообществ и&nbsp;объединений, которые сотрудничают со&nbsp;СберПраво.
                      </L.P>
                      <L.P>
                        Вместе со&nbsp;всероссийской цифровой платформой юридических решений мы&nbsp;стремимся к&nbsp;тому, чтобы
                        каждый человек чувствовал себя уверенно в&nbsp;правовом поле и&nbsp;мог законно, грамотно и&nbsp;оперативно
                        отвечать на&nbsp;вызовы современного мира.
                      </L.P>
                    </L.Div>
                    <L.Div className="statistics-img">
                        <L.Img src={statisticsImg} alt="Мужчина и женщина – адвокаты"/>
                    </L.Div>
                </L.Div>
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

export default Statistics;
