$(document).ready(function() {

  var domains = ["Q1", "Q2", "Q3", "Q4", "Q5 ", "Q6", "Q7", "Q8 ", "Q9", "Q10", "Q11", "Q12 ", "Q13", "Q14","Q15","Q16","Q17","Q18","Q19","Q20"]
  var questionText = ["Social humanoid robot developed by Hong Kong-based company Hanson Robotics",
  "What was the name of the first industrial robot?",
  "Which of these is not  a robot Locomotion technique?",
  "How to send information from the robot sensors to the robot controllers?",
  "What is the full form of  LISP used in Robotics?",
  "Name of the industry which highly used the robots?",
"What is the function of actuators in robotics? (to convert -)",
"which of the following is referred to as the brain of robots?",
"Which of the following is not a functionality of robots?",
"What is the full form of AGV?",
"The design notes for the robot(Automa cavaliere) appear in sketchbooks of which Scientist?",
"The study of mechanical systems that function like living organisms or parts of living organisms, is called?",
"The Military are researching Exoskeletons which are controlled by what?",
"Identify the robot.",
"Identify the robot.",
"What is this block called?",
" Type of sensor used to detect both metallic and non-metallic objects?",
" 1.4 metres tall, weighing 36 kg, capable of recognising faces, walking and grasping objects. Which robot do you think it is?"];

var choices=[["Kelle","webner","Sophia","Lexie"],
["Unimate","Ultimate","Razor","C3PO"],
["Rolling","Hybrid motion","Standing"," Hopping"],
["frequency","signals”,”short wavelengths", "large wavelengths"],
["Low intensity server programming","Low intensity service programming","list programming”,”large intelligence service programming"],
["Automobile industry”,”Medical areas”,”research industry”,”military areas"],
["mechanical energy into electrical energy”,”light energy to electrical energy”,”electrical energy to mechanical energy”,” electrical energy to light energy "],
["Controller", "Microcontroller","Virtual Processor","Tactile Sensors"],
["Reprogrammability"," Multifunctionality","Efficient performance", "Responsibility"],
["Automated grouped vehicle","Alternative guided vehicle","All time guided vehicle"," Automatic guided vehicle"],
["Leonardo Da Vinci","Michelangelo","Leonard Diggis","Aristotle"],
["Bionics","Biomechanics","Ergonomics","Ergometrics"],
["Batteries","AI”,”Signals from the brain","An on-board computer which is pre-programmed"],
["Aibo","Nao","Walker","Gita"]
,["Atlas","Asimo","Pepper","Sanbot"],
["Go/Power Block","Large Motor Block","Move Tank Block","Move Tank Block "],
["Capacitive sensor","Inductive sensor","pH sensor","Thermocouple sensor"],
["Valkyrie","Romeo","Paro","Zenbo"],
["Sensor","Effector","Power Supply","Actuator"],
["Radiation sensor","Collision sensor","Proximity sensor","Pressure sensor"]];
 
//   var addressstuff=["https://www.aaruushdomains.com/magefficie",
// "https://www.aaruushdomains.com/architecture",
// "https://www.aaruushdomains.com/digital-design",
// "https://www.aaruushdomains.com/electrizite",
// "https://www.aaruushdomains.com/bluebook",
// "https://www.aaruushdomains.com/konstruktion",
// "https://www.aaruushdomains.com/fundaz",
// "https://www.aaruushdomains.com/x-zone",
// "https://www.aaruushdomains.com/vimanaz",
// "https://www.aaruushdomains.com/praesentatio",
// "https://www.aaruushdomains.com/yuddhame",
// "https://www.aaruushdomains.com/online",
// "https://www.aaruushdomains.com/machination",
// "https://www.aaruushdomains.com/robogyan"]
  var answers = [3,1,3,2,3,1,3,2,4,4,1,1,3,2,1,1,1,2,4,2];
  var userAnswers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var ans = 0;
  var correct = 0;

  function hideAll() {
    $(".options").fadeOut(10);
    $(".question-box").fadeOut(10);
    $(".progressBar").fadeOut(10);
    $("option1").removeClass("btn-primary");
    $("option2").removeClass("btn-primary");
    $("option3").removeClass("btn-primary");
    $("option4").removeClass("btn-primary");
  }

  function progressBarIn() {
    $(".progressBar").fadeIn(500);
    var progress = 100;
    var progressAnim = setInterval(frame, 100);
    function frame() {
      if (progress <= 0) {
        clearInterval(progressAnim);
        progress = 100;
      } else {
        progress--;
        $(".progressBar").css("width", progress+"vw")
      }
    }

  }

  function questionBoxIn(id) {
    $(".question-box h1").text(domains[id]);
    $(".question-box h2").text(questionText[id]);
    console.log("../res/q images/"+id+'.png');
    $(".question-box img").attr("src", "./res/q images/"+id+".png");
    $(".question-box").fadeIn(500);
  }

  function optionsIn(id) {
    $(".options").fadeIn(500);
    $("#option1").text(choices[id][0]);
    $("#option2").text(choices[id][1]);
    $("#option3").text(choices[id][2]);
    $("#option4").text(choices[id][3]);
  }

  function questionOn(id) {
    progressBarIn();
    questionBoxIn(id);
    optionsIn(id);
    $("#option1").click(function () {
      $(this).addClass("btn-primary");
      ans=1;
      $("option2").removeClass("btn-primary");
      $("option3").removeClass("btn-primary");
      $("option4").removeClass("btn-primary");
    });
    $("#option2").click(function () {
      $(this).addClass("btn-primary");
      ans=2;
      $("option1").removeClass("btn-primary");
      $("option3").removeClass("btn-primary");
      $("option4").removeClass("btn-primary");
    });
    $("#option3").click(function () {
      $(this).addClass("btn-primary");
      ans=3;
      $("option1").removeClass("btn-primary");
      $("option2").removeClass("btn-primary");
      $("option4").removeClass("btn-primary");
    });
    $("#option4").click(function () {
      $(this).addClass("btn-primary");
      ans=4;
      $("option2").removeClass("btn-primary");
      $("option3").removeClass("btn-primary");
      $("option1").removeClass("btn-primary");
    });
    setTimeout(function () {
      hideAll();
      userAnswers[id] = ans;
      console.log(userAnswers);
      ans = 0;
    }, 10000);
  }

function startQuiz() {
  var count = 0;
  hideAll();
  questionOn(count);
  count++;
  startQuestions = setInterval(function () {
    if (count == 14) {
      clearInterval(startQuestions);
      console.log("interval end");
      console.log("------------RESULT------------");
      showResult();
    }
    else {
      questionOn(count);
      count++;
    }
  }, 11000);
}

$('#startQuizBtn').click(function () {
  $('.intro').css('display','none');
  $('.preQuiz').text('Ready?');
  $('.preQuiz').fadeIn(500);
  setTimeout(function () {
    $('.preQuiz').fadeOut(500);
  }, 500);
  setTimeout(function () {
    $('.preQuiz').text('Set.');
    $('.preQuiz').fadeIn(500);
    setTimeout(function () {
      $('.preQuiz').fadeOut(500);
    }, 500);
  }, 1000);
  setTimeout(function () {
    $('.preQuiz').text('Go!');
    $('.preQuiz').fadeIn(500);
    setTimeout(function () {
      $('.preQuiz').fadeOut(500);
    }, 500);
  }, 2000);
  setTimeout(startQuiz, 3000);
});

function showResult() {
  correct = 0;
  for (var i = 0; i < answers.length; i++) {
    if (answers[i] == userAnswers[i]) {
      correct++;
      $("#qualifiedDomains").append( domains[i] + "</a></li>");
    }
  }
  $('#score').text(correct);
  $('.result').fadeIn(1000);
}



});
