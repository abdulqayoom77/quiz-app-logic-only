let html = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    // {
    //     question: 'What is the correct HTML element for inserting a line break?',
    //     option1: '<linebreak>',
    //     option2: '<br>',
    //     option3: '<break>',
    //     correctOption: "<br>"
    // },
    // {
    //     question: 'What is the correct HTML for adding a background color?',
    //     option1: '<body bg="yellow">',
    //     option2: '<background>yellow</background>',
    //     option3: '<body style="background-color:yellow;">',
    //     correctOption: '<body style="background-color:yellow;">'
    // },
    // {
    //     question: 'Choose the correct HTML element to define important text:',
    //     option1: '<strong>',
    //     option2: '<b>',
    //     option3: '<i>',
    //     correctOption: '<strong>'
    // },
    // {
    //     question: 'Choose the correct HTML element to define emphasized text:',
    //     option1: '<italic>',
    //     option2: '<i>',
    //     option3: '<em>',
    //     correctOption: "<em>"
    // },
    // {
    //     question: 'What is the correct HTML for creating a hyperlink?',
    //     option1: '<a>http://www.w3schools.com</a>',
    //     option2: '<a href="http://www.w3schools.com">W3Schools</a>',
    //     option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
    //     correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    // },
    // {
    //     question: 'Which character is used to indicate an end tag?',
    //     option1: '*',
    //     option2: '/',
    //     option3: '<',
    //     correctOption: "/"
    // },
    // {
    //     question: 'How can you open a link in a new tab/browser window?',
    //     option1: '<a href="url" target="new">',
    //     option2: '<a href="url" new>',
    //     option3: '<a href="url" target="_blank">',
    //     correctOption: '<a href="url" target="_blank">'
    // },
    // {
    //     question: 'Which of these elements are all <table> elements?',
    //     option1: '<table> <tr> <td>',
    //     option2: '<table> <head> <tfoot>',
    //     option3: '<table> <tr> <tt>',
    //     correctOption: "<table> <tr> <td>"
    // },
    // {
    //     question: "How can you make a numbered list?",
    //     option1: '<dl>',
    //     option2: '<ul>',
    //     option3: '<ol>',
    //     correctOption: "<ol>"
    // },
    // {
    //     question: 'How can you make a bulleted list?',
    //     option1: '<ol>',
    //     option2: '<list>',
    //     option3: '<ul>',
    //     correctOption: "<ul>"
    // },
    // {
    //     question: 'What is the correct HTML for inserting an image?',
    //     option1: '<img alt="MyImage">image.gif</img>',
    //     option2: '<img href="image.gif" alt="MyImage">',
    //     option3: '<img src="image.gif" alt="MyImage">',
    //     correctOption: '<img src="image.gif" alt="MyImage">'
    // },
    // {
    //     question: 'What is the correct HTML for making a checkbox?',
    //     option1: '<iput type="check">',
    //     option2: '<check>',
    //     option3: '<input type="checkbox">',
    //     correctOption: '<input type="checkbox">'
    // },
    // {
    //     question: "What is the correct HTML for making a text input field?",
    //     option1: '<input type="textfield">',
    //     option2: '<input type="text">',
    //     option3: '<textfield>',
    //     correctOption: '<input type="text">'
    // },
    // {
    //     question: 'What is the correct HTML for making a drop-down list?',
    //     option1: '<input type="list">',
    //     option2: '<list>',
    //     option3: '<select>',
    //     correctOption: '<select>'
    // },
    // {
    //     question: 'What is the correct HTML for making a text area?',
    //     option1: '<input type="textbox">',
    //     option2: '<input type="textarea">',
    //     option3: '<textarea>',
    //     correctOption: '<textarea>'
    // },
    // {
    //     question: 'What is the correct HTML for inserting a background image?',
    //     option1: '<background img="background.gif">',
    //     option2: '<body bg="background.gif">',
    //     option3: '<body style="background-image:url(background.gif)">',
    //     correctOption: '<body style="background-image:url(background.gif)">'
    // }
]

var questionz = document.getElementById('quest');
var optn1 = document.getElementById('opt1')
var optn2 = document.getElementById('opt2')
var optn3 = document.getElementById('opt3')
var index = 0;
var btnn = document.getElementById('btn')
var score = 0;
var timer = document.getElementById('timer')
var mins = 1;
var secs = 59;
var clock = setInterval(function () {
    timer.innerHTML = `0${mins} : ${secs}`
    secs--
    if (secs < 0) {
        secs = 59
        mins--
        if (mins < 0) {
            mins = 1;
            secs = 59
        }
    }
}, 1000)
// var overAllMins = 9;
// var overAllSecs = 59;
// var clock = setInterval(function(){
//     timer.innerHTML = `0${overAllMins} : ${overAllSecs}`
//     secs--
//     if(secs < 0){
//         secs = 59
//         mins--
//         console.log('Time Over')
//         nextQues()
//     }
// },1000)

function nextQues() {
    var selected = document.getElementsByName('options')

    for (var i = 0; i < selected.length; i++) {

        if (selected[i].checked) {
            var selectedValue = selected[i].value;
            var selectedQuestion = html[index - 1]['question']
            var selectedAnswer = html[index - 1][`option${selectedValue}`]
            var correctOption = html[index - 1][`correctOption`]
            console.log(`Seleted Answer = ${selectedAnswer} \nCorrect Answer = ${correctOption}`)
            if (selectedAnswer == correctOption) {
                score++
            }
        }
        selected[i].checked = false
        btnn.disabled = true
    }
    if (index > html.length - 1) {
        var Prcentage = (score / html.length) * 100;
        document.write(`<div>
        <p>Your obtained ${score} Marks Out of a Total of ${html.length} Marks and Your Percentage is 
        <h1>${Math.round(Prcentage)}%</h1>
        </p>`)
        if (Prcentage <= 50) {
            document.write(`<h2>FAIL</h2>`)
        }
        else if (Prcentage > 50) {
            document.write(`<h2>PASS</h2></div>`)

        }

    }
    else {
        questionz.innerText = html[index].question
        optn1.innerText = html[index].option1
        optn2.innerText = html[index].option2
        optn3.innerText = html[index].option3
        index++
        mins = 1
        secs = 59
    }

}

nextQues()

function clicked() {
    btnn.disabled = false
}
// function nextQu(){
//         if(nextQues()){
//             clock = setInterval(function(){
//                 timer.innerHTML = `0${mins} : ${secs}`
//                 secs--
//                 if(secs < 0){
//                     secs = 59
//                     mins--
//                     if (mins < 0){
//                         mins = 1;
//                         secs = 59
//                     }
//                 }
//             },1000)
//         }
// }
// btnn.addEventListener("click", nextQu());
