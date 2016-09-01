'use strict';
const dom = document.getElementById('download');
dom.addEventListener('click', (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();
  xhr.open('get', '/file');
  xhr.onreadystatechange = () => {
    if(xhr.readyState !== 4 || xhr.status < 200 || xhr.status >= 400) return;

    const res = JSON.parse(xhr.responseText);
    const a = document.createElement('a');
    a.href = `data:image/jpeg;base64,${res['base64']}`;
    a.download = 'Image.jpg';
    document.body.appendChild(a);
    a.click();
    a.parentNode.removeChild(a);
  };
  xhr.send(null);
});
