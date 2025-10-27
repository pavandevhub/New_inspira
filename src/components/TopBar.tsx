interface TopBarProps {
  onQuoteClick: () => void;
}

export function TopBar({ onQuoteClick }: TopBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/Inspira Interiors Logo Design (4) .png"
            alt="Inspira Interiors Logo"
            className="h-14 w-auto object-contain"
          />
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
