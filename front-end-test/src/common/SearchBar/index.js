import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './styles.css'

const SearchBar = () => {

    const [query, setQuery] = useState('')
    const history = useHistory()

    console.log(query);

    const searchHandler = (e) => {
        if (query === '') {
            document.getElementsByClassName('ModalContainer')[0].classList.add("show")
        }
        else {
            const searchingQuery = escape(query.toLowerCase().trim());
            history.push({
                pathname: '/search/' + searchingQuery,
                state: { query: searchingQuery }
            })
        }

        // prevent reload after having search result
        e.preventDefault()
    }


    // handle search trigger by pressing Enter button
    const handleEnterPressed = (e) => {
        //if triggers by pressing the enter key
        if (e.code === "Enter") {
            searchHandler(e);
        }
    };

    const closeModalHandler = () => {
        document.getElementsByClassName('ModalContainer')[0].classList.remove("show")
    }

    return (
        <div>
            <form className="form-inline mt-3">
                <div className="form-group mb-0">
                    <input type="text" className="form-control"
                        onChange={e => setQuery(e.target.value)}
                        onKeyPress={handleEnterPressed}
                        id="search-bar" placeholder="Search for a post" />
                </div>
                <button type="button" className="btn btn-primary" onClick={searchHandler}>Search</button>
            </form>

            {/* Modal */}
            <div className="ModalContainer">
                <div className="modal" id="search-modal" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header justify-content-center">
                                <h5 className="modal-title font-weight-bold">Invalid Search</h5>
                            </div>
                            <div className="modal-body">
                                <p className="text-center" >Please enter a title to search for first!</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModalHandler}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade" id="backdrop"></div>
            </div>

        </div>
    );
}

export default SearchBar;