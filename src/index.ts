type Tags = string | string[];

const hasEl = (element:string, tags:Tags) => tags.indexOf(element) !== -1;

const boxBorder = 5;
const hoverBox = document.createElement('div');
hoverBox.id = 'hover-box';

document.body.appendChild(hoverBox);

document.addEventListener('mouseover', (event:Event):void  => {

  const target = event.target! as HTMLElement;

  if(hasEl(target.tagName, ['BODY', 'HTML'])) return;

  const targetOffset = target.getBoundingClientRect();
  const targetHeight = targetOffset.height;
  const targetWidth  = targetOffset.width;

  hoverBox.style.width = `${targetWidth + boxBorder * 2}px`;
  hoverBox.style.height = `${targetHeight + boxBorder * 2}px`;

  hoverBox.style.top = `${targetOffset.top + window.scrollY - boxBorder}px`;
  hoverBox.style.left = `${targetOffset.left + window.scrollX - boxBorder}px`;
});
