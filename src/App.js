import React from "react";
import * as L from "korus-ui";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import About from "./components/About";
import Price from "./components/Price";
import Statistics from "./components/Statistics";
import Questions from "./components/Questions";
import Reviews from "./components/Reviews";
import Feedback from "./components/Feedback";
import Notification from "./components/Notification";
import navMouse from "./images/computer-mouse.svg";
import $ from "jquery";
window.jQuery = $;
window.$ = $;

class App extends React.Component {
  componentDidMount() {
    $("#root").on("click", "a", function (event) {
      if (
        $(this).attr("id") !== "agreement-link" &&
        $(this).attr("id") !== "nav-link"
      ) {
        event.preventDefault();
        let id = $(this).attr("href"),
          top = $(id).offset().top;
        $("body,html").animate({ scrollTop: top }, 500);
      }
    });

    $("#button-order").on("click", function () {
      $('input[type="radio"]').prop('checked', false);
      $("#check-order").prop('checked', true);
    });
    $("#button-doc").on("click", function () {
      $('input[type="radio"]').prop('checked', false);
      $("#check-doc").prop('checked', true);
    });
    $("#button-representation").on("click", function () {
      $('input[type="radio"]').prop('checked', false);
      $("#check-representation").prop('checked', true);
    });

    let listLink = $(".nav-link");
    let deleteClass = function () {
      listLink.each(function () {
        $(this).removeClass("active");
      });
      $("#nav-mouse").removeClass("none");
    };

    $(window).scroll(function () {
      let heightMain = $("#main").innerHeight() - 300;
      let heightTasks = $("#tasks").innerHeight() + heightMain;
      let heightAbout = $("#about").innerHeight() + heightTasks;
      let heightPrice = $("#price").innerHeight() + heightAbout;
      let heightStatistics = $("#statistics").innerHeight() + heightPrice;
      let heightQuestions = $("#questions").innerHeight() + heightStatistics;
      let heightReviews = $("#reviews").innerHeight() + heightQuestions;
      let height = $(window).scrollTop();
      if (height > heightMain) {
        $("#nav-main").addClass("active");
        $("#nav-logo").addClass("active");
      } else {
        $("#nav-main").removeClass("active");
        $("#nav-logo").removeClass("active");
      }
      if (height <= heightMain) {
        deleteClass();
        $("#main-nav").addClass("active");
      } else if (heightTasks >= height && height > heightMain) {
        deleteClass();
        $("#tasks-nav").addClass("active");
      } else if (heightAbout >= height && height > heightTasks) {
        deleteClass();
        $("#about-nav").addClass("active");
      } else if (heightPrice >= height && height > heightAbout) {
        deleteClass();
        $("#price-nav").addClass("active");
      } else if (heightStatistics >= height && height > heightPrice) {
        deleteClass();
        $("#statistics-nav").addClass("active");
      } else if (heightQuestions >= height && height > heightStatistics) {
        deleteClass();
        $("#questions-nav").addClass("active");
      } else if (heightReviews >= height && height > heightQuestions) {
        deleteClass();
        $("#reviews-nav").addClass("active");
      } else if (heightReviews < height) {
        deleteClass();
        $("#feedback-nav").addClass("active");
        $("#nav-mouse").addClass("none");
      }
    });
  }

  render() {
    return (
      <>
        <Header />
        <Tasks />
        <About />
        <Price />
        <Statistics />
        <Questions />
        <Reviews />
        {/*<Feedback />*/}
        <Notification />
        <L.Div className="navigation">
          <L.Div className="nav-links">
            <L.A className="nav-link active" href="#main" id="main-nav">
              <L.Span />
            </L.A>
            <L.A className="nav-link" href="#tasks" id="tasks-nav">
              <L.Span />
            </L.A>
            <L.A className="nav-link" href="#about" id="about-nav">
              <L.Span />
            </L.A>
            <L.A className="nav-link" href="#price" id="price-nav">
              <L.Span />
            </L.A>
            <L.A className="nav-link" href="#statistics" id="statistics-nav">
              <L.Span />
            </L.A>
            <L.A className="nav-link" href="#questions" id="questions-nav">
              <L.Span />
            </L.A>
            <L.A className="nav-link" href="#reviews" id="reviews-nav">
              <L.Span />
            </L.A>
            <L.A className="nav-link" href="#feedback" id="feedback-nav">
              <L.Span />
            </L.A>
          </L.Div>
          <L.Div className="nav-mouse" id="nav-mouse">
            <L.Img src={navMouse} alt="Компьютерная мышь" />
          </L.Div>
        </L.Div>
        <L.A className="nav-button" href="#main" id="nav-main" />
      </>
    );
  }
}

export default App;
