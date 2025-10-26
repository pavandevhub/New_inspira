import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function PartnerLogos() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const partners = [
    { id: '1', name: 'Partner 1', placeholder: true },
    { id: '2', name: 'Partner 2', placeholder: true },
    { id: '3', name: 'Partner 3', placeholder: true },
    { id: '4', name: 'Partner 4', placeholder: true },
    { id: '5', name: 'Partner 5', placeholder: true },
    { id: '6', name: 'Partner 6', placeholder: true },
  ];

  return (
    <section className="bg-[#F8F8F8] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`mb-12 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="mb-4 text-4xl font-bold text-[#333333] md:text-5xl">
            Our Trusted Partners
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Collaborating with industry-leading brands to deliver excellence
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`group flex items-center justify-center rounded-lg bg-white p-8 shadow-md transition-all duration-700 hover:shadow-lg ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex h-20 w-full items-center justify-center grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:drop-shadow-[0_0_8px_rgba(255,102,51,0.5)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-200 text-xs text-gray-500 text-center">
                  {partner.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Partner logos can be added here</p>
        </div>
      </div>
    </section>
  );
}
