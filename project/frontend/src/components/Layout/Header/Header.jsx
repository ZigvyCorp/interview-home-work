import { Navigate } from 'react-router-dom';
const Header = () => {
    return (
        <header className="bg-white border-b  lg:fixed lg:w-full lg:top-0 lg:z-50 lg:left-0">
            <div className="p-4 mx-auto">
                <div className="flex flex-col lg:items-center lg:justify-center lg:flex-row lg:space-x-4">
                    <a href="/" className="site-logo">
                        <img
                            className="object-cover object-left h-12"
                            src="https://www.freeiconspng.com/thumbs/blogger-logo-icon-png/blogger-logo-icon-png-22.png"
                            alt="logo"
                        />
                    </a>
                    <div className="relative h-10 mt-4 sm:w-96 xl:w-80 2xl:w-96 sm:mx-auto lg:m-0">
                        <input
                            className="w-full h-full text-gray-700 bg-white border border-gray-200 rounded-lg peer dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-20"
                            type="text"
                            placeholder="Search"
                        />
                    </div>

                    <h1 class=" ml-2 text-xl font-bold  text-gray-600 dark:border-gray-700 dark:text-gray-300 lg:mt-0 sm:ml-2 ">
                        Blog{' '}
                    </h1>

                    <div className="flex lg:items-center lg:justify-center">
                        <img
                            className="object-cover object-left h-12"
                            alt=""
                            id="nav-profile-image"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkuLRwnB8594gN1D8dzJJ2Nl7hVZvzotWrGTmt7JFRLHMlK7IJZU-ZtLlo7DT7wtTnoo&usqp=CAU"
                        />
                        Adam Levine
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
