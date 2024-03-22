import type { ProjectItem } from "../types";

type ProjectProps = {
  project: ProjectItem;
};

const Project = ({ project }: ProjectProps) => {
  // const [stars, setStars] = useState();

  return (
    <>
      <h1>{project.name}</h1>
    </>
  );
};

export default Project;
