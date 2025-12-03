import { ProjectSchema } from './StructuredData';
import { projects } from '@/data/projects';

export default function ProjectsPageSchemas() {
  return (
    <>
      {projects.map((project) => (
        <ProjectSchema
          key={project.id}
          project={{
            title: project.title,
            description: project.description,
            location: project.location,
            fullDescription: project.fullDescription,
          }}
        />
      ))}
    </>
  );
}


