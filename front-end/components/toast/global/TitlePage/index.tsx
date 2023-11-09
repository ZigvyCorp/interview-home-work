import { Tooltip } from 'antd'

import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { LeftOutlined } from '@ant-design/icons'
import styles from './index.module.css'
import clsx from 'clsx'

type TProps = {
	title: string
	onAdd?: () => void
	btnTitle?: string
	hideAddBtn?: boolean
	fillterBtn?: boolean
	onFillter?: () => void
	onFetch?: () => void
	styleBtn?: string
	buttonFilter?: any
	onBack?: any
	back?: boolean
}

export const TitlePage: React.FC<TProps> = ({
	title,
	onAdd,
	btnTitle,
	hideAddBtn,
	fillterBtn,
	onFillter,
	onFetch,
	styleBtn,
	buttonFilter = false,
	onBack,
	back
}) => {
	return (
		<div className="mb-[8px] flex justify-between items-center">
			<div className="fixed z-50 sm:ml-[50px] ml-[30px] xl:top-[16px] sm:top-[21px] top-[22px]">
				<div className="flex items-center ">
					<span className={clsx(styles.text, 'text-2xl font-semibold flex items-center uppercase')}>
						{back && <LeftOutlined onClick={onBack} className="text-2xl mr-4" />}
						{title}
					</span>
					{onFetch && (
						<Tooltip title="Làm mới dữ liệu" placement="topRight">
							<button className="mt-2 ml-2" onClick={onFetch}>
								<i className="fas fa-sync text-key hover:text-[#2c4d80]"></i>
							</button>
						</Tooltip>
					)}
				</div>
			</div>
			<div className={clsx(styleBtn, 'absolute right-[20px] sm:top-[98px] top-[98px] z-40 flex gap-2')}>
				{fillterBtn && (
					<Tooltip title={'Bộ lọc'} placement="left">
						<button
							className={clsx('text-xl bg-[#f7f6f4] hover:shadow-mdtext-key py-1 w-[40px] h-[40px] rounded-md !text-center')}
							onClick={onFillter}
						>
							<i className={clsx(styles.text, 'fas fa-filter')}></i>
						</button>
					</Tooltip>
				)}
				{!hideAddBtn && (
					<Tooltip title={btnTitle} placement="left">
						<button
							className={clsx('text-xl bg-[#f7f6f4] hover:shadow-mdtext-key py-1 w-[40px] h-[40px] rounded-md !text-center')}
							onClick={onAdd}
						>
							{/* <i className={clsx(styles.text, styles.btnPlus, 'far fa-plus')}></i> */}
							<PlusOutlined className={clsx(styles.text, styles.btnPlus)} />
						</button>
					</Tooltip>
				)}
			</div>
		</div>
	)
}
