import { useParams } from "react-router-dom";
import { projectsData } from "./projectsData";
import ProjectDetails from "./details";

export default function ProjectDetailsPage() {
  const { id } = useParams();

  const project = projectsData.find(
    (project) => project.id === id
  );

  if (!project) return <div>Project not found</div>;

  return <ProjectDetails project={project} />;
}
