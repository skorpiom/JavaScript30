const panels = document.querySelectorAll('.panel');

function toggle() {
  this.classList.toggle('open');
}

function add(e) {
  console.log(e);
  if(e.propertyName === 'flex-grow'){
    this.classList.toggle('open-active');
  }
}

panels.forEach(pan => pan.addEventListener('click',toggle));
panels.forEach(pan => pan.addEventListener('transitionend',add));
