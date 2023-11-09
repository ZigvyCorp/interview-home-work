/* eslint-disable react-hooks/exhaustive-deps */
import { postApi } from 'api'
import { toast } from 'components/toast'
import { FormCard } from 'components/toast/global'
import { IconButton } from 'components/toast/global/Button/IconButton'
import { FormInput } from 'components/toast/global/FormControls/FormInput'
import { FormInputNumber } from 'components/toast/global/FormControls/FormInputNumber'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import Modal from '../../global/Modal/index'

export const PostModal: React.FC<any> = ({ visible, onCancel, title, titleButton, defaultValues, type, refetch }) => {
	const [loading, setLoading] = useState(false)
	const { handleSubmit, control, watch, reset, register } = useForm<any>({
		mode: 'onBlur',
		defaultValues
	})

	useEffect(() => {
		reset(defaultValues)
	}, [defaultValues])

	const mutationUpdate = useMutation((data: any) => postApi.update(data), {
		onSuccess: (res) => {
			toast.success(`${res?.ResultMessage}`)
			reset()
			!!refetch && refetch()
			onCancel()
			setLoading(false)
		},
		onError: (res: any) => {
			console.log('res', res)
			setLoading(false)
			toast.error(`${res?.response?.data?.ErrorMessage}`)
		}
	})

	const mutationAdd = useMutation((data: any) => postApi.create(data), {
		onSuccess: (res) => {
			toast.success(`${res?.ResultMessage}`)
			reset()
			!!refetch && refetch()
			onCancel()
			setLoading(false)
		},
		onError: (res: any) => {
			console.log('res', res)
			setLoading(false)
			toast.error(`${res?.response?.data?.ErrorMessage}`)
		}
	})

	const _onPress = async (data: any) => {
		setLoading(true)
		if (type == 'Update') {
			const dataUpdate = {
				id: defaultValues?.Id,
				...data
			}
			await mutationUpdate.mutateAsync(dataUpdate)
		} else {
			await mutationAdd.mutateAsync(data)
		}
	}
	return (
		<Modal visible={visible} onCancel={onCancel} width={500}>
			<FormCard loading={loading}>
				<FormCard.Header onCancel={onCancel}>
					<div className="w-full">
						<p className="mb-0">{title}</p>
					</div>
				</FormCard.Header>

				<FormCard.Body>
					<div className="grid grid-cols-2 gap-x-4 gap-y-3">
						<div className="col-span-2">
							<FormInput
								name={'email'}
								placeholder={''}
								control={control}
								label="Email"
								rules={{
									required: 'Not Empty!',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'invalid email address'
									}
								}}
							/>
						</div>
						<div className="col-span-2">
							<FormInput name={'name'} placeholder={''} control={control} label="Name" rules={{ required: 'Not Empty!' }} />
						</div>
						<div className="col-span-2">
							<FormInput name={'body'} placeholder={''} control={control} label="Body" rules={{ required: 'Not Empty!' }} />
						</div>
					</div>
				</FormCard.Body>
				<FormCard.Footer>
					<IconButton
						title={titleButton}
						showLoading
						onClick={handleSubmit(_onPress)}
						icon={''}
						tooltip={''}
						text={true}
						btnIconClass="mr-0"
					/>
					<IconButton title="Hủy" showLoading onClick={onCancel} icon={''} tooltip={''} red btnClass="ml-2" />{' '}
				</FormCard.Footer>
			</FormCard>
		</Modal>
	)
}
