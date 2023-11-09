/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import React from 'react'

import { Dropdown } from 'antd'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './index.module.css'

type TProps = {
	hover: boolean
	handleHover: (bool: boolean) => void
}

const Header: React.FC<TProps> = ({ hover, handleHover }) => {
	const router = useRouter()

	const handleLogout = () => {
		localStorage.clear()
		router.push(`/auth/login`)
	}

	return (
		<React.Fragment>
			<div className={clsx('w-[100%] border-b xl:bg-main border-[#e9e9e9] sm:h-[72px] h-[62px]  fixed z-50')}>
				<div
					className={clsx(
						styles.header,

						'sm:px-4 px-1 py-1 !bg-[##8da6ca] sm:h-[72px] h-[62px] flex justify-between  border-b border-[#eaeae8]'
					)}
				>
					<div className="w-[10%] flex items-center "></div>
					<div className={clsx(hover && 'sm:!flex !hidden', 'flex items-center mr-[5px] gap-[34px]')}>
						<div className="h-[68px]">
							<div className="flex items-center justify-center mt-2">
								<div
									className={clsx(
										styles.logoBorder,
										'flex items-center justify-center rounded-full border-[2px] border-[#f4f2f0]'
									)}
								>
									<img
										src={'https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg'}
										alt={'Avatar Image'}
										className={clsx(styles.logo, 'rounded-full')}
									/>
								</div>
								<div className={clsx(styles.text, 'text-xs w-fit sm:ml-4 ml-2 flex items-center justify-center')}>
									<div>
										<span className={clsx(styles.text, 'w-full font-semibold text-[16px] ')}>Lưu Phúc Hưng</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Header
