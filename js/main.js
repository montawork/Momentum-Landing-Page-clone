const time = document.getElementById('time');
const greating = document.getElementById('greating');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// show time
(function showTime() {
  let today = new Date();
  let hours = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  // set PM or AM
  const amPm = hours >= 12 ? 'PM' : 'AM';
  // 12 hours format
  hours = hours % 12 || 12;
  // output time
  time.innerHTML = `${hours}<span>:</span>${addZeros(min)} ${amPm}`;
  setTimeout(showTime, 1000);
})();

// add zeros
function addZeros(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// set background & greating
(function setBgGreet() {
  let today = new Date();
  let hour = today.getHours();
  if (hour < 12) {
    // morning
    document.body.style.backgroundImage = "url('./images/morning.jpg')";
    greating.textContent = 'Good morning,';
  } else if (hour < 18) {
    //afternoon
    document.body.style.background = "url('./images/afternoon.jpg')";
    greating.textContent = 'Good afternoon,';
  } else {
    // evening
    document.body.style.backgroundImage = "url('./images/evening.jpg')";
    greating.textContent = 'Good evening,';
    document.body.style.color = '#fff';
  }
})();

// set name
function setName(e) {
  if (e.type == 'keypress') {
    if (e.keyCode == 13) {
      localStorage.setItem('name', e.target.textContent);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.textContent);
  }
}

// get name
(function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
})();

// set focus
function setFocus(e) {
  if (e.type == 'keypress') {
    if (e.keyCode == 13) {
      localStorage.setItem('focus', e.target.textContent);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.textContent);
  }
}

// get focus
(function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
})();

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//
name.addEventListener('click', () => {
  name.textContent = '';
});

name.addEventListener('blur', () => {
  if (
    localStorage.getItem('name') === null ||
    localStorage.getItem('name') === ''
  ) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
});

focus.addEventListener('click', () => {
  focus.textContent = '';
});

focus.addEventListener('blur', () => {
  if (
    localStorage.getItem('focus') === null ||
    localStorage.getItem('focus') === ''
  ) {
    focus.textContent = '[Enter focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
});
