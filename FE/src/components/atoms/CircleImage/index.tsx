import "./styles.css";

interface ImageProps {
  src: string;
}

export const CircleImage = ({ src }: ImageProps) => {
  return (
    <div className="imageWrapper h-100">
      <img className="image" src={src} />
    </div>
  );
};
