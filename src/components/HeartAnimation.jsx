export default function HeartAnimation() {
  return (
    <div className="hearts">
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${4 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
