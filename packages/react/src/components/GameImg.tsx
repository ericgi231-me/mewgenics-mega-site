import React from "react";

interface GameImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

/**
 * Renders a <picture> with a .webp source when the src is a .png, allowing
 * browsers that support WebP to use the smaller format automatically.
 * For all other formats (SVG, etc.) it renders a plain <img>.
 */
const GameImg = React.forwardRef<HTMLImageElement, GameImgProps>(
  ({ src, alt, ...props }, ref) => {
    if (src.endsWith(".png")) {
      const webpSrc = src.slice(0, -4) + ".webp";
      return (
        <picture style={{ display: "contents" }}>
          <source srcSet={webpSrc} type="image/webp" />
          <img src={src} alt={alt} ref={ref} {...props} />
        </picture>
      );
    }
    return <img src={src} alt={alt} ref={ref} {...props} />;
  }
);

GameImg.displayName = "GameImg";

export default GameImg;
