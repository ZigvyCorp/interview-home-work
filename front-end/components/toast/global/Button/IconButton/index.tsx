import { Tooltip } from 'antd'
import clsx from 'clsx'
import { resolve } from 'path'
import React, { useState } from 'react'
import styles from './index.module.css'

type TProps = {
	title: string | any
	icon?: string
	tooltip?: string
	onClick?: (data?: any) => void | Promise<any>
	btnClass?: string
	btnIconClass?: string
	showLoading?: boolean
	disabled?: boolean
	red?: boolean
	yellow?: boolean
	green?: boolean
	blue?: boolean
	text?: boolean
}

const styleBtn =
	'bg-[#E8C39033] h-[40px] min-w-[80px] mx-0 py-[6px] px-[12px] rounded-md text-[#84562D] !font-semibold tracking-wide hover:shadow'

const styleBtnGreen = '!bg-[#E9F6F3] text-[#27A689]'
const styleBtnRed = '!bg-[#F6DFD6] text-[#E54C36]'
const styleBtnBlue = '!bg-[#EAF3FB] text-[#4298DA]'
const styleBtnYellow = '!bg-[#fbfaea] text-[#daaa42]'
const styleDisable = '!bg-[#efefef] text-[#7b7b7b] !h-[38px] cursor cursor-not-allowed'

export const IconButton: React.FC<TProps> = ({
	icon,
	title,
	tooltip: tooltip,
	disabled = false,
	onClick,
	btnClass,
	btnIconClass,
	showLoading,
	red,
	yellow,
	green,
	blue,
	text
}) => {
	const [loading, setLoading] = React.useState(false)
	// const _onPress = async () => {
	//   console.log("click ...");

	//   if (onClick) {
	//     if (showLoading) {
	//       try {
	//         setLoading(true);
	//         // await onClick();
	//         await new Promise(resolve => setTimeout(resolve, 10000));
	//       } catch (error) {
	//       } finally {
	//         setLoading(false);
	//       }
	//     } else {
	//       onClick();
	//     }
	//   }
	// };

	const _onPress = async () => {
		// DISABLE BASE ON FLAGS: DISABLED, LOADING
		if (disabled || loading) return

		// DONT SHOW LOADING EFFECT
		if (!showLoading) {
			onClick?.()

			return
		}

		// TOGGLE LOADING FLAG
		try {
			setLoading(true)

			await onClick?.()
		} finally {
			setLoading(false)
		}
	}

	return (
		<Tooltip placement="topLeft" title={tooltip}>
			<button
				onClick={_onPress}
				// onClick={!disabled && !loading ? _onPress : undefined}
				className={clsx(
					styleBtn,
					btnClass,
					disabled ? styleDisable : green && styleBtnGreen,
					disabled ? styleDisable : red && styleBtnRed,
					disabled ? styleDisable : blue && styleBtnBlue,
					disabled ? styleDisable : yellow && styleBtnYellow
				)}
			>
				{loading ? (
					<i className={'fa-spin fas fa-circle-notch mr-2 w-3 h-3 '} />
				) : icon ? (
					<i className={clsx(icon, 'mr-2 w-3 h-3', btnIconClass)} />
				) : null}
				{title}
			</button>
		</Tooltip>
	)
}
