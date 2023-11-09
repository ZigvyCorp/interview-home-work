/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import React, { ReactElement, useCallback, useEffect, useState } from 'react'

import Footer from './Footer'
import Header from './Header'

import styles from './index.module.css'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'
import { TlayoutWithChild } from 'types/layout'

type TProps = {
	breadcrumb?: string
	userPage?: boolean
	children?: React.ReactNode
}

export const MainLayout: TlayoutWithChild & React.FC<TProps> = ({ children }) => {
	let isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
	const [hover, setHover] = useState(true)
	const router = useRouter()
	const handleHover = useCallback((bool: boolean) => setHover(bool), [])
	useEffect(() => {
		if (isTabletOrMobile) {
			setHover(false)
		}
	}, [])

	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken')
		if (!accessToken) {
			router.push(`/auth/login?callbackUrl=${router?.pathname}`)
		}
	}, [])

	return (
		<div className={clsx(styles.container)}>
			<Header {...{ hover, handleHover }} />
			<div className="flex">
				<main
					className={clsx(
						styles.main,
						hover ? ' px-[14px]' : '',
						!hover ? ' px-[14px]' : '',
						'w-[100%] pt-[82px] min-h-screen   '
					)}
				>
					{children}
				</main>
			</div>
			<div className={clsx(styles.footer, 'mt-2')}>
				<Footer {...{ hover }} />
			</div>
		</div>
	)
}

MainLayout.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
