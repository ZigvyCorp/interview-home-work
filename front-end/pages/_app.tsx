/* eslint-disable react-hooks/exhaustive-deps */
import { QueryClientProvider, QueryClient, useQuery } from 'react-query'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { AppProps } from 'next/app'
import React, { FC, Fragment, useState } from 'react'
import ToastProvider from '../providers/ToastProvider'
import { ToastContainer } from 'react-toastify'
import Head from 'next/head'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.min.css'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import 'nprogress/nprogress.css'
import 'moment/locale/vi'
import locale from 'antd/lib/locale/vi_VN'
//Add styleO
// import '../assets/css/main.scss'

import 'antd/dist/antd.css'
import { ConfigProvider } from 'antd'
import '../styles/styles.css'

//add style icon
// import '../assets/fontawesome/css/all.min.css'

// import '../../styles/antOverrides.css'
// import '../../styles/customizeComponents.scss'
import { TAppPropsWithLayout } from 'types/layout'
import BlankLayout from 'components/toast/global/Layout/blankLayouts'
const queryClient = new QueryClient()

const App = ({ Component, pageProps: { session, ...pageProps } }: TAppPropsWithLayout) => {
	const Layout = Component.Layout || BlankLayout
	const [loading, setLoading] = useState(false)

	React.useEffect(() => {
		const handleRouteStart = () => {
			setLoading(true)
			NProgress.start()
		}
		const handleRouteDone = () => {
			setLoading(false)
			NProgress.done()

			const callbackUrl = document?.location.pathname

			localStorage.setItem('callbackUrl', callbackUrl)
		}

		Router.events.on('routeChangeStart', handleRouteStart)
		Router.events.on('routeChangeComplete', handleRouteDone)
		Router.events.on('routeChangeError', handleRouteDone)

		return () => {
			// Make sure to remove the event handler on unmount
			Router.events.on('routeChangeStart', handleRouteStart)
			Router.events.on('routeChangeComplete', handleRouteDone)
			Router.events.on('routeChangeError', handleRouteDone)
		}
	}, [])

	return (
		<Provider store={store}>
			<ToastProvider>
				{/* <SessionProvider session={pageProps.session}> */}
				<QueryClientProvider client={queryClient}>
					<ConfigProvider locale={locale}>
						<Head>
							<title>{!loading ? Component?.displayName : 'Đang chuyển hướng...'}</title>
						</Head>

						{
							<Layout>
								<Component {...pageProps} />
							</Layout>
						}
						<ToastContainer />
					</ConfigProvider>
				</QueryClientProvider>
				{/* </SessionProvider> */}
			</ToastProvider>
		</Provider>
	)
}

export default App
