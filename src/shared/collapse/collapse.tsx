import { Collapse } from "antd"
import React from "react"
import "./collapse.scss"

interface ICustomCollapseProps {
	id: number
	header: React.ReactNode
	children: React.ReactNode
	disabled?: boolean
	isOpen?: boolean
}

const CustomCollapse = (props: ICustomCollapseProps) => {
	const { id, header, children, disabled, isOpen } = props

	return (
		<Collapse className='custom-collapse' defaultActiveKey={isOpen ? [id] : undefined}>
			<Collapse.Panel key={id} header={header} showArrow={false} children={children} disabled={disabled} />
		</Collapse>
	)
}

export default CustomCollapse
