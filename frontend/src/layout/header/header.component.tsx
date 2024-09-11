import { cn } from "@/lib/utils";
import styles from "./header.module.css";
import { User } from "lucide-react";

function Header() {
  return (
    <header className='flex h-16 px-2 justify-between border-4 border-black'>
      <div className='flex-1'>
        <img
          className='object-fit h-full'
          src='/zigvy-logo.webp'
          alt='Zigvy Logo'
        />
      </div>
      <div
        className={cn(
          "bg-gray-400 py-2 px-4 flex-1 font-semibold flex-center",
          styles.blog
        )}
      >
        <p className='text-center'>Blogs</p>
      </div>
      <div className='flex flex-1 justify-end gap-4'>
        <div className='w-16 h-full border flex-center'>
          <User size={40} />
        </div>
        <p className='flex items-center'>Zigvy Admin</p>
      </div>
    </header>
  );
}

export default Header;
