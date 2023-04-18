//флаг состояния кнопок - 1 или 2
let flagColor;
//определяем элементы в DOM
const buttonStartColor = document.querySelector('button[data-start]');
const buttonStopColor = document.querySelector('button[data-stop]');
//ставим кнопки посредине экрана
buttonStartColor.style = `width:80px ; height: 45px; margin: 45% 2% 45% 45%`;
buttonStopColor.style = `width:80px ; height: 45px;margin 45% 45% 45% 2%`;
//стартовое положение кнопки Stop недоступно
buttonStopColor.disabled = true;
//вешаем слушателей на кнопки
buttonStartColor.addEventListener('click', () => {
  buttonStopColor.disabled = false;
  buttonStartColor.disabled = true;
  flagColor = 1;
  color();
});

buttonStopColor.addEventListener('click', () => {
  buttonStopColor.disabled = true;
  buttonStartColor.disabled = false;
  flagColor = 0;
  startChangeColor();
});
//Объявляем функцию смены цвета
function color() {
  if (flagColor === 1) {
    document.querySelector(
      'body'
    ).style = `background : ${getRandomHexColor()}`;
    startChangeColor();
  } else return;
}
//Функция с промисом
const startChangeColor = changeColor => {
  changeColor = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  changeColor.then(() => color());
};
//функция случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
