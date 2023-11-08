import SidebarItem from "./SidebarItem";

export interface ISideBar {
  className?: string;
  show: boolean;
  children?: any;
}

const SideBar = ({ className = "", show, children }: ISideBar) => {
  return (
    <aside
      className={`${className} ${
        show ? "translate-x-0" : "-translate-x-full"
      } w-[var(--sidebar-width)] fixed left-0 z-[200] h-screen overflow-x-hidden transition-all duration-150 ease-linear delay-75 px-[10px]`}
    >
      <div className="">SideBar</div>

      <div className="py-[20px]">{children}</div>
    </aside>
  );
};

export default SideBar;

SideBar.Item = SidebarItem;
