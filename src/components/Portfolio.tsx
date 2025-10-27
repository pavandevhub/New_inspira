import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

interface PortfolioProps {
  onConsultationRequest: () => void;
}

export function Portfolio({ onConsultationRequest }: PortfolioProps) {
  return (
    <section id="portfolio" className="bg-[#F8F8F8] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#333333] md:text-5xl">
            Our Portfolio
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore our diverse range of interior design projects, each crafted with precision and passion
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onConsultationRequest={onConsultationRequest}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
