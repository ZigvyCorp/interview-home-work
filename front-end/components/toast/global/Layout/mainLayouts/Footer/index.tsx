import clsx from 'clsx'
import moment from 'moment'
import React from 'react'
import styles from './index.module.css'

type TProps = {
	hover: boolean
}

const Footer: React.FC<TProps> = ({ hover }) => {
	return (
		<footer className={clsx(styles.footer, '')}>
			<p className="text-xs w-fit md:pt-0 pt-2">© {moment().format('YYYY')} Create From LPH All rights reserved.</p>
		</footer>
	)
}

export default Footer
