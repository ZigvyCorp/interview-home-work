import React from 'react';
import styles from './Header.module.css';
import { FaUserTie } from 'react-icons/fa';
const Header = () => {
	return (
		<div>
			<div className="row ">
				<div className="col-5 border border-3 border-dark">
					<div className="row h-100 align-items-center">
						<div className="col-2 h-100 bg-light"></div>
						<div className="col align-middle fw-bold">Logo</div>
					</div>
				</div>
				<div
					className={`col-2 d-flex bg-light 
                    justify-content-center 
                    align-items-center 
                    
                    fw-bold ${styles.customArrow}`}
				>
					Blog
				</div>
				<div className="col-5 border border-3 border-dark">
					<div className="row h-100 justify-content-center align-items-center">
						<div className="col d-flex justify-content-end">
							<FaUserTie size="3em" />
						</div>
						<div className="col-3 text-start fw-bold">
							Adam Levine
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
