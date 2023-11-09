import { Modal } from 'antd'
import clsx from 'clsx'
import React, { FC } from 'react'

type TProps = {
	visible: boolean
	width?: number
	style?: React.CSSProperties
	onCancel?: () => void
	classModal?: string
}

const Index: FC<TProps & { children: React.ReactNode }> = ({ children, classModal, ...props }) => {
	return (
		<Modal
			destroyOnClose={true}
			closable={false}
			footer={null}
			{...props}
			maskStyle={{ backgroundColor: 'rgba(252, 252, 252, 50%)' }}
			className={clsx(classModal, '2xl:!top-[60px] !top-[10px]')}
		>
			{children}
		</Modal>
	)
}

Index.defaultProps = {
	width: 768
}

export default Index
