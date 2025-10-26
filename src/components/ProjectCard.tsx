import { ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden bg-white shadow-lg transition-all duration-700 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
        <p className="mb-4 text-sm text-white/90">{project.description}</p>
        <button className="flex items-center gap-2 text-[#FF6633] font-semibold transition-all duration-300 group-hover:gap-3">
          View Projects
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
