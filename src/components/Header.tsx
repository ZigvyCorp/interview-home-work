import { useRef, KeyboardEvent } from 'react';

interface IProps {
    handleSearch: (searchValue: string) => void;
}

const Header = ({ handleSearch }: IProps) => {
    const refSearchInput = useRef<HTMLInputElement>(null);

    const onEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const searchValue = (e.target as HTMLInputElement).value.trim();

            if (searchValue) {
                handleSearch(searchValue);
                (e.target as HTMLInputElement).value = '';
            }
        }
    };

    const onClickSearchBtn = () => {
        const searchValue = refSearchInput.current?.value.trim();

        if (refSearchInput.current && searchValue) {
            handleSearch(searchValue);
            refSearchInput.current.value = '';
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Logo
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <div className="d-flex ms-auto me-5">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            ref={refSearchInput}
                            onKeyDown={onEnterKey}
                        />
                        <button
                            className="btn btn-outline-success"
                            type="button"
                            onClick={onClickSearchBtn}
                        >
                            Search
                        </button>
                    </div>

                    <div className="user my-3 my-lg-0">
                        <img
                            className="user-avatar"
                            src="https://picsum.photos/200"
                            alt=""
                        />
                        <span className="user-name"> Adam Levine </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
