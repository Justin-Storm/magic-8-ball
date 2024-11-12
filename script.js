let userName = '';
const name = document.getElementById('name');
const question = document.getElementById('question');
const response = document.getElementById('response');

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputName = document.getElementById('inputname').value;
    const inputQuestion = document.getElementById('inputquestion').value;

    if (inputName === '') {
        name.innerHTML = 'Hello!';
      }
      else {
        name.innerHTML = 'Hello, ' + inputName + '!';
      }
      
      let userQuestion = inputQuestion.toLowerCase();
      
      if (inputName === '') {
        question.innerHTML = 'User asked, ' + userQuestion;
      }
      else {
        question.innerHTML = inputName + ' asked, ' + userQuestion
      }
      
      let randomNumber = Math.floor(Math.random() * 8);
      
      let eightBall = randomNumber;
      
      switch(randomNumber) {
        case 0:
          response.innerHTML = 'EightBall said: ' + 'It is certain';
          break;
        case 1:
          response.innerHTML = 'EightBall said: ' + 'It is decidedly so';
          break;
        case 2:
          response.innerHTML = 'EightBall said: ' + 'Reply hazy try again';
          break;
        case 3:
          response.innerHTML = 'EightBall said: ' + 'Cannot predict now';
          break;
        case 4:
          response.innerHTML = 'EightBall said: ' + 'Do not count on it';
          break;
        case 5:
           response.innerHTML = 'EightBall said: ' + 'My sources say no';
          break;
        case 6:
           response.innerHTML = 'EightBall said: ' + 'Outlook not so good';
          break;
        case 7:
           response.innerHTML = 'EightBall said: ' + 'Signs point to yes';
          break;
      }

});


