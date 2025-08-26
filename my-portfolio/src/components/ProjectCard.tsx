
type Props = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

const ProjectCard = ({ title, description, tech, link }: Props) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <ul>
      {tech.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
    <a href={link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
  </div>
);

export default ProjectCard;
