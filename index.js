const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const email1 = document.getElementById('email1');
const radio1 = document.getElementById('query1');
const radio2 = document.getElementById('query2');
const message = document.getElementById('message1');
const consent = document.getElementById('consent1');
const form = document.getElementById('form');

function validateInput() {
    let counter = 1;
    if (name1.value === '') {
        name1.classList.add('error');
        document.getElementById('hide1').classList.add('show');
    }else{
        name1.classList.remove('error');
        document.getElementById('hide1').classList.remove('show');
        counter++;
    }

    if (name2.value === '') {
        name2.classList.add('error');
        document.getElementById('hide2').classList.add('show');
    }else{
        name2.classList.remove('error');
        document.getElementById('hide2').classList.remove('show');
        counter++;
    }
    if (email1.value === '') {
        email1.classList.add('error');
        document.getElementById('hide3').classList.add('show');
    }else{
        email1.classList.remove('error');
        document.getElementById('hide3').classList.remove('show');
        counter++;
    }
    if (document.getElementById('radio1').checked === false && document.getElementById('radio2').checked === false) {
        radio1.classList.add('error');
        document.getElementById('hide4').classList.add('show');
        radio2.classList.add('error');
    }else{
        radio1.classList.remove('error');
        radio2.classList.remove('error');
        document.getElementById('hide4').classList.remove('show');
        counter++;
    }
    if (message.value === '') {
        message.classList.add('error');
        document.getElementById('hide5').classList.add('show');
    }else{
        message.classList.remove('error');
        document.getElementById('hide5').classList.remove('show');
        counter++;
    }
    if (consent.checked === false) {
        consent.classList.add('error');
        document.getElementById('spLabel').classList.add('show');
    }
    else{
        consent.classList.remove('error');
        document.getElementById('spLabel').classList.remove('show');
        counter++;
    }
    return counter;

}

function animation(){
    document.getElementById('sent').classList.add('animation')
};

/* form.addEventListener('submit',e => {
   e.preventDefault();
   document.getElementById('sent').classList.remove('animation')
   const validation = validateInput();
   if (validation === 7) {
        animation();
   }
   console.log(validation);
}); */

function onClick(){
   document.getElementById('sent').classList.remove('animation')
   const validation = validateInput();
   if (validation === 7) {
        animation();
   }
   console.log(validation);
}

function removePop(){
    document.getElementById('sent').classList.remove('popout');
}

function popout(){
    document.getElementById('sent').classList.add('popout');
    setTimeout(removePop, 1000);
    document.getElementById('sent').classList.remove('animation');
}

