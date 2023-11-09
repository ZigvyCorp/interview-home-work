import { Input, Tooltip } from 'antd'
import clsx from 'clsx'
import useDebounce from 'hook/useDebouce'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react'

type TProps = {
	name: string
	value?: string
	id: string
	handleSubmit?: (val: string) => void
	handleSearch?: (val: string) => void
	placeholder: string
	type?: 'text' | 'number'
	inputClassName?: string
	defaultValue?: string | number
	prefix?: React.ReactNode
	barcode?: boolean
}

export const FilterInput: FC<TProps> = ({
	id,
	placeholder,
	name,
	handleSubmit,
	handleSearch,
	type,
	value,
	inputClassName,
	defaultValue,
	prefix,
	barcode = false
}) => {
	const input = useRef('')
	const [valueSearch, setValueSearch] = useState<any>('')
	const debounceValue: any = useDebounce(valueSearch, 500)

	useEffect(() => {
		handleSubmit && handleSubmit(debounceValue)
	}, [debounceValue])

	return (
		<div className="relative w-full">
			<Input
				className={clsx('!rounded-[5px] h-10 px-2 ', !handleSearch ? 'pr-12' : 'pr-4', inputClassName)}
				placeholder={placeholder}
				type={type}
				value={value}
				defaultValue={defaultValue}
				prefix={prefix}
				id={id}
				name={name}
				onChange={(e) => {
					setValueSearch(e.target.value)
				}}
				onKeyPress={(e) => {
					handleSubmit && e.code.includes('Enter') && handleSubmit(input.current)
				}}
			/>
		</div>
	)
}
