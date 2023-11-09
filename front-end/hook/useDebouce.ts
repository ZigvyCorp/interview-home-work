import { useEffect, useState } from 'react'

const useDebounce: React.FC<any> = (value, delay) => {
	const [debounceValue, setDebounceValue] = useState(value)
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebounceValue(value)
		}, delay)
		return () => {
			clearTimeout(handler)
		}
	}, [value, delay])
	return debounceValue
}
export default useDebounce
