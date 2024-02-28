import { useAppSelector } from "src/redux/hook";

const Header = () => {
    const user = useAppSelector((state) => state.user);
    return (
        <header className="fixed top-0 left-0 w-full px-[200px] z-[999]">
            <div className="grid grid-flow-col  border-black border-[5px] h-[80px]  text-[25px] font-medium bg-gray-400">
                <section className=" col-span-5 h-full flex items-center ml-[80px]">
                    <span>Logo</span>
                </section>
                <section className=" col-span-2 bg-[#E6E6E6] h-full border-x-[5px] border-black text-center flex items-center justify-center">
                    <span> Blogs</span>
                </section>
                <section className=" col-span-5 h-full flex items-center justify-end">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        className=" w-[60px] h-[60px]"
                    />
                    <span className="mx-[40px]">{user.name}</span>
                </section>
            </div>
        </header>
    );
};

export default Header;
