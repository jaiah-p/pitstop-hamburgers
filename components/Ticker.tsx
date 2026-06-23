const ITEMS = [
  "Don't think twice",
  "Beef tallow fries",
  "Local beef",
  "Vanilla milkshakes",
  "Mississippi comeback sauce",
  "Country tunes playing",
  "Sunday chess club",
  "Simple food done well",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const line = [...ITEMS, ...ITEMS];
  return (
    <div className="flex w-max">
      <div
        className={`flex w-max shrink-0 items-center ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: "38s" }}
      >
        {line.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="headline px-6 text-3xl sm:text-4xl">{item}</span>
            <span className="text-2xl text-mustard">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="overflow-hidden border-y-4 border-ink bg-red py-3 text-cream">
      <Row />
    </div>
  );
}
