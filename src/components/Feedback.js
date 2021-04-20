import React from "react";
import * as L from "korus-ui";
import feedbackImg from "../images/feedback.svg";
import logoImg from "../images/logo.svg";
// import emailjs from "emailjs-com";

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "1",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ value: event.target.value });
  }

  // В валидатор вставить актуальные для данного лэндинга значения

  // handleSubmit(event) {
  //   // ym(70863400,'reachGoal','otpravka-dolgi2');
  //   event.preventDefault();
  //   const isFormValid = L.form("form")
  //     .validate()
  //     .every(({ isValid }) => isValid);
  //   if (isFormValid) {
  //     emailjs
  //       .sendForm(
  //         "service_9amdp3g",
  //         "template_2y52rcd",
  //         "#form",
  //         "user_jAfu0uCw3Bod0tl6EH2Xy"
  //       )
  //       .then(
  //         (result) => {
  //           document.location.href = "https://dolga-net.mmka.ru/thanks.html";
  //         },
  //         (error) => {
  //           alert("Ошибка, попробуйте отправить форму позже!");
  //         }
  //       );
  //   }
  // }

  render() {
    return (
      <L.Div className="feedback container" id="feedback">
        <L.Div className="feedback-main">
          <L.H2 className="feedback-head">Заявка</L.H2>
          <form id="form" onSubmit={this.handleSubmit}>
            <input type="hidden" name="usluga" value={this.state.value} />
            <L.Div className="feedback-content">
              <L.Div className="feedback-form">
                <L.Div>
                  <L.Div className="feedback-input">
                    <L.Label className="form-label">
                      Имя*
                      <L.Input form="form" name="name" isRequired autocomplete="off" />
                    </L.Label>
                  </L.Div>
                  <L.Div className="feedback-input">
                    <L.Label className="form-label">
                      Email*
                      <L.Input form="form" name="email" isRequired autocomplete="off" />
                    </L.Label>
                  </L.Div>
                  <L.Div className="feedback-input">
                    <L.Label className="form-label">
                      Телефон*
                      <L.MaskedInput
                        autocomplete="off"
                        form="form"
                        name="phone"
                        mask="+# (###) ###-##-##"
                        placeholder="+_ (___) ___-__-__"
                        isRequired
                      />
                    </L.Label>
                  </L.Div>
                </L.Div>
                <L.P>Какая услуга вас интересует?</L.P>
                <L.RadioGroup value={this.state.value}>
                  <L.RadioButton
                    value="Консультация с анализом документов"
                    id="check-consultation"
                    onClick={this.handleChange}
                  >
                    Консультация с&nbsp;анализом документов
                  </L.RadioButton>
                  <L.RadioButton
                    value="Анализ возможности оспаривания взыскания"
                    id="check-analysis"
                    onClick={this.handleChange}
                  >
                    Анализ возможности оспаривания взыскания
                  </L.RadioButton>
                  <L.RadioButton
                    value="Отмена судебного приказа"
                    id="check-cancellation"
                    onClick={this.handleChange}
                  >
                    Отмена судебного приказа
                  </L.RadioButton>
                  <L.RadioButton
                    value="Обжалование решения суда"
                    id="check-appealing"
                    onClick={this.handleChange}
                  >
                    Обжалование решения суда
                  </L.RadioButton>
                </L.RadioGroup>
                <L.P>Укажите удобное вам время для связи с&nbsp;адвокатом</L.P>
                <L.Div className="feedback-dropdown">
                  <L.DropDownSelect
                    name="date"
                    data={["Сегодня", "Завтра", "Послезавтра"]}
                    placeholder="Сегодня "
                    // без пробела в конце текста плейсхолдера для инпута значение "Сегодня"===плейсхолдер
                  />
                  <L.DropDownSelect
                    name="time"
                    data={[
                      "09.00-10.00",
                      "10.00-11.00",
                      "11.00-12.00",
                      "12.00-13.00",
                      "13.00-14.00",
                      "14.00-15.00",
                      "15.00-16.00",
                    ]}
                    placeholder="09.00-10.00 "
                  />
                </L.Div>
                <L.Div className="feedback-agreement">
                  <L.P className="feedback-agreement__notification">
                    Нажимая на&nbsp;кнопку &laquo;Отправить&raquo; вы&nbsp;соглашаетесь
                    с&nbsp;
                    <L.A
                      className="feedback-agreement__link"
                      id="agreement-link"
                      href="agreement.html"
                    >
                      Политикой в&nbsp;отношении обработки персональных данных
                    </L.A>
                  </L.P>
                </L.Div>
              </L.Div>
              <L.Div className="feedback-img">
                <L.Img src={feedbackImg} alt="Женщина общается по телефону" />
              </L.Div>
              <L.Div className="buttons-block">
                <L.Button
                  form="form"
                  type="submit"
                  className="order-button feedback-button"
                >
                  Отправить
                </L.Button>
              </L.Div>
            </L.Div>
          </form>
          <L.P className="feedback-names-footnotes">
            *ФИО авторов отзывов изменены.
          </L.P>
        </L.Div>
        <L.Footer className="feedback-footer">
          <L.A href="#main" className="feedback-footer-img">
            <L.Img src={logoImg} alt="Лого" />
          </L.A>
        </L.Footer>
      </L.Div>
    );
  }
}

export default Feedback;
