import React from 'react'
import * as loading from '../../../../assets/json/loading.json'
import Lottie from 'react-lottie'

export const Loading = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: loading,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}

	return (
		<div className="fixed inset-0 w-full h-full z-[999999] bg-white flex items-center justify-center">
			<Lottie options={defaultOptions} height={200} width={200} />
		</div>
	)
}
