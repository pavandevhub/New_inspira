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
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-6xl px-6">
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

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={faq.id}
                className={`grid md:grid-cols-2 gap-6 items-start transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6633] text-white flex items-center justify-center font-bold text-sm">
                        Q
                      </div>
                      <h3 className="text-lg font-bold text-[#333333] leading-tight">
                        {faq.question}
                      </h3>
                    </div>
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="mt-2 flex items-center gap-2 text-[#FF6633] font-semibold text-sm transition-all duration-300 hover:gap-3"
                    >
                      {openIndex === index ? (
                        <>
                          <Minus className="h-4 w-4" />
                          Hide Answer
                        </>
                      ) : (
                        <>
                          <Plus className="h-4 w-4" />
                          Show Answer
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">
                          A
                        </div>
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
