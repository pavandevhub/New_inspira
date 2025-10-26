import { StatisticCard } from './StatisticCard';
import { statistics } from '../data/statistics';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Statistics() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section className="bg-[#333333] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl mb-4">
            Why Choose Inspira Interiors in Hyderabad?
          </h2>
          <p className="text-gray-300 text-lg">
            Leading the way in innovative interior design solutions
          </p>
        </div>

        <div
          ref={ref}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {statistics.map((statistic) => (
            <StatisticCard
              key={statistic.id}
              statistic={statistic}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
