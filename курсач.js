
  // Обработка кликов по кнопкам
  document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const panel = document.getElementById(targetId);
      
      // Переключение класса 'open'
      if (panel.classList.contains('open')) {
        panel.classList.remove('open');
        button.textContent = 'Развернуть';
      } else {
        panel.classList.add('open');
        button.textContent = 'Свернуть';
      }
    });
  });
