import { Image, Text } from "@/components/atoms";

interface AvatarProps {
  name: string;
  image: string;
}

export const Avatar = ({name,image}:AvatarProps) => {
    return <div className="h-100 d-flex justify-content-between align-items-center">
      <Image src={image} />
      <Text variant="m">{name}</Text>
    </div>;
  };
  
  