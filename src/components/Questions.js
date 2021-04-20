import React from "react";
import * as L from "korus-ui";

class Questions extends React.Component {
    render() {
        return (
            <L.Div className="questions container" id="questions">
                <L.Div className="gradient"/>
                <L.H2 className="questions-head">Вопросы</L.H2>
                <L.Div className="questions-scroll">
                    <L.Collapse isAccordion>
                        <L.Div className="questions-block">
                            <L.Collapse.Panel panelKey="1">
                                <L.Collapse.Heading>
                                    <L.H5>
                                        Кто вы&nbsp;и&nbsp;почему именно к&nbsp;вам я&nbsp;должен обратиться?
                                    </L.H5>
                                </L.Collapse.Heading>
                                <L.Collapse.Body>
                                    <L.Div className="questions-answer">
                                        Мы&nbsp;&mdash; адвокаты, которые оказывают услуги клиентам на&nbsp;платформе
                                        юридических решений СберПраво. Вам будет помогать адвокат, имеющий необходимую
                                        квалификацию и&nbsp;значительный опыт разрешения ситуаций, связанных
                                        с&nbsp;обжалованием взысканий.
                                    </L.Div>
                                </L.Collapse.Body>
                            </L.Collapse.Panel>
                        </L.Div>
                        <L.Div className="questions-block">
                            <L.Collapse.Panel panelKey="2">
                                <L.Collapse.Heading>
                                    <L.H5>
                                        Какие гарантии вы&nbsp;предоставляете, если я&nbsp;закажу у&nbsp;вас услуги?
                                    </L.H5>
                                </L.Collapse.Heading>
                                <L.Collapse.Body>
                                    <L.Div className="questions-answer">
                                        Мы&nbsp;гарантируем максимум нашей вовлеченности в&nbsp;решение вашего вопроса,
                                        оперативное реагирование и&nbsp;квалифицированную правовую помощь.
                                    </L.Div>
                                </L.Collapse.Body>
                            </L.Collapse.Panel>
                        </L.Div>
                        <L.Div className="questions-block">
                            <L.Collapse.Panel panelKey="3">
                                <L.Collapse.Heading>
                                    <L.H5>
                                        Можно&nbsp;ли вообще вернуть деньги, списанные со&nbsp;счёта судебными
                                        приставами?
                                    </L.H5>
                                </L.Collapse.Heading>
                                <L.Collapse.Body>
                                    <L.Div className="questions-answer">
                                        Возможность вернуть удержанные средства зависит от&nbsp;правомерности удержания.
                                        Если удержание неправомочно, то&nbsp;деньги можно вернуть. Например,
                                        в&nbsp;следующих случаях:
                                        <L.Ul>
                                            <L.Li>&mdash;&nbsp;списание произошло из-за технической ошибки;</L.Li>
                                            <L.Li>&mdash;&nbsp;деньги списаны с&nbsp;вас повторно;</L.Li>
                                            <L.Li>
                                                &mdash;&nbsp;списанные средства получены вами от&nbsp;доходов,
                                                на&nbsp;которые нельзя наложить
                                                взыскание;
                                            </L.Li>
                                            <L.Li>
                                                &mdash;&nbsp;вы&nbsp;не&nbsp;знали об&nbsp;открытии исполнительного
                                                производства в&nbsp;отношении
                                                вас и&nbsp;не&nbsp;получали соответствующее постановление.
                                            </L.Li>
                                        </L.Ul>
                                    </L.Div>
                                </L.Collapse.Body>
                            </L.Collapse.Panel>
                        </L.Div>
                        <L.Div className="questions-block">
                            <L.Collapse.Panel panelKey="4">
                                <L.Collapse.Heading>
                                    <L.H5>
                                        С&nbsp;моей карты приставы списали все деньги&nbsp;&mdash; до&nbsp;рубля.
                                        А&nbsp;это была не&nbsp;только зарплата, но&nbsp;и&nbsp;детские пособия
                                        и&nbsp;алименты.
                                        <br/>Как&nbsp;же теперь быть?
                                    </L.H5>
                                </L.Collapse.Heading>
                                <L.Collapse.Body>
                                    <L.Div className="questions-answer">
                                        Не&nbsp;волнуйтесь. В&nbsp;законе &#8470;&nbsp;229-ФЗ прописан список доходов,
                                        на&nbsp;которые взыскание распространять нельзя&nbsp;&mdash; их&nbsp;17,
                                        и&nbsp;среди них&nbsp;&mdash; пособия на&nbsp;детей, маткапитал и&nbsp;алименты.
                                        Эти деньги можно вернуть, собрав необходимый пакет документов (в&nbsp;вашем
                                        случае&nbsp;&mdash;
                                        о&nbsp;социальных выплатах и&nbsp;получении алиментов) и&nbsp;обратившись
                                        с&nbsp;заявлением в&nbsp;ФССП.
                                    </L.Div>
                                </L.Collapse.Body>
                            </L.Collapse.Panel>
                        </L.Div>
                    </L.Collapse>
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

export default Questions;
