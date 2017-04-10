'use strict';

const _browser = this.browser || this.chrome;

_browser.runtime.onMessage.addListener((request, sender, resetTag) => {
  const div = document.createElement('div');
  div.className = 'amazon-tag-remover';
  div.textContent = `The following tags were found and have been replaced: ${request.tags}`;
  document.body.appendChild(div);
  div.classList.toggle('amazon-tag-remover-fade-in');

  setTimeout(() => {
    div.classList.toggle('amazon-tag-remover-fade-in');
    div.classList.toggle('amazon-tag-remover-fade-out');
  }, 7000);
  resetTag();
});
