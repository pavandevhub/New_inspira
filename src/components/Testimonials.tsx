import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from '../data/testimonials';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="mb-4 text-4xl font-bold text-[#333333] md:text-5xl">
            Our Happiest Customers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Don't just take our word for it. Hear what our satisfied clients have to say
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="mx-auto max-w-3xl">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 rounded-full bg-[#FF6633] p-3 text-white shadow-lg transition-all duration-300 hover:bg-[#FF6633]/90 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 rounded-full bg-[#FF6633] p-3 text-white shadow-lg transition-all duration-300 hover:bg-[#FF6633]/90 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-12 bg-[#FF6633]'
                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
