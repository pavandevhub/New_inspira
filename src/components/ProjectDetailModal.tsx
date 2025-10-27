import { X, Calendar, Award } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: () => void;
}

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
  onBookConsultation,
}: ProjectDetailModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full my-8 animate-slide-down"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 text-gray-600 hover:text-[#FF6633] transition-colors duration-300 shadow-lg"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative h-80 overflow-hidden rounded-t-xl">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="text-sm font-semibold text-[#FF6633] mb-2">
              {project.category}
            </p>
            <h2 className="text-4xl font-bold mb-2">{project.title}</h2>
            <p className="text-lg text-white/90">{project.description}</p>
          </div>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-[#FF6633]" />
                Project Highlights
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF6633] mt-2"></span>
                  <span>Premium quality materials and finishes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF6633] mt-2"></span>
                  <span>Customized design solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF6633] mt-2"></span>
                  <span>Space optimization and functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF6633] mt-2"></span>
                  <span>Modern aesthetic with timeless appeal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF6633] mt-2"></span>
                  <span>Energy-efficient lighting solutions</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#FF6633]" />
                What We Offer
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF6633] mt-2"></span>
                  <span>Complete design and execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF6633] mt-2"></span>
                  <span>3D visualization before execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF6633] mt-2"></span>
                  <span>On-time project delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF6633] mt-2"></span>
                  <span>Post-installation support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF6633] mt-2"></span>
                  <span>10-year warranty on materials</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-[#333333] mb-2">
              Interested in Similar Design?
            </h3>
            <p className="text-gray-700 mb-4">
              Book a free consultation with our design experts and transform your space into something extraordinary.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onBookConsultation}
              className="flex-1 bg-[#FF6633] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#FF6633]/90 hover:scale-105 hover:shadow-lg"
            >
              Book Free Consultation
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-white text-[#333333] border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:border-[#FF6633] hover:text-[#FF6633] hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
