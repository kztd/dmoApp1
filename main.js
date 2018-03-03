// JavaScript Document
"use strict";
/* eslint-env es6, jquery*/

const FORMID = "#multipleChoices";
const QUESTION_SPAN = ".js-quizQuestion";
const ANSWER_SPAN = ".js-quizAnswers";
const RETAKE_QUIZ = ".js-retakeQuiz";
//const HIDEOUT = ".js-hideOut";


let i = 0; //counts questions
let c = 0; //counts questions answered correctly

const QUESTIONLIST = [
    {
        question: "'Dune' is the colloquial name of the planet ",
        answers: [{
                answer: "Arrakis",
                correct: true
        },
            {
                answer: "Usul",
                correct: false
                  },
            {
                answer: "Geidi Prime",
                correct: false
                  },
            {
                answer: "Caladan",
                correct: false
                  }]
    },
    {
        question: "What is the sietch name (a name known only to your tribe) given to Paul Atreides by the Fremen?",
        answers: [{
                answer: "Jor-El",
                correct: false
            },
            {
                answer: "Muad'Dib",
                correct: false
            },
            {
                answer: "Usul",
                correct: true
            },
            {
                answer: "Stilgar",
                correct: false
            }]
    },

    {
        question: "What is the name of Paul's home planet?",
        answers: [{
                answer: "Caladan",
                correct: true
            },
            {
                answer: "Kaitain",
                correct: false
            },
            {
                answer: "Geidi Prime",
                correct: false
            },
            {
                answer: "Earth",
                correct: false
            }]
    },
    {
        question: "The suit that sustains human life in the deserts of Arrakis is the ",
        answers: [{
                answer: "sunsuit.",
                correct: false
            },
            {
                answer: "lifesuit.",
                correct: false
            },
            {
                answer: "stillsuit.",
                correct: true
            },
            {
                answer: "sandshield.",
                correct: false
            }]
    },
    {
        question: "Paul is given what painful test of humanity by the Bene Gesserit?",
        answers: [{
                answer: "gom jabbar",
                correct: true
            },
            {
                answer: "pon farr",
                correct: false
            },
            {
                answer: "freth tar",
                correct: false
            },
            {
                answer: "jult-err",
                correct: false
            }]
    },
    {
        question: "Who betrays the Atreides to the Harkonnens on Arrakis?",
        answers: [{
                answer: "Duncan Idaho",
                correct: false
        },
            {
                answer: "Gurney Hallek",
                correct: false
                  },
            {
                answer: "The Shadout Mapes",
                correct: false
                  },
            {
                answer: "Dr. Wellington Yueh",
                correct: true
                  }]
    },
    {
        question: "Why do Fremen have blue-within-blue eyes?",
        answers: [{
                answer: "Because their diet is saturated with Spice.",
                correct: true
        },
            {
                answer: "Because they drink the Water of Life.",
                correct: false
                  },
            {
                answer: "Because they are exposed to wormsign.",
                correct: false
                  },
            {
                answer: "Because their eyes are adapted to Dune's bright sunlight.",
                correct: false
                  }]
    },
    {
        question: "What is the Water of Life?",
        answers: [{
                answer: "The last rain that fell on Arrakis",
                correct: false
        },
            {
                answer: "A metaphor for good luck",
                correct: false
                  },
            {
                answer: "Bile from drowned sandworms",
                correct: true
                  },
            {
                answer: "Water blessed by the Bene Gesserit Reverend Mother",
                correct: false
                  }]
    },

    {
        question: "Jessica Atreides defied the Bene Gesserit sisterhood by ",
        answers: [{
                answer: "bearing Duke Leto a daughter instead of a son.",
                correct: false
        },
            {
                answer: "bearing Duke Leto a son instead of a daughter.",
                correct: true
                  },
            {
                answer: "divorcing Duke Leto.",
                correct: false
                  },
            {
                answer: "refusing to drink the Water of Life.",
                correct: false
                  }]
    },
    {
        question: "What was the goal of the Bene Gesserit breeding program?",
        answers: [{
                answer: "To control the succession to the throne.",
                correct: false
        },
            {
                answer: "To eradicate genetic diseases.",
                correct: false
                  },
            {
                answer: "To produce a sentient sandworm.",
                correct: false
                  },
            {
                answer: "To produce the Kwisatz Haderach, a super-being.",
                correct: true
                  }]
    },
];

function handleSubmitClick() {

    $(FORMID).submit(function (event) {
        event.preventDefault();

        const ANSWER = $("input[type=radio]:checked").val();

        if (ANSWER === undefined) {
            $('.js-quizResult').text("Please select an answer.");
        } else if (ANSWER === "false") {
            const CORRECT = QUESTIONLIST[i].answers.filter(function (miniArr) {
                return miniArr.correct === true;
            });
            i++;
            $('.js-quizResult').html("Incorrect. The correct answer was:<br><span class = 'correct'>" + CORRECT[0].answer + "</span>");
        } else {
            c++;
            i++;
            $('.js-quizResult').text("Correct!");
        }

        $('.js-quizScore').text(c + ' of ' + QUESTIONLIST.length + ' questions answered correctly ');

        if (i == QUESTIONLIST.length) {
            endQuiz();
        }
        displayQuestion();
    });

}


function displayQuestion() {
    const ANSWERDISPLAY = `
    <input type="radio" name="choice" aria-label = "${QUESTIONLIST[i].answers[0].answer}" "value="${QUESTIONLIST[i].answers[0].correct}">${QUESTIONLIST[i].answers[0].answer}<br>
    <input type="radio" name="choice" aria-label = "${QUESTIONLIST[i].answers[1].answer}" value="${QUESTIONLIST[i].answers[1].correct}">${QUESTIONLIST[i].answers[1].answer}<br>
    <input type="radio" name="choice" aria-label = "${QUESTIONLIST[i].answers[2].answer}" value="${QUESTIONLIST[i].answers[2].correct}">${QUESTIONLIST[i].answers[2].answer}<br>
    <input type="radio" name="choice" aria-label = "${QUESTIONLIST[i].answers[3].answer}" value="${QUESTIONLIST[i].answers[3].correct}">${QUESTIONLIST[i].answers[3].answer}<br>
         `;
    $(QUESTION_SPAN).html(`Question #${i+1}<br>${QUESTIONLIST[i].question}`);
    $(ANSWER_SPAN).html(ANSWERDISPLAY);
}

/* global location */
function endQuiz() {
    $('.retake').toggle();
    $('.hideOut').hide();
    $(RETAKE_QUIZ).click(function () {
        location.reload();
        location.re
    });
}

function renderPage() {
    handleSubmitClick();
    displayQuestion();
}
/* global document */
var btn = document.querySelector('.mouse-cursor-gradient-tracking')
btn.onmousemove = function(e) {
  var x = e.pageX - btn.offsetLeft
  var y = e.pageY - btn.offsetTop
  btn.style.setProperty('--x', x + 'px')
  btn.style.setProperty('--y', y + 'px')
}

$(renderPage);
