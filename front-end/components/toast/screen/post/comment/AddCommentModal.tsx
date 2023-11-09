import { postApi } from 'api'
import { toast } from 'components/toast'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import Modal from '../../../global/Modal'
import { FormCard } from 'components/toast/global'
import { CollectionCreateComment } from './CollectionCreateComment'
import { IconButton } from 'components/toast/global/Button'
type TProps = {
	dataDetail?: any
	append?: any
	modal?: any
	dataDetailIndex?: any
	setItemValue?: any
	fields?: any
}

export const AddCommentModal: React.FC<TModal & TProps & { append: any } & { modal: any }> = ({
	visible,
	title,
	onCancel,
	titleButton,
	refetch,
	type,
	dataDetail
}) => {
	const { control, watch, setValue, getValues, reset, handleSubmit, setError } = useForm<any>({
		mode: 'onBlur'
	})

	const [listDataCollectOut, setListDataCollectOut] = useState([])
	const [clearData, setClearData] = useState(false)
	const [pawnProductDataInput, setPawnProductDataInput] = useState<any>([])
	useEffect(() => {
		reset(dataDetail?.PawnProductData)
	}, [dataDetail, reset])

	useEffect(() => {
		if (!!dataDetail) {
			setListDataCollectOut(dataDetail?.PawnProductData)
		}
	}, [dataDetail])

	const handleSuccess = () => {
		reset()
		onCancel()
	}

	const mutateAdd = useMutation((data: any) => postApi.addComment(data), {
		onSuccess: (res) => {
			toast.success(`${res?.ResultMessage}`)
			!!refetch && refetch()

			handleSuccess()
		},
		onError: toast.error
	})

	const hasEmptyString = (arr: any[]) => {
		return arr.some((item: any) => item.content === '' || item.userName === '')
	}

	const _onSubmit = async (data: any) => {
		const checkEmpty = hasEmptyString(pawnProductDataInput)

		if (pawnProductDataInput?.length === 0) {
			toast.error('Please add comment!')
			return
		}
		if (checkEmpty) {
			toast.error('Please complete all filed in comment.!')
			return
		}

		const payload = {
			postId: dataDetail?._id,
			commentData: pawnProductDataInput || []
		}
		mutateAdd.mutateAsync(payload)
	}

	return (
		<Modal visible={visible} onCancel={onCancel} width={1200}>
			<FormCard>
				<FormCard.Header onCancel={onCancel}>
					<p className="mb-0">{title}</p>
				</FormCard.Header>

				<FormCard.Body>
					<div className="grid grid-cols-1 gap-3">
						<CollectionCreateComment
							data={dataDetail ? listDataCollectOut : undefined}
							loading={false}
							pagination={undefined}
							handleDataInterestRateOut={(data) => setPawnProductDataInput(data)}
							handleClear={clearData}
							handleOpen={() => setClearData(false)}
							dataDetail={dataDetail}
							type={type}
						/>
					</div>
				</FormCard.Body>

				<FormCard.Footer>
					<IconButton
						title={titleButton}
						showLoading
						onClick={handleSubmit(_onSubmit)}
						icon={''}
						tooltip={''}
						btnIconClass="mr-0"
						text={true}
					/>
					<IconButton title="Hủy" showLoading onClick={onCancel} icon={''} tooltip={''} red btnClass="ml-2" />
				</FormCard.Footer>
			</FormCard>
		</Modal>
	)
}
