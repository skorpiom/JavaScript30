
let lastPos = function() {
  var lastPosition;
  return {
    update: function(arg) {
      lastPosition = arg;
    },
    value: function() {
      return lastPosition;
    }
  };
}();

const chbx = document.querySelectorAll('input[type = "checkbox"]');

chbx.forEach(el => el.addEventListener('change',fun));
let firstTime = true;
  function fun(e)
  {
    let inBetween = false;
    if(this.checked)
    {
        chbx.forEach(el => {
        if((lastPos.value() === el || el === this) && !firstTime) inBetween = !inBetween;
        if(inBetween) el.checked = true;
    });
    firstTime = false;
    }
    lastPos.update(this)
  }
