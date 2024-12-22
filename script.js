const btn = document.getElementById('btn');
const conf = document.getElementById('conf');
const checkbox = document.getElementById('check');
const Mdiv = document.getElementsByClassName('tg');


checkbox.addEventListener('click',function(){
    if (checkbox.checked ==true){
      document.body.style.backgroundColor = "white";
      Mdiv.style.backgroundColor = "yellow";
   }else{
      document.body.style.backgroundColor = "gray";
      Mdiv.style.backgroundColor = 'blue';
   }
  });
btn.addEventListener('click', () => {
  conf.style.display = 'block';
});

  