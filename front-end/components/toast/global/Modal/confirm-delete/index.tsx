/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

import { IconButton } from '../../Button/IconButton'
import { FormCard } from '../../FormControls/FormCard'
import Modal from '../index'
export const ConfirmDelete: React.FC<{
	_onPress: (id: string) => void
	visible: boolean
	onCancel: () => void
	title: string
	defaultValues: any
	type?: string
	content?: string
}> = ({ visible, onCancel, title, defaultValues, _onPress, type, content }) => {
	const onSubmit = () => {
		_onPress(defaultValues)
		onCancel()
	}
	return (
		<Modal visible={visible} onCancel={onCancel} width={400}>
			<FormCard>
				<div className="p-4">
					<div className="text-center text-base font-semibold text-[#615f5f] pb-1">
						<span>{title}</span>
					</div>
					{type == 'Edit' ? (
						<div className="text-xs font-semibold text-center text-[#8f8e8e]">
							<span>{content}</span>
						</div>
					) : null}
				</div>

				<FormCard.Footer>
					<IconButton title={'Yes'} showLoading onClick={onSubmit} btnIconClass={'mr-0'} />
					<IconButton title="No" showLoading onClick={onCancel} icon={''} tooltip={''} red btnClass="ml-2" />
				</FormCard.Footer>
			</FormCard>
		</Modal>
	)
}
