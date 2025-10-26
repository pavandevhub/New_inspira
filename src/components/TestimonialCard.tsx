import { Star, User } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="mb-4 flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-[#FF6633] text-[#FF6633]" />
        ))}
      </div>

      <p className="mb-6 text-lg leading-relaxed text-gray-700 italic">
        "{testimonial.quote}"
      </p>

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6633]/10">
          <User className="h-6 w-6 text-[#FF6633]" />
        </div>
        <div>
          <p className="font-semibold text-[#333333]">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}
