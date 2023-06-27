import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  let cardRef = document.createElement('a');
  
  /* change to ul, li */
  const ul = document.createElement('ul');

  [...block.children].forEach((row) => {
    
    const li = document.createElement('li');
  
    li.innerHTML = row.innerHTML;
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
  
    ul.append(li);
    const parent = li.parentNode;
    const cardRef = document.createElement('a');
    parent.replaceChild(cardRef, li);
    cardRef.appendChild(li);
  });
 // ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
 

  block.append(ul);
 
}