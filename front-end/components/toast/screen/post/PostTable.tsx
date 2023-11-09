import { DeleteOutlined, EditOutlined, CommentOutlined } from '@ant-design/icons'
import { postApi } from 'api'
import { ConfirmDelete } from 'components/toast/global/Modal/confirm-delete'
import React, { useRef, useState } from 'react'
import { useMutation } from 'react-query'

import { toast } from 'components/toast'
import { DataTable, NestedTable } from 'components/toast/global'
import { TColumnsType, TTable } from 'types/table'
import { PostModal } from './PostModal'
import { Tooltip } from 'antd'
import { useRouter } from 'next/router'
import { AddCommentModal } from './comment'
import { useFieldArray, useForm } from 'react-hook-form'

export const PostTable: React.FC<
	TTable & {
		handleFilter: (SearchContent?: string) => void
	}
> = ({ refetch, data, loading, pagination, handlePagination, handleFilter }) => {
	const item = useRef<any>()
	const [visibleComment, setVisibleComment] = useState(false)
	const { control, handleSubmit, reset, setValue, getValues, watch } = useForm()
	const { append, fields, remove } = useFieldArray({
		control,
		name: 'CommentHookForm'
	})
	const itemDetail = useRef<any>()
	const [modal, setModal] = useState(false)
	const [modalDetail, setModalDetail] = useState(false)
	const handleModal = (itemSelected: any) => {
		item.current = itemSelected
		setModal(true)
	}
	const router = useRouter()
	const handleDetail = (item: any) => {
		setModalDetail(true)
		itemDetail.current = item
	}
	const [visible, setVisible] = useState(false)
	const mutationDelete = useMutation((data: any) => postApi.delete(data), {
		onSuccess: (res) => {
			toast.success(`${res?.ResultMessage}`)
			!!refetch && refetch()
		},
		onError: (res) => {
			toast.error
		}
	})
	const handleConfirmDelete = (id: string) => {
		setVisible(true)
		item.current = id
	}
	const handleOpenAddComment = (id: any) => {
		setVisibleComment(true)
		item.current = id
	}
	const handleRemove = async (item: any) => {
		await mutationDelete.mutateAsync(item?._id)
	}
	const columns: TColumnsType<any> = [
		{
			title: 'Index',
			dataIndex: '_id',
			align: 'left',
			width: 80,

			render: (_, __, index) => {
				return <div className="py-2">{++index}</div>
			}
		},
		{
			title: 'PostID',
			dataIndex: 'postId',
			align: 'left'
		},
		{
			title: 'Email',
			dataIndex: 'email',
			align: 'left'
		},
		{
			title: 'Name',
			dataIndex: 'name',
			align: 'left'
		},
		{
			title: 'Body',
			dataIndex: 'body',
			align: 'left'
		},

		{
			title: 'Action',
			dataIndex: 'Action',
			align: 'left',
			width: 150,
			render: (_, record) => (
				<div className="flex items-center gap-4 cursor-pointer">
					<Tooltip title="Add Comment">
						<CommentOutlined className="text-xl" onClick={() => handleOpenAddComment(record)} />
					</Tooltip>
					<Tooltip title="Edit">
						<EditOutlined className="text-xl" onClick={() => handleModal(record)} />
					</Tooltip>
					<Tooltip title="Delete">
						<DeleteOutlined className="text-xl" onClick={() => handleConfirmDelete(record)} />
					</Tooltip>
				</div>
			)
		}
	]
	const expandable = {
		expandedRowRender: (record: any) => {
			const columnsDetail: any = [
				{
					title: 'Index',
					dataIndex: 'GoldJewelryTypeName',
					align: 'left',
					width: 250,
					render: (_: any, __: any, index: any) => ++index
				},
				{
					title: 'UserName',
					dataIndex: 'userName',
					align: 'left',
					render: (_: any, record: any) => {
						return <div className="py-2 pl-[6px]">{!record?.userName ? 'Trống' : record?.userName}</div>
					}
				},
				{
					title: 'Content',
					dataIndex: 'content',
					align: 'left'
				}
			]

			return (
				<div>
					<div className="mb-4 mt-2">
						<div className="pb-2">
							<p className=" font-semibold text-textMain m-0">Comment in post {record?.name}</p>
						</div>
						{record?.comments?.length > 0 && (
							<div>
								<NestedTable columns={columnsDetail} data={record?.comments} />
							</div>
						)}
					</div>
				</div>
			)
		}
	}

	return (
		<React.Fragment>
			<div>
				<DataTable
					columns={columns as any}
					data={data}
					loading={loading}
					pagination={pagination}
					onChange={handlePagination}
					ScrollX="100%"
					expandable={expandable}
					onRow={(data) => router.push(`/details?postId=${data?._id}`)}
					rowKey={(record: any, index: any) => `${record?._id}`}
				/>
			</div>
			<PostModal
				visible={modal}
				onCancel={() => setModal(false)}
				title={'Update Post'}
				titleButton={'Cập nhật'}
				defaultValues={item.current}
				type="Update"
				refetch={refetch}
			/>

			<ConfirmDelete
				visible={visible}
				onCancel={() => setVisible(false)}
				title={`Are you sure for delete post ${item.current?.postId}?`}
				_onPress={handleRemove}
				defaultValues={item.current}
			/>
			<AddCommentModal
				visible={visibleComment}
				onCancel={() => setVisibleComment(false)}
				title={'Add New Comment'}
				titleButton={`Tạo`}
				refetch={refetch}
				type={`Add`}
				append={append}
				dataDetail={item.current}
				modal={modal}
			/>
		</React.Fragment>
	)
}
