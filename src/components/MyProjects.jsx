import '../App.css';

function MyProjects() {
    const projects = [
        {
            title: "Tic-Tac-Toe AI",
            description: "Play Game with AI with html, css and javascript",
            hostedLink: "https://tic-tac-toe-ai-bb.netlify.app/",
            githubLink: "https://github.com/nigamrai666/Tic-Tac-Toe-AI"
        },
        {
            title: "Hotel Mittal",
            description: "This is the landing Page using html, css and javascript",
            hostedLink: "https://hotel-moon.netlify.app/",
            githubLink: "https://github.com/nigamrai666/hotel_moon"
        },
        {
            title: "News Timeline",
            description: "Site to display daily updates using html, css and javascript",
            hostedLink: "https://newstimelinebb.netlify.app/",
            githubLink: "https://github.com/nigamrai666/News_Timeline"
        }
    ];

    return (
        <div className="projects-section">
            <h1 className="projects-title">My Projects</h1>
            <p className="projects-description">Here are some of my projects</p>
            <ul className="projects-list">
                {projects.map((project, index) => (
                    <li key={index} className="project-item">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className="project-links">
                            <a href={project.hostedLink} target="_blank" rel="noopener noreferrer" className="project-link">Live Site</a>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repo</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyProjects;
