console.log('Hello World');
let buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].style.borderRadius = "42px";
  buttons[i].style.fontSize = "24.8px";
  buttons[i].style.padding = "9px 20px";
  buttons[i].style.border = "solid black 1px";
  buttons[i].style.textTransform = "uppercase";
  buttons[i].style.backgroundColor = "transparent";
}
buttons[2].style.backgroundColor = '#476b2a';

const menu = document.getElementById('menu');
menu.style.width = "600px";
menu.style.display = "flex";
menu.style.justifyContent = "space-between";
menu.style.margin = "2em  0px 0px auto";

const image = document.querySelector('img');
image.style.marginTop = "4em";
image.style.width = "100%";

const text = document.querySelector('p');
text.style.fontSize = "1.5em";
text.style.marginTop = "0.5em";
text.style.fontWeight = "100";
text.style.fontFamily = "Times";
text.style.lineHeight = "1.3";

