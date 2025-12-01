// Shimmer.jsx
const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      {Array(10)
        .fill("")
        .map((_, i) => (
          <div className="shimmer-card" key={i}></div>
        ))}
    </div>
  );
};

export default Shimmer;
