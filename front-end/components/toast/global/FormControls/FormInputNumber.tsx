import { ErrorMessage } from '@hookform/error-message'
import clsx from 'clsx'
import _ from 'lodash'
import React, { useState } from 'react'
import { Control, Controller, FieldValues, Path, RegisterOptions } from 'react-hook-form'
import NumberFormat from 'react-number-format'

type TProps<TFieldValues> = {
	required?: boolean
	name: Path<TFieldValues>
	label?: string
	placeholder?: string
	rules?: RegisterOptions
	control: any
	inputClassName?: string
	allowNegative?: boolean
	disabledOnChange?: boolean
	format?: string
	hideError?: boolean
	inputContainerClassName?: string
	thousandSeparator?: boolean
	prefix?: string
	suffix?: string
	disabled?: boolean
	decimalSeparator?: string
	callback?: (val?: number) => void
	onEnter?: () => void
	decimalScale?: number
	styleLable?: string
	defaultValue?: any
}

export const FormInputNumber = <TFieldValues extends FieldValues = FieldValues>({
	control,
	name,
	placeholder,
	inputClassName,
	label,
	required = true,
	rules,
	allowNegative = false,
	format,
	hideError = false,
	inputContainerClassName,
	prefix,
	suffix,
	thousandSeparator = true,
	disabledOnChange = false,
	disabled = false,
	decimalSeparator = '.',
	callback,
	onEnter,
	decimalScale = 0,
	styleLable,
	defaultValue
}: TProps<TFieldValues>) => {
	return (
		<div className={clsx('w-full', inputContainerClassName)}>
			{label && (
				<label className={`block text-[#8d8c8c] md:text-sm text-sm mb-[8px] ${styleLable}`} htmlFor={name}>
					{label} {required === true && <span className="text-red">*</span>}
				</label>
			)}
			<Controller
				control={control}
				name={name}
				rules={rules}
				render={({ field: { onChange, ref, value, ...newField }, fieldState: { error }, formState: { errors } }) => {
					return (
						<div className="w-full">
							<NumberFormat
								disabled={disabled}
								prefix={prefix}
								suffix={suffix}
								allowLeadingZeros={false}
								decimalSeparator={decimalSeparator}
								thousandSeparator={thousandSeparator}
								allowNegative={allowNegative}
								format={format}
								placeholder={placeholder || '0'}
								getInputRef={ref}
								defaultValue={defaultValue}
								onKeyPress={(e: any) => {
									if (e.code === 'Enter') {
										onEnter?.()
									}
								}}
								value={value}
								onValueChange={(value) => {
									if (value.floatValue === undefined) {
										onChange(undefined)
										callback?.(undefined)
									} else {
										onChange(value.floatValue)
										callback?.(value.floatValue)
									}
								}}
								// onChange={onChange}
								{...newField}
								className={clsx(
									'px-[11px] py-[4px] text-[rgba(0,0,0,.85)] !h-10 !rounded-[5px] border border-[#b5b3b3] w-full placeholder-[#c6c6c6] transition duration-300 outline-[#308ada]',
									inputClassName,
									disabled && 'cursor-not-allowed bg-[#f5f5f5]',
									!_.isEmpty(error) && ' '
								)}
								style={{ height: '40px' }}
								decimalScale={decimalScale}
							/>
							{!hideError && (
								<ErrorMessage
									errors={errors}
									name={name as any}
									render={({ message }) => <p className="text-warning text-xs font-medium mt-1">{message}</p>}
								/>
							)}
						</div>
					)
				}}
			/>
		</div>
	)
}
