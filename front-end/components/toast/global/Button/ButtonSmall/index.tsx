import { Tooltip } from 'antd'
import clsx from 'clsx'
import React from 'react'
import styles from './index.module.css'
import { PlusOutlined } from '@ant-design/icons'
type TProps = {
	title: string
	icon: any
	onClick?: (data?: any) => void | Promise<any>
	btnClass?: string
	showLoading?: boolean
	disabled?: boolean
	text?: boolean
	rotate?: boolean
}

export const ButtonSmall: React.FC<TProps> = ({ icon, title, disabled = false, onClick, btnClass, showLoading, text, rotate = true }) => {
	const [loading, setLoading] = React.useState(false)
	const _onPress = async () => {
		if (onClick) {
			if (showLoading) {
				try {
					setLoading(true)
					await onClick()
				} catch (error) {
				} finally {
					setLoading(false)
				}
			} else {
				onClick()
			}
		}
	}

	return (
		<Tooltip placement="topLeft" title={title}>
			<button
				className={clsx('text-xl bg-[#f7f6f4] hover:shadow-mdtext-key py-1 w-[40px] h-[40px] rounded-md !text-center')}
				onClick={!disabled && !loading ? _onPress : undefined}
			>
				{/* <i className={clsx(styles.text, styles.btnPlus, 'far fa-plus')}></i> */}
				<PlusOutlined className={clsx(styles.text, styles.btnPlus)} />
			</button>
		</Tooltip>
	)
}
