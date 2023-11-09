import React from 'react'
import Lottie from 'react-lottie'
import * as notFound from '../../../../assets/json/error-404.json'

export const NotFound = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: notFound,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}

	return (
		<div className="bg-white overflow-hidden rounded-xl h-[calc(100vh-54px-32px-32px)] flex items-center justify-center">
			<Lottie options={defaultOptions} width={'auto'} height={450} />
		</div>
	)
}
