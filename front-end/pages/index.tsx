/* eslint-disable react/no-children-prop */
import { MainLayout } from 'components/toast/global/Layout/mainLayouts'
import { TNextPageWithLayout } from '../types/layout'

import router from 'next/router'
import { useEffect } from 'react'
import { Loading } from 'components/toast/screen/status/Loading'

const Home: TNextPageWithLayout = () => {
	useEffect(() => {
		const callbackUrl = localStorage.getItem('callbackUrl')
		if (callbackUrl == '/') {
			router.push('/list-posts')
		} else {
			router.push(callbackUrl || '/list-posts')
		}
	}, [])

	return <Loading />
}

Home.Layout = MainLayout
export default Home
