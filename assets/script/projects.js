// Step 3: Array of Projects
const projects = [
    {
      title: "Hong Kong Controller Plugin",
      caption: "Developed a dll plugin for Hong Kong virtual air traffic controllers to enhance realism.",
      description1: "Developed a plugin for EuroScope to enhance Hong Kong vACC controllers' experience, including realistic AutoTrac III radar tags, route selection, and approach types.",
      description2: "Implemented advanced features like missed approach alarms, slot/MAESTRO delay integration, and a Virtual Flight Plan Checker (VFPC).",
      description3: "Primarily built in C++ with a focus on performance and real-time accuracy for air traffic control simulations.",
      image: "/assets/img/project-aim_bert-bias.png",
      link: "https://github.com/vatsimhk/HKCP",
    },
    {
      title: "Jump King",
      caption: "A recreation of the Jump King game in C for NIOS II on DE1-SOC.",
      description1: "Implemented complex game physics, including collision detection, jumping, gravity, and wall interactions, using a hardware timer with interrupts for accurate movement control.",
      description2: "Developed and animated character sprites and dynamic backgrounds by converting images to pixel data, enhancing gameplay visuals with double-buffered animations and sprite-based state transitions (e.g., running, jumping).",
      description3: "Added sound effects triggered by specific actions, leveraging write interrupts for audio output management.",
      image: "/assets/img/project-aim_bert-bias.png",
      link: "none",
    },
    {
        title: "JHB Holiday Mapper",
        caption: "A C++ GIS Program designed for tourists and travellers.",
        description1: "Collaborated in a team of 3 to develop a GIS client using C++ and GTK, allowing tourists to search, display, and navigate points of interest with an intuitive and adaptive user interface.",
        description2: "Designed an intelligent holiday planning algorithm for route optimization and user-specific preferences.",
        description3: "Ranked 13th out of 85 teams for pathfinding algorithm efficiency and effectiveness, demonstrating strong problem-solving and optimization skills.",
        image: "/assets/img/project-aim_bert-bias.png",
        link: "none",
    },
    {
        title: "Hong Kong Sector Installer",
        caption: "An GUI automatic installer for the Hong Kong sector files using libgit2 for merging changes.",
        description1: "Automated Installation and Updates: The tool simplifies the installation and updating of the Hong Kong Sector Package for EuroScope, ensuring controllers always have the latest version.",
        description2: "Conflict Resolution and Merging: It automatically detects and resolves conflicts when updating or migrating existing sector packages, with manual resolution options for experienced users.",
        description3: "Technologies Used: Primarily developed in C++, using the libgit2 library and QT6 for the GUI.",
        image: "/assets/img/project-aim_bert-bias.png",
        link: "https://github.com/vatsimhk/Hong-Kong-Sector-Installer",
    },
    {
        title: "2-Player Whack a Mole",
        caption: "A whack a mole game recreated in verilog for the DE1-SOC FGPA.",
        description1: "Collaborated on programming a Whack-A-Mole game in Verilog for the Altera SoC FPGA using the DE1-SOC platform.",
        description2: "Developed key features including VGA output for animated graphics, PS2 keyboard input, and implemented finite state machines (FSMs) with datapaths.",
        description3: "Delivered a complex, fully functional system, achieving top marks (100/100) for design complexity and project presentation.",
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
            <div class="card large">
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
              <div class="card-action">
                  <a aria-label="Visit the GitHub repo for this project"
                    href=${latestProject.link} target="_blank"
                    data-position="top" data-tooltip="View Source"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-github"></i></a>
              </div>
              <div class="card-reveal">
                <span class="card-title teal-text"><small>Accomplishments</small><i
                    class="mdi-navigation-close right"></i></span>
                <ul>
                  <li>${latestProject.description1}</li>
                  <li>${latestProject.description2}</li>
                  <li>${latestProject.description3}</li>
                </ul>
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
            <div class="card large">
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
                  <li>${nextProject.description3}</li>

                </ul>
              </div>
              <div class="card-action">
                  <a aria-label="Visit the GitHub repo for this project"
                    href=${nextProject.link} target="_blank"
                    data-position="top" data-tooltip="View Source"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                    class="fa fa-github"></i></a>
                </div>
           </div>
        </div>
        `;
    } else {
        recentProjectsDiv.innerHTML += `
        <div class="col s12 m6 l4">
            <div class="card large">
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
                  <li>${nextProject.description3}</li>

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

  