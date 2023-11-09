import { useEffect } from 'react'
import { focusManager } from 'react-query'

export const useDisableRefetchOnFocus = () => {
	useEffect(() => {
		focusManager.setFocused(false)
		return () => focusManager.setFocused(undefined)
	}, [])
}
