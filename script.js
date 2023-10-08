const button = document.querySelector('.button');
const info = document.getElementById('info');
const inputDate = document.querySelector('.inputDate');
const mistake = document.getElementById('mistake');

function countDaysTill () {
  let birthday = document.getElementById('birthday').value;
  let msBirthday = Date.parse(birthday);
  let today = Date.now();
  let daysTill = Math.floor((msBirthday - today) / (1000 * 60 * 60 * 24));
  let result = document.getElementById('result');
  result.textContent = daysTill;
  info.style.visibility = "visible";

  let days = document.getElementById('days');
  let lastDigit = daysTill % 10;
  let secondLastDigit = Math.floor((daysTill % 100) / 10);

  let blankInput = () => {
      if(inputDate.value == "") {
        mistake.style.display = "block";
        info.style.display = "none";
      } else {
        mistake.style.display = "none";
        info.style.display = "block";
      }
    };
     blankInput();

  if(secondLastDigit === 1) {
    days.textContent = "дней";
  } else {
    if(lastDigit >= 2 && lastDigit <= 4) {
      days.textContent = "дня";
    } else {
      if(lastDigit === 1) {
        days.textContent = "день";
      } else {
      days.textContent = "дней";
     }
   }
 }
}

button.addEventListener('click', countDaysTill);
