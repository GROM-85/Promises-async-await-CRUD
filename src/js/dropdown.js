const menu = document.querySelector('.dropdownMenu');
const allLiEl = menu.querySelectorAll('li');

allLiEl.forEach(li => {
  const span = document.createElement('span');
  li.prepend(span);
  
  span.append(span.nextSibling); // move the text node into span
});

function handleClick({target}) {
  if (target.nodeName !== 'SPAN') {
    return;
  }
  console.log(target.parentNode.querySelector("ul"))
  
  const childrenContainer = target.nextElementSibling;// gives you next Elem Node => ul

  if (childrenContainer) {
    childrenContainer.hidden = !childrenContainer.hidden;
  }
}

menu.addEventListener('click', handleClick);


 // BOOLEAN COERCIION WHAT GIVES FALSY RESULT
console.log(Boolean(""))
console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(NaN) )
console.log(Boolean(null))
console.log(Boolean(undefined))
// OTHERS GIVES TRUE