import { Content } from "antd/lib/layout/layout"
import React from "react"
import MainHeader from "../header/header"

interface IMainLayout {
	children: any
}

const MainLayout = (props: IMainLayout) => {
	const { children } = props

	return (
		<>
			<MainHeader />
			<Content>{children}</Content>
		</>
	)
}

export default MainLayout
