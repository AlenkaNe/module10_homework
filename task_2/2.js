/*Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. */
const btn = document.querySelector('.btn');
btn.addEventListener('click', size, false);

function size() {
  
  let screenWidth = window.screen.width;
  let screenHeight = window.screen.height;
  let a = [screenWidth, screenHeight];
  return window.alert(a)
}