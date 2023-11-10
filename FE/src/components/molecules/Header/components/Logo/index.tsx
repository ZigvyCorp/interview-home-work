import { Image, Text } from "@/components/atoms";

interface LogoProps {
  name: string;
  image: string;
}

export const Logo = ({ image, name }: LogoProps) => {
  return (
    <div className="h-100 d-flex justify-content-between align-items-center">
      <div className="h-100">
        <Image src={image} />
      </div>
      <Text variant="m">{name}</Text>
    </div>
  );
};
