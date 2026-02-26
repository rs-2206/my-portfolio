// This file contains basic JavaScript for interactivity on the portfolio website.

document.addEventListener('DOMContentLoaded', function() {
    const projectButton = document.getElementById('load-projects');
    const projectsContainer = document.getElementById('projects');

    projectButton.addEventListener('click', function() {
        fetch('assets/projects.json')
            .then(response => response.json())
            .then(data => {
                projectsContainer.innerHTML = '';
                data.forEach(project => {
                    const projectElement = document.createElement('div');
                    projectElement.classList.add('project');
                    projectElement.innerHTML = `
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="${project.demoLink}" target="_blank">View Demo</a>
                        <a href="${project.repoLink}" target="_blank">View Repository</a>
                    `;
                    projectsContainer.appendChild(projectElement);
                });
            })
            .catch(error => console.error('Error loading projects:', error));
    });
});