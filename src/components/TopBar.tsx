interface TopBarProps {
  onQuoteClick: () => void;
}

export function TopBar({ onQuoteClick }: TopBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-[#FF6633] logo-text">Inspira</span>
            <span className="text-[#333333] logo-text"> Interiors</span>
          </h1>
        </div>

        <button
          onClick={onQuoteClick}
          className="bg-[#FF6633] text-white px-6 py-3 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-[#FF6633]/90 hover:scale-105 hover:shadow-lg"
        >
          GET FREE QUOTE
        </button>
      </div>
    </div>
  );
}
