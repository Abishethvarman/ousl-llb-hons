function loadResources(containerId, resources) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let html = '<div class="container">';
  resources.forEach(r => {
    html += `
      <div class="card">
        <h2>${r.title}</h2>
        <a href="${r.url}" target="_blank">Open</a>
      </div>
    `;
  });
  html += '</div>';

  container.innerHTML = html;
}
