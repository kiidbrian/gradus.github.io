import type { ProjectItem } from "../types";

type ProjectProps = {
  project: ProjectItem;
};

const Project = ({ project }: ProjectProps) => {
  // const [stars, setStars] = useState();

  return (
    <a
      href="/"
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline"
    >
      <div className="flex-auto p-4 border border-[#e5e7eb] hover:bg-[#f3f4f6] hover:border-transparent">
        <div className="flex align-center flex-wrap">
          <div className="whitespace-nowrap mr-3">{project.name}</div>
          <div className="flex align-center">
            {project.tech &&
              project.tech.map((icon) => (
                <span className={`${icon} text-2xl`}></span>
              ))}
          </div>
        </div>
        <div className="text-sm">{project.desc}</div>
      </div>
    </a>
  );
};

export default Project;
