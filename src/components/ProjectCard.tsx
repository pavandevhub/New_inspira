import { useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Project } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectCardProps {
  project: Project;
  index: number;
  onConsultationRequest: () => void;
}

export function ProjectCard({ project, index, onConsultationRequest }: ProjectCardProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProject = () => {
    setIsModalOpen(true);
  };

  const handleBookConsultation = () => {
    setIsModalOpen(false);
    onConsultationRequest();
  };

  return (
    <>
      <div
        ref={ref}
        className={`group relative overflow-hidden bg-white shadow-lg transition-all duration-700 hover:shadow-2xl ${
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
          <p className="mb-4 text-sm text-white/90">{project.description}</p>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleViewProject}
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 hover:bg-white/20 hover:gap-3"
            >
              View Details
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={handleBookConsultation}
              className="flex items-center justify-center gap-2 bg-[#FF6633] px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 hover:bg-[#FF6633]/90 hover:scale-105 hover:shadow-lg"
            >
              <Calendar className="h-4 w-4" />
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>

      <ProjectDetailModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBookConsultation={handleBookConsultation}
      />
    </>
  );
}
