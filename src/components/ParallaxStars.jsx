import { Parallax } from 'react-scroll-parallax';

const ParallaxStars = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <Parallax translateY={[-50, 50]}>
        <div className="absolute inset-0 bg-[url('/stars.png')] bg-repeat bg-[size:200px] opacity-40"></div>
      </Parallax>
    </div>
  );
};

export default ParallaxStars;
