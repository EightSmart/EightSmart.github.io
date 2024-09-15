// Step 3: Array of Projects
const projects = [
    {
      title: "Hong Kong Controller Plugin",
      caption: "Developed a dll plugin for Hong Kong virtual air traffic controllers to enhance realism.",
      description1: "",
      description2: "",
      image: "/assets/img/project-aim_bert-bias.png",
      link: "https://github.com/vatsimhk/HKCP",
    },
    {
      title: "Jump King",
      caption: "A recreation of the Jump King game in C for NIOS II on DE1-SOC.",
      description1: "",
      description2: "",
      image: "/assets/img/project-aim_bert-bias.png",
      link: "none",
    },
    {
        title: "Hong Kong Sector Installer",
        caption: "An GUI automatic installer for the Hong Kong sector files using libgit2 for merging changes.",
        description1: "",
        description2: "",
        image: "/assets/img/project-aim_bert-bias.png",
        link: "https://github.com/vatsimhk/Hong-Kong-Sector-Installer",
    },
    {
        title: "2-Player Whack a Mole",
        caption: "A whack a mole game recreated in verilog for the DE1-SOC FGPA.",
        description1: "",
        description2: "",
        image: "/assets/img/project-aim_bert-bias.png",
        link: "none",
    },
  ];
  
  // Function to load and display the latest project
function displayLatestProject() {
    const recentProjectsDiv = document.getElementById('recent-projects');
    const latestProject = projects[0]; // The latest project is the first in the array
  
    // Create project HTML dynamically
    recentProjectsDiv.innerHTML = `
        <div class="col s12 m6 l4">
            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="Screenshot of  web app" src="${latestProject.image}" style="height: 100%; width: 100%" class="activator" />
              </div>
              <div class="card-content">
                <span class="card-title activator teal-text hoverline">${latestProject.title}<i
                    class="mdi-navigation-more-vert right"></i></span>
                <p>
                  ${latestProject.caption}
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title teal-text"><small>Accomplishments</small><i
                    class="mdi-navigation-close right"></i></span>
                <ul>
                  <li>${latestProject.description1}</li>
                  <li>${latestProject.description2}</li>

                </ul>
                <div class="card-action">
                  <a aria-label="Visit the GitHub repo for this project"
                    href=${latestProject.link} target="_blank"
                    data-position="top" data-tooltip="View Source"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>
    `;
  }
  
  // Call the function to display the latest project on page load
  window.onload = displayLatestProject;

  // Index to track the number of loaded projects
let projectIndex = 1;

// Function to load more projects when the button is clicked
function loadMoreProjects() {
  const recentProjectsDiv = document.getElementById('recent-projects');
  
  // Check if there are more projects to load
  while (projectIndex < projects.length) {
    const nextProject = projects[projectIndex];

    
    // Append new project dynamically


    if(nextProject.link != "none") {
        recentProjectsDiv.innerHTML += `
                <div class="col s12 m6 l4">
            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="Screenshot of  web app" src="${nextProject.image}" style="height: 100%; width: 100%" class="activator" />
              </div>
              <div class="card-content">
                <span class="card-title activator teal-text hoverline">${nextProject.title}<i
                    class="mdi-navigation-more-vert right"></i></span>
                <p>
                  ${nextProject.caption}
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title teal-text"><small>Accomplishments</small><i
                    class="mdi-navigation-close right"></i></span>
                <ul>
                  <li>${nextProject.description1}</li>
                  <li>${nextProject.description2}</li>

                </ul>
                <div class="card-action">
                  <a aria-label="Visit the GitHub repo for this project"
                    href=${nextProject.link} target="_blank"
                    data-position="top" data-tooltip="View Source"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                    class="fa fa-github"></i></a>
                </div>
              </div>
           </div>
        </div>
        `;
    } else {
        recentProjectsDiv.innerHTML += `
        <div class="col s12 m6 l4">
            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="Screenshot of  web app" src="${nextProject.image}" style="height: 100%; width: 100%" class="activator" />
              </div>
              <div class="card-content">
                <span class="card-title activator teal-text hoverline">${nextProject.title}<i
                    class="mdi-navigation-more-vert right"></i></span>
                <p>
                  ${nextProject.caption}
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title teal-text"><small>Accomplishments</small><i
                    class="mdi-navigation-close right"></i></span>
                <ul>
                  <li>${nextProject.description1}</li>
                  <li>${nextProject.description2}</li>

                </ul>
              </div>
           </div>
        </div>      
         `;
    }
    
    projectIndex++;
  }

  document.getElementById('load-more-projects-btn').blur
  document.getElementById('load-more-projects-btn').style.display = 'none'; // Hide button if no more projects
}

// Add event listener to "Load More" button
document.getElementById('load-more-projects-btn').addEventListener('click', loadMoreProjects);

  