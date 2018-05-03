const myImg = document.querySelector('img');
function changeImg() {
  myImg.setAttribute ('src',
'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi'
)
};
myImg.addEventListener('click',() => (changeImg()));
//FizzBuzz

var i;
for (i = 1; i < 101; i++) {
  console.log(i);
}

document.form.login.password.addEventListener('keyup', e => {
  console.log(e.target.value)
});
