const images = Array.from({ length: 11 }, (_, i) => {
  const nums = [1, 2, 3, 4, 5, "6-1", 7, 8, 9, 10, 11];
  return `https://www.studio131.com.br/wp-content/uploads/2026/01/${nums[i]}.webp`;
});

const ImageCarousel = () => {
  return (
    <section className="py-8 section-dark overflow-hidden">
      <div className="carousel-auto-scroll flex gap-4" style={{ width: "max-content" }}>
        {[...images, ...images].map((src, i) => (
          <div key={i} className="flex-shrink-0 w-48 md:w-64 h-32 md:h-44 rounded-lg overflow-hidden">
            <img src={src} alt={`Evento ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageCarousel;
