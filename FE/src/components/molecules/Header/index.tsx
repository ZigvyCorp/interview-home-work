import { Avatar, BlogBadge, Logo } from './components';
import './styles.css'


interface HeaderProps {
  logoName: string;
  logoImage: string;
  avatarName: string;
  avatarImage: string;
}

export const Header = ({
  avatarImage,
  avatarName,
  logoImage,
  logoName,
}: HeaderProps) => {
  return (
    <div className="d-flex justify-content-between align-items-center header" >
      <Logo image={logoImage} name={logoName}/>
      <BlogBadge />
      <Avatar image={avatarImage} name={avatarName}/>
    </div>
  );
};
