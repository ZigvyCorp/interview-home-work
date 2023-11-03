import { Tabs, TabsProps } from "antd";
import clsx from "clsx"
import { NavbarRoutes } from "../../constants/navbar";
import { Link, useLocation } from "react-router-dom";

interface INavBarProps {
    className?: string
}

const NavBar: React.FC<INavBarProps> = (props) => {

    const { className } = props;

    const { pathname } = useLocation();

    const checkActive = (path: string): boolean => {
        return path === pathname;
    }

    return (
        <div className={clsx('flex-center', className)}>
            <div className="flex flex-wrap items-center justify-center sm:justify-between">
                {NavbarRoutes.map((route, index) => (
                    <Link key={route.name} to={route.path} className={clsx(
                        'text-base uppercase font-semibold border-b-2 border-transparent transform',
                        'hover:border-primary hover:text-primary',
                        'text-[12px] sm:text-base',
                        {'mr-6': index !== NavbarRoutes.length - 1},
                        {'border-primary text-primary': checkActive(route.path)})} 
                    >
                        {route.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default NavBar