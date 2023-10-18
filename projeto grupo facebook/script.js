function menuShow(){
    let menuMobile=document.querySelector('.mobile-menu');
  if  (menuMobile.classList.toggle('open') ) {
  (menuMobile.classList.toggle('open'))
  document.querySelector('.icon').src="img/quadrado.svg";
  }else{
(menuMobile.classList.add('open'))
document.querySelector('.icon').src="img/circulo.svg"
  }

}


let nomes = ['pedro', 'rhavy', 'leonardo', 'pyetro']

nomes.forEach(nome =>{
  console.log(nomes)
})