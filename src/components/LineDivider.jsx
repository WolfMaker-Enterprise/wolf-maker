export default function LineDivider() {
  const logos = Array.from({ length: 180 });

  return (
    <div className="w-full bg-[#1b0821] overflow-hidden py-1">
      <div
        className="flex justify-center gap-8 flex-nowrap animate-scroll"
        style={{
          animation: "scrollRight 100s linear infinite",
        }}
      >
        {logos.map((_, index) => (
          <img
            key={index}
            src={`/images/image.png`}
            alt="logo"
            className="h-20 w-auto"
            style={{ filter: "grayscale(1) invert(1)" }}
          />
        ))}
      </div>
    </div>
  );
}
