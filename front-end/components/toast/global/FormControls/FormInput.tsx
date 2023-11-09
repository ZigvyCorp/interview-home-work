import { ErrorMessage } from '@hookform/error-message'
import { Input, InputProps } from 'antd'
import clsx from 'clsx'
import _ from 'lodash'
import React, { ReactNode } from 'react'
import { Control, Controller, FieldValues, Path, RegisterOptions } from 'react-hook-form'

type TProps<TFieldValues> = {
	required?: boolean
	name: Path<TFieldValues>
	type?: InputProps['type']
	label?: string
	placeholder: string
	rules?: RegisterOptions
	control: any
	inputClassName?: string
	inputContainerClassName?: string
	addonBefore?: ReactNode
	disabled?: boolean
	hideError?: boolean
	onEnter?: () => void
	prefix?: React.ReactNode
	defaultValue?: any
	onInput?: (data: any) => void
	suffix?: React.ReactNode
	styleLable?: string
}

export const FormInput = <TFieldValues extends FieldValues = FieldValues>({
	label,
	name,
	placeholder,
	rules,
	control,
	type = 'text',
	disabled,
	required = true,
	inputClassName,
	addonBefore,
	inputContainerClassName,
	hideError = false,
	prefix,
	onEnter,
	defaultValue,
	onInput,
	suffix,
	styleLable
}: TProps<TFieldValues>) => {
	return (
		<div className={clsx(inputContainerClassName, 'w-full')}>
			{label && (
				<label className={`block md:text-sm text-[#8d8c8c] text-sm mb-[8px] ${styleLable}`} htmlFor={name}>
					{label} {required === true && <span className="text-red">*</span>}
				</label>
			)}
			<Controller
				control={control}
				name={name}
				rules={rules}
				render={({ field: { onChange, ...newField }, fieldState: { error }, formState: { errors } }) => {
					return (
						<div className="w-full">
							<Input
								disabled={disabled}
								type={type}
								addonBefore={addonBefore}
								placeholder={placeholder}
								// status={"error"}
								{...newField}
								onKeyPress={(e) => {
									if (e.code === 'Enter') {
										onEnter?.()
									}
								}}
								onChange={onChange}
								prefix={prefix}
								suffix={suffix}
								className={clsx(
									inputClassName,
									'h-8 !rounded-[5px] md:text-sm text-xs px-2 bg-[#fff] ',
									!_.isEmpty(error) && '!border-warning'
								)}
								defaultValue={defaultValue}
								onInput={onInput}
							/>
							{!hideError && (
								<ErrorMessage
									errors={errors}
									name={name as any}
									render={({ message }) => <p className="text-warning text-xs font-medium mt-1 m-0">{message}</p>}
								/>
							)}
						</div>
					)
				}}
			/>
		</div>
	)
}
