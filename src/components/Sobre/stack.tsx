import { useState, useEffect } from "react";

const stacks = [
  { name: "JavaScript", image: "/images/javascript.png" },
  { name: "TypeScript", image: "/images/typescript.png" },
  { name: "React", image: "/images/react.png" },
  { name: "WordPress", image: "./images/wordpress.png" },
  { name: "Node.js", image: "/images/nodejs.png" },
  { name: "MySQL", image: "/images/mysql.png" },
  { name: "Bootstrap", image: "/images/bootstrap.png" },
  { name: "Figma", image: "/images/figma.png" },
  { name: "CSS", image: "/images/css.png" },
  { name: "HTML", image: "/images/html.png" },
  { name: "Git", image: "/images/git.png" },
  { name: "Jest", image: "/images/jest.png" }
];

const StacksCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stacks.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center p-4 bg-gray-900 text-white overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {stacks.map((stack, index) => (
          <div key={index} className="carrosel">
            <img 
              src={stack.image} 
              alt={stack.name} 
              className="w-24 h-24 object-contain filter grayscale hover:filter-none transition duration-300" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StacksCarousel;
