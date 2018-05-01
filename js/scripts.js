const button =
document.querySelector('.btn-danger');

button.addEventListener('click',(e) => { alert('test');
});
 const div =
 document.querySelector('.blue');

 div.addEventListener('mouseover',(e) => {
   div.style.backgroundColor = 'red'});

const body =
document.querySelector('body');
const h1 =
document.querySelector('h1');

body.addEventListener('keydown', (e) => {
  //console.log(e);
  if (e.key == 'p'){
    h1.style.color = "green"
    //
  }
});
body.addEventListener('keyup',(ev) => {
  h1.style.color = 'yellow'});
