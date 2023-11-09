import { Spin } from 'antd'
import clsx from 'clsx'
import React, { FC, ReactElement } from 'react'

import styles from './index.module.css'
import { useDisableRefetchOnFocus } from 'hook/useDisableRefetchOnFocus'

type TSubComponents = {
	Header: FC<{
		onCancel: () => void
		children: React.ReactNode
	}>
	Body: FC<{
		children: React.ReactNode
	}>
	Footer: FC<{
		children: React.ReactNode
	}>
}

export const FormCard: FC<{ loading?: boolean; children: React.ReactNode }> & TSubComponents = ({ children, loading = false }) => {
	useDisableRefetchOnFocus()

	return (
		<Spin tip="Loading..." spinning={loading} style={{ maxHeight: 'unset' }}>
			<div style={{ padding: 10 }}>{children}</div>
		</Spin>
	)
}

const Header: TSubComponents['Header'] = ({ children, onCancel }) => (
	<div
		className={clsx(
			// styles.text,
			'text-center p-4 text-xl font-bold uppercase flex items-center justify-between text-[#a67c48]'
		)}
	>
		<div />
		{children}
		<div className="text-[#90622e]">
			<span className=" cursor-pointer" onClick={onCancel}>
				<i className="fad fa-times-circle "></i>
			</span>
		</div>
	</div>
)
FormCard.Header = Header
Header.displayName = 'header'

const Body: TSubComponents['Body'] = ({ children }) => <div className="p-4 pt-0">{children}</div>
FormCard.Body = Body
Body.displayName = 'body'

const Footer: TSubComponents['Footer'] = ({ children }) => <div className={clsx('flex items-center justify-center p-4')}>{children}</div>
FormCard.Footer = Footer
Footer.displayName = 'footer'
