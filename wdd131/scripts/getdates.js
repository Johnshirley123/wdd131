const currentYear = new Date().getFullYear();
const lastModifiedDate = document.lastModified;

document.getElementById('copyright').textContent = `© ${currentYear} Your Company Name.`;
document.getElementById('last-modified').textContent = `Document last modified on: ${lastModifiedDate}.`;