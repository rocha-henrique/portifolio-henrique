import React, { useState } from "react";
import "./Portifolio.css";

interface ImageCardProps {
    imageSrc?: string;
    link?: string;
    altText?: string;  
    placeholderText?: string;
  }
 
const ImageCard: React.FC<ImageCardProps> = ({
    imageSrc,
    link,
    altText,
    placeholderText,
  }) => {
    const [hovering, setHovering] = useState(false);
  
    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);
  
    return (
      <div
        className="card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {imageSrc && altText ? ( // Renderiza a imagem se imageSrc e altText existirem
          link ? (
            <a href={link} target="_blank" rel="noreferrer">
              <img
                className={`scrolling-image ${hovering ? "scroll" : ""}`}
                src={imageSrc}
                alt={altText}
              />
            </a>
          ) : (
            <img
              className={`scrolling-image ${hovering ? "scroll" : ""}`}
              src={imageSrc}
              alt={altText}
            />
          )
        ) : (
          <p className="placeholder-text">{placeholderText || "EM BREVE"}</p> // Renderiza texto caso a imagem não exista
        )}
      </div>
    );
  };


  export default ImageCard;
