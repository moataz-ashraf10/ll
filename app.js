let email=document.getElementById('email');
let sub=document.querySelector('#sub');
let vaild=document.querySelector('.vaild')
let box=document.querySelector('.box')
let card=document.querySelector('.card')
let button=document.getElementById('dis')
sub.addEventListener('click',function(){
    if(/[a-zA-a1-9\W]+@[a-zA-Z]+.com/.test(email.value)){
        box.style.visibility="hidden"
        card.style.display="block"
        card.style.visibility="visible"
    }else{
        email.style.backgroundColor='hsl(4, 100%, 67%)';
        email.style.color='white';
        vaild.style.display='block';
    }
})
button.addEventListener('click',function(){
    card.style.visibility="hidden"
    box.style.visibility='visible'
})