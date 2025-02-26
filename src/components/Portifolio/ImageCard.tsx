import React, { useState, useRef, useEffect } from "react";
import "./Portifolio.css";

interface ImageCardProps {
  imageSrc?: string;
  link?: string;
  altText?: string;
  placeholderText?: string;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageSrc,
  link,
  altText,
  placeholderText,
  className,
}) => {
  const [hovering, setHovering] = useState(false);
  const [canScroll, setCanScroll] = useState(true); // Controla o scroll
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);

  useEffect(() => {
    if (imgRef.current) {
      const imgHeight = imgRef.current.scrollHeight; // Altura real da imagem
      const containerHeight = imgRef.current.parentElement?.clientHeight || 0; // Altura do container visível

      if (imgHeight <= containerHeight) {
        setCanScroll(false); // Se a imagem for menor que o container, desativa o scroll
      }
    }
  }, [imageSrc]);

  return (
    <div className={`card ${className || ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {imageSrc && altText ? (
        link ? (
          <a href={link} target="_blank" rel="noreferrer">
            <img
              ref={imgRef}
              className={`scrolling-image ${hovering && canScroll ? "scroll" : ""}`}
              src={imageSrc}
              alt={altText}
            />
          </a>
        ) : (
          <img
            ref={imgRef}
            className={`scrolling-image ${hovering && canScroll ? "scroll" : ""}`}
            src={imageSrc}
            alt={altText}
          />
        )
      ) : (
        <p className="placeholder-text">{placeholderText || "EM BREVE"}</p>
      )}
    </div>
  );
};

export default ImageCard;
