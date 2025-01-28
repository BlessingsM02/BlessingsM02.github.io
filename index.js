let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

async function getUserProjects() {
    const response = await fetch('https://api.github.com/users/BlessingsM02/repos');
    const repos = await response.json();
    
    const projectGallery = document.getElementById('all-project');
    repos.forEach(repo => {
      const project = document.createElement('div');
      project.className = 'project';
      project.innerHTML = `
  
      <a
      href=${repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      class="repo">
      <div class="repo_top">
        <div class="repo-name">
          <h3>${repo.name}</h3>
        </div>
        <p>${repo.description}</p>
      </div>
  
      <div class="repo-stats">
  
        <div class="repo-stats-left">
          <span>
              ${repo.language}
          </span>
          <span>
          <i class='bx bxs-star'></i>
            ${repo.stargazers_count.toLocaleString()}
          </span>
          <span>
          <i class='bx bx-git-repo-forked'></i>
            ${repo.forks.toLocaleString()}
          </span>
        </div>
  
        <div class="repo-stats-right">
          <span>${repo.size.toLocaleString()} KB</span>
        </div>
      </div>
    </a>
    
      `;
      projectGallery.appendChild(project);
    });
  }
  
  
  getUserProjects();
  