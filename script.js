const handle = () => {
  let inputs = document.querySelectorAll('.text');
  let entries = [];
  for (let i=0; i < inputs.length; i++) {
    entries.push(inputs[i].value);
  }
  console.log(entries);
  
  let button = document.querySelector('.button');
  button.addEventListener('click', handle);
  
