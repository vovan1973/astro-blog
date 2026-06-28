
// делаем виборку
const container= document.querySelector('#container');
const source= document.querySelector('#source');
const preview= document.querySelector('#preview');
const divider= document.querySelector('#divider');

// создаем событие при движении мыши
source.addEventListener('input', () => {
      const newText= marked.parse(source.value);
      preview.innerHTML= newText;
});