import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data/faqs';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function FAQsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div
          ref={ref}
          className={`mb-12 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="mb-4 text-4xl font-bold text-[#333333] md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`border-2 border-gray-200 bg-white overflow-hidden transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-start justify-between gap-4 p-6 text-left transition-colors duration-300 hover:bg-gray-50"
              >
                <h3 className="text-lg font-semibold text-[#333333]">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-6 w-6 text-[#FF6633]" />
                  ) : (
                    <Plus className="h-6 w-6 text-[#FF6633]" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="border-t-2 border-gray-200 p-6 pt-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
