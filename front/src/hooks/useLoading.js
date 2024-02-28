import { useCallback, useState } from 'react'

export const useLoading = (callback = async () => { }, deps = []) => {
	const [isLoading, setLoading] = useState(false)

	const handleSubmit = useCallback(async (...args) => {
		setLoading(true)

		try {
			return await callback(...args)
		} catch (error) {
			throw new Error(error)
		} finally {
			setLoading(false)
		}
	}, deps)
	const result = [handleSubmit, isLoading]
	return result
}
