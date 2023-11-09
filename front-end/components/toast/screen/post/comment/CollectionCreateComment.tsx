/* eslint-disable react-hooks/exhaustive-deps */
import { DataTable } from 'components/toast/global'
import { ActionButton, ButtonSmall } from 'components/toast/global/Button'
import { FormInput } from 'components/toast/global/FormControls/FormInput'
import React, { useEffect, useRef, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { TColumnsType } from 'types/table'

type TProps = {
	data: any
	loading: boolean
	pagination: any
	handleDataInterestRateOut: (data: any) => void
	handleClear: any
	handleOpen: () => void
	dataDetail?: any
	type?: any
}

export const CollectionCreateComment: React.FC<TProps> = ({
	data,
	loading,
	pagination,
	handleDataInterestRateOut,
	handleClear,
	handleOpen,
	dataDetail,
	type
}) => {
	const { control, handleSubmit, watch, getValues, setValue } = useForm<any>({
		mode: 'onBlur'
	})

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'CommentHookForm'
	})

	useEffect(() => {
		if (data) {
			setValue('CommentHookForm', data)
		}
	}, [data])

	const item = useRef<any>()

	const handleModal = (itemSelected: any) => {
		item.current = itemSelected
	}

	const columns: TColumnsType<any> = [
		{
			title: 'STT',
			dataIndex: 'STT',
			align: 'left',
			width: 50,
			render: (_, __, index) => ++index
		},

		{
			title: 'UserName',
			dataIndex: 'userName',
			align: 'left',
			width: 150,
			render: (_, __, index) => {
				return (
					<FormInput
						name={`CommentHookForm.${index}.userName`}
						placeholder={''}
						control={control}
						rules={{ required: 'Not Empty!' }}
					/>
				)
			}
		},

		{
			title: 'Content',
			dataIndex: 'content',
			align: 'left',
			width: 150,
			render: (_, __, index) => {
				return (
					<FormInput
						name={`CommentHookForm.${index}.content`}
						placeholder={''}
						control={control}
						rules={{ required: 'Not Empty!' }}
					/>
				)
			}
		},

		{
			title: 'Action',
			dataIndex: 'Action',
			align: 'left',
			width: 80,
			render: (_, __, index) => {
				return (
					<>
						<ActionButton
							title="Delete"
							icon="fas fa-minus-circle"
							iconContainerClassName="border-none"
							onClick={() => {
								remove(index)
							}}
						/>
					</>
				)
			}
		}
	]

	useEffect(() => {
		if (handleClear) {
			remove()
		}
	}, [handleClear])

	useEffect(() => {
		handleDataInterestRateOut(watch().CommentHookForm)
	}, [watch().CommentHookForm])

	return (
		<React.Fragment>
			<div className="btnPlusTable flex justify-between sm:items-center items-start">
				<div className="text-md p-0 m-0 font-semibold text-textMain sm:flex items-center gap-4 mt-2"></div>

				<ButtonSmall
					title={'Add New Comment'}
					icon={'far fa-plus text-textMain'}
					onClick={() => {
						append({
							userName: '',
							content: ''
						})

						handleOpen()
					}}
					btnClass=""
					text={false}
				/>
			</div>

			<div>
				<DataTable
					columns={columns}
					data={fields}
					loading={loading}
					pagination={pagination}
					onRow={(data) => handleModal(data)}
					// onChange={(val) => handlePagination(val)}
					// ScrollX={900}
					rowKey={(record: any, index: any) => `${record?.id}`}
					// rowSelection={rowSelection}
				/>
			</div>
		</React.Fragment>
	)
}
