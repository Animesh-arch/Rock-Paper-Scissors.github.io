// challenge 3 : rock, paper, scissors
function rpsGame(yourChoice) {
    console.log(yourChoice);
    // console.log(yourChoice.src);    //gives the source of image
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt()); //embedding the math formula with rock,paper,scissors
    console.log('Computer choice:', botChoice);

    results = decideWinner(humanChoice, botChoice); //[draw: 0.5,0.5], [win: 1,0], [lose: 0,1]
    console.log(results);

    message = finalMessage(results); //('message': 'you won', 'color': 'green')
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);   // picks random number from 0,1 & 2(math.floor : 0.9 --> 0)
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},                   //objects
        'paper': {'scissors': 0, 'paper': 0.5, 'rock': 1},
        'scissors': {'rock': 0, 'paper': 1, 'scissors': 0.5}                  
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];                         //accessing rps database and coincide with your choice
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'O-Oh, you lost!', 'color': 'red'};
    }   else if (yourScore === 0.5) {
        return {'message': 'Hmph, you tied!', 'color': 'yellow'};
    }   else {
        return {'message': 'Yay, Po! You win.', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // remove images upon clicking

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');           //creating a seperate div for images
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"     //here "'" is the src attri

    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"     //accessing color and text of the message

    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);          //gives the images into flexboxrpsdiv

    document.getElementById('flex-box-rps-div').appendChild(messageDiv); 

    document.getElementById('flex-box-rps-div').appendChild(botDiv);  
}