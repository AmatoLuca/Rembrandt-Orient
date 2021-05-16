const toggle = document.getElementsByClassName('toggle')[0];
const label = document.getElementsByClassName('toggle__label')[0];
const drop_menu = document.getElementsByClassName('overlayer-menu')[0];
const body = document.getElementsByTagName('body')[0];

toggle.addEventListener('click', function() {
  drop_menu.classList.toggle('is-open');
  
  label.classList.toggle('has-close-label');
  if (label.classList.contains('has-close-label')) {
    label.textContent = 'Close';
    body.style.position = 'fixed'; // prevent page scrolling
  } else {
    label.textContent = 'Menu';
    body.style.position = 'initial';
  }
}); 