let questions = [{
        question: "Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?",

        input: {
            type: "radio",
            qNumber: "Q1",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Quelle est votre température corporelle ?",

        input: {
            type: "number",
            qNumber: "Q2",
            name: "degrés",
            min: 34,
            max: 42,
        },
    },
    {
        question: "Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",

        input: {
            type: "radio",
            qNumber: "Q3",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?",

        input: {
            type: "radio",
            qNumber: "Q4",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Ces derniers jours, avez-vous un mal de gorge ?",

        input: {
            type: "radio",
            qNumber: "Q5",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.",

        input: {
            type: "radio",
            qNumber: "Q6",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?",

        input: {
            type: "radio",
            qNumber: "Q7",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",

        input: {
            type: "radio",
            qNumber: "Q8",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?",

        input: {
            type: "radio",
            qNumber: "Q9",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Actuellement, comment vous vous sentez ?",

        input: {
            type: "radio",
            qNumber: "Q10",
            answer: [{
                    text: "Bien",
                    icon: " far fa-laugh",
                },
                {
                    text: "Assez bien",
                    icon: " far fa-smile",
                },
                {
                    text: "Fatigué(e)",
                    icon: " far fa-frown",
                },
                {
                    text: "Très fatigué",
                    icon: "far fa-dizzy",
                },
            ],
        },
    },
    {
        question: "Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.",

        input: {
            type: "number",
            qNumber: "Q11",
            name: "ans",
            min: 15,
            max: 110,
        },
    },
    {
        question: "Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",

        input: {
            type: "number",
            qNumber: "Q12",
            name: "kg",
            min: 20,
            max: 250,
        },
    },
    {
        question: "Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",

        input: {
            type: "number",
            qNumber: "Q13",
            name: "cm",
            min: 80,
            max: 250,
        },
    },
    {
        question: "Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",

        input: {
            type: "radio",
            qNumber: "Q14",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Êtes-vous diabétique ?",

        input: {
            type: "radio",
            qNumber: "Q15",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Avez-vous ou avez-vous eu un cancer ?",

        input: {
            type: "radio",
            qNumber: "Q16",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",

        input: {
            type: "radio",
            qNumber: "Q17",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Avez-vous une insuffisance rénale chronique dialysée ?",

        input: {
            type: "radio",
            qNumber: "Q18",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Avez-vous une maladie chronique du foie ?",

        input: {
            type: "radio",
            qNumber: "Q19",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Êtes-vous enceinte ?",

        input: {
            type: "radio",
            qNumber: "Q20",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
                {
                    text: "Homme",
                    icon: "fa-male",
                },
            ],
        },
    },
    {
        question: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",

        input: {
            type: "radio",
            qNumber: "Q21",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
    {
        question: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",

        input: {
            type: "radio",
            qNumber: "Q22",
            answer: [{
                    text: "Oui",
                    icon: "fa-check",
                },
                {
                    text: "Non",
                    icon: "fa-times",
                },
            ],
        },
    },
];

let testBtn = document.querySelector(".start");
let questionnaire = document.querySelector(".questionnaire");
let Préambule = document.querySelector(".Préambule");
let stepper = document.querySelectorAll(".stepper h1");
let nextBtn = document.querySelector(".next");
let previousBtn = document.querySelector(".previous");
let currentquestion = document.querySelector(".question");
let answerInputs = document.querySelector(".answer-inputs");
let progressBar = document.querySelector(".bar");
let questionNumber = document.querySelector(".question-number");
let inputBox = document.querySelector(".inputBox");

let result = document.querySelector(".Préambule h1");
let resultMessage = document.querySelectorAll(".Préambule p");

console.log(resultMessage[0]);

testBtn.addEventListener("click", startTest);

inputBox.addEventListener("change", (e) => {
    let input = e.target;

    if (input.type === "number") {
        let number = parseFloat(input.value);

        if (number >= input.min && number <= input.max) {
            answers[input.name] = input.value;
            console.log(answers);

            nextBtn.disabled = false;
        } else {
            nextBtn.disabled = true;
        }
    } else {
        answers[input.name] = input.id;
        console.log(answers);
        nextBtn.disabled = false;
    }
});

let currentQuestionIndex = 0;

function hideprevious() {
    if (currentQuestionIndex === 0) {
        previousBtn.classList.add("hide");
    } else {
        previousBtn.classList.remove("hide");
    }
}

function startTest() {
    stepper[0].classList.remove("active");
    stepper[1].classList.add("active");
    testBtn.style.display = "none";
    Préambule.style.display = "none";
    questionnaire.style.display = "block";
    hideprevious();
    nextBtn.disabled = true;
    showQuestion(questions[currentQuestionIndex]);
}

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < 21) {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
        folowProgress(currentQuestionIndex);
        hideprevious();

        nextBtn.disabled = true;
        if (currentQuestionIndex === 21) {
            nextBtn.innerText = "Terminer le test";
            nextBtn.classList.add("result");
            let resultBtn = document.querySelector(".result");
            resultBtn.addEventListener("click", Results);
        } else {
            nextBtn.innerText = "Suivant";
        }
    }
});

previousBtn.addEventListener("click", () => {
    currentQuestionIndex--;
    showQuestion(questions[currentQuestionIndex]);
    folowProgress(currentQuestionIndex);
    hideprevious();

    nextBtn.disabled = true;
    if (currentQuestionIndex === 21) {
        nextBtn.innerText = "Terminer le test";
    } else {
        nextBtn.innerText = "Suivant";
        nextBtn.classList.remove("result");
    }
});

function showQuestion(question) {
    currentquestion.innerText = question.question;
    answerInputs.innerHTML = "";
    let inputAnswer = question.input.answer;
    let input = question.input;

    if (question.input.type === "radio") {
        inputAnswer.forEach((answer) => {
            answerInputs.innerHTML += `
                    <div>
                        <input type="radio" name="${input.qNumber}" id="${answer.text}">
                        <label for="${answer.text}">
                        <i class="fas ${answer.icon}"></i>
                        <span>${answer.text}</span> </label>
                    </div>`;
        });
    } else {
        answerInputs.innerHTML += `<input type="number" name="${input.qNumber}" id="${input.name}" min="${input.min}" max="${input.max}" placeholder="${input.min} - ${input.max}">
                                    <span class="input-span">${input.name}</span>`;
    }
}

function folowProgress(number) {
    let currentNmber = number + 1;

    questionNumber.innerText = currentNmber;
    progressBar.style.width = `${(100 / 22) * number}%`;
}

let answers = {};

let counter = 0;

function Results() {
    if (answers["Q1"] === "Oui") {
        counter = counter + 1;
    }

    if (answers["Q8"] === "Oui" || answers["Q9"] === "Oui") {
        counter = counter + 1;
    }

    if (answers["Q10"] === "Fatigué(e)" || answers["Q10"] === "Très fatigué") {
        counter = counter + 1;
    }

    if (answers["Q14"] === "Oui" || answers["Q15"] === "Oui") {
        counter = counter + 1;
    }

    showResult(counter);
}

function showResult(counter) {
    stepper[1].classList.remove("active");
    stepper[2].classList.add("active");
    testBtn.style.display = "block";
    Préambule.style.display = "block";
    questionnaire.style.display = "none";
    testBtn.textContent = " Recommencer le test";
    testBtn.addEventListener("click", () => {
        window.location.reload();
    });

    result.innerText = "Résultats";

    if (counter === 0) {
        resultMessage[0].innerText =
            "Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19, consulter la page Conseils";
        resultMessage[1].innerText =
            "Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.";
        resultMessage[0].style.fontSize = "30px";
        resultMessage[0].style.fontWeight = "bold";
        resultMessage[0].style.color = "#787878";
    } else if (counter === 1) {
        resultMessage[0].innerText =
            "Nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes";
        resultMessage[1].innerText =
            "Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.";
        resultMessage[0].style.fontSize = "30px";
        resultMessage[0].style.fontWeight = "bold";
        resultMessage[0].style.color = "#787878";
    } else if (counter === 2) {
        resultMessage[0].innerText =
            "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domicile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.";
        resultMessage[1].innerText =
            "Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.";
        resultMessage[0].style.fontSize = "30px";
        resultMessage[0].style.fontWeight = "bold";
        resultMessage[0].style.color = "#787878";
    } else {
        resultMessage[0].innerText = "Appelez le 141";
        resultMessage[1].innerText =
            "Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.";

        resultMessage[0].style.color = "#d63031";
        resultMessage[0].style.fontSize = "50px";
        resultMessage[0].style.fontWeight = "bold";
    }
}