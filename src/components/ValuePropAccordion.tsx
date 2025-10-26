import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { valuePropositions } from '../data/valuePropositions';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function ValuePropAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div
          ref={ref}
          className={`mb-12 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="mb-4 text-4xl font-bold text-[#333333] md:text-5xl">
            What We Offer
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Comprehensive interior solutions tailored to your needs
          </p>
        </div>

        <div className="space-y-4">
          {valuePropositions.map((section, index) => (
            <div
              key={section.id}
              className={`border-2 border-gray-200 bg-white overflow-hidden transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-gray-50"
              >
                <h3 className="text-2xl font-bold text-[#FF6633]">
                  {section.title}
                </h3>
                <ChevronDown
                  className={`h-6 w-6 text-[#FF6633] transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                }`}
              >
                <div className="border-t-2 border-gray-200 p-6">
                  <ul className="grid gap-3 md:grid-cols-2">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-[#FF6633]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
