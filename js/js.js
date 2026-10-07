function switchTab(tabId) {
  // Obtener todas las secciones con la clase 'tab-content'
  const contents = document.querySelectorAll('.tab-content');
  
  // Ocultar todas las secciones cambiando 'block' por 'hidden'
  contents.forEach(content => {
    content.classList.remove('block');
    content.classList.add('hidden');
  });

  // Quitar la clase 'active' de todos los botones de navegación
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });

  // Mostrar la sección correspondiente al tabId recibido
  const selectedContent = document.getElementById(tabId);
  if (selectedContent) {
    selectedContent.classList.remove('hidden');
    selectedContent.classList.add('block');
  }

  // Añadir la clase 'active' al botón para iluminarlo
  const activeBtn = document.getElementById('btn-' + tabId);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}