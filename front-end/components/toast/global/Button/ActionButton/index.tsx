import { Tooltip } from 'antd'
import clsx from 'clsx'
import React, { FC, useState } from 'react'
import { MinusCircleOutlined } from '@ant-design/icons'
import styles from './index.module.css'

type TProps = {
	icon?: string
	title: string
	onClick?: () => void
	iconContainerClassName?: string
	btnGreen?: boolean
	btnRed?: boolean
	btnYellow?: boolean
	btnViolet?: boolean
	btnBlue?: boolean
	disabale?: boolean
}

const btnStyleGreen = 'text-[#1f8f2b]'
const btnStyleRed = 'text-[#f02b02] '
const btnStyleYellow = 'text-[#edb90e]  '
const btnStyleViolet = 'text-[#7410b3]'
const btnStyleBlue = 'text-[#119ff5]'

export const ActionButton: FC<Partial<TProps>> = ({
	icon,
	iconContainerClassName,
	title,
	onClick,
	btnGreen,
	btnRed,
	btnYellow,
	btnViolet,
	btnBlue,
	disabale = false,

	...props
}) => {
	const [loading, setLoading] = useState(false)
	const handleClick = async () => {
		setLoading(true)
		await onClick?.()
		setLoading(false)
	}

	return (
		<Tooltip title={title} placement="topLeft">
			<div {...props} className="group inline-block p-1  cursor-pointer">
				<button className="cursor-pointer" onClick={handleClick} disabled={disabale || loading}>
					<div
						className={clsx(
							' transition duration-300 text-center p-2 pt-[8px] h-8 w-8 hover:shadow rounded-md text-[#a1a1a1] flex justify-center items-center',
							iconContainerClassName,
							btnGreen && btnStyleGreen,
							btnRed && btnStyleRed,
							btnYellow && btnStyleYellow,
							btnViolet && btnStyleViolet,
							btnBlue && btnStyleBlue
						)}
					>
						{/* <i
							className={clsx(disabale == false && styles.text, icon, ' transition duration-300 !w-[12px] h-4 text-[16px]')}
						></i> */}
						<MinusCircleOutlined className={clsx('transition duration-300 !w-[12px] h-4 text-[16px]')} />
					</div>
				</button>
			</div>
		</Tooltip>
	)
}
