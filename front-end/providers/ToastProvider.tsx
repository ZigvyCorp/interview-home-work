import React, { createContext, FC, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { IToastOptions } from 'types/util'

type ToastProviderProps = {
	toast: (options: IToastOptions) => React.ReactText
}

// @ts-ignore
const toastContext = createContext<ToastProviderProps>({})

export const useToast = () => useContext(toastContext)

const ToastProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<toastContext.Provider
			value={{
				toast: ({ title, type, position, ...opts }) =>
					toast(title, {
						type: type || 'info',
						position: position || 'bottom-right',
						...opts
					})
			}}
		>
			{children}
			<ToastContainer />
		</toastContext.Provider>
	)
}

export default ToastProvider
