export default function decorate(block) {
    const buttons = document.createElement('div');
    buttons.className = 'carousel-buttons';
    const contentDiv = document.createElement('div');
    block.parentElement.append(contentDiv);
    [...block.children].forEach((row, i) => {
      const classes = ['text', 'image'];
      classes.forEach((e, j) => {
        row.children[j].classList.add(`carousel-${e}`);
      });
      /* buttons */
      const button = document.createElement('button');
      button.title = 'Carousel Nav';
      if (!i) button.classList.add('selected');
      button.addEventListener('click', () => {
        block.scrollTo({ top: 0, left: row.offsetLeft - row.parentNode.offsetLeft, behavior: 'smooth' });
        [...buttons.children].forEach((r) => r.classList.remove('selected'));
        button.classList.add('selected');
      });
      buttons.append(button);
    });
    block.parentElement.append(buttons);
  }