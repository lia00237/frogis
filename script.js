const handle = () => {
  let inputs = document.querySelectorAll('.text');
  let entries = [];
  for (let i=0; i < inputs.length; i++) {
    entries.push(inputs[i].value);
  }
  console.log(entries);
  
  let button = document.querySelector('.button');
  button.addEventListener('click', handle);
  
  document.addEventListener('DOMContentLoaded', () => {
    new ItcSimpleSlider('.itcss', {
      loop: true,
      autoplay: false,
      interval: 5000,
      swipe: true,
  });
});
  
