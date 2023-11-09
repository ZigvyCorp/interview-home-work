import { MainLayout } from 'components/toast/global/Layout/mainLayouts'
import { NotFound } from 'components/toast/screen/status/NotFound'
import React from 'react'
import { TNextPageWithLayout } from 'types/layout'

const Index: TNextPageWithLayout = () => {
	return <NotFound />
}

Index.Layout = MainLayout

export default Index
