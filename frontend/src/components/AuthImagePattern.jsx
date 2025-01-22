const AuthImagePatternSubtle = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="relative w-60 h-60 mx-auto mb-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-full h-full rounded-full bg-primary/10 ${
                i % 2 === 0 ? "animate-fade-in" : "animate-scale-in"
              }`}
              style={{
                animationDuration: `${2 + i * 0.5}s`,
                animationDelay: `${i * 0.2}s`,
                transform: `scale(${0.8 + i * 0.1})`,
              }}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePatternSubtle;
