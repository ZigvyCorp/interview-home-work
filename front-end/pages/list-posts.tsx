import { TablePaginationConfig } from 'antd'
import { useState } from 'react'
import { useQuery } from 'react-query'

import { PageName } from 'config/displayNameConfig'
import { postApi } from 'api'
import { TNextPageWithLayout } from 'types/layout'
import { defaultPagination } from 'config/appConfig'
import { TitlePage } from 'components/toast/global'
import { MainLayout } from 'components/toast/global/Layout/mainLayouts'
import { toast } from 'components/toast'
import { PostFilter, PostModal, PostTable } from 'components/toast/screen/post'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { getPostsRedux } from 'store/post/postSlice'

const Index: TNextPageWithLayout = () => {
	const [pagination, setPagination] = useState<TablePaginationConfig>(defaultPagination)
	const dispatch = useAppDispatch()
	const [modal, setModal] = useState(false)
	const [SearchContent, setSearchContent] = useState<string>()

	const listPostsRedux = useAppSelector((state) => state.postSlice)

	const handleFilter = (SearchContent?: string) => {
		setSearchContent(SearchContent)
	}
	const { data, refetch, isLoading } = useQuery(
		[
			'GetListPost',
			{
				Current: pagination.current,
				PageSize: pagination.pageSize,
				SearchContent
			}
		],
		() =>
			postApi
				.getList({
					PageIndex: pagination.current,
					PageSize: pagination.pageSize,
					SearchContent
				})
				.then((res) => {
					dispatch(getPostsRedux(res))
					return res
				}),
		{
			refetchOnWindowFocus: false,
			onSuccess: (data) => setPagination({ ...pagination, total: data?.TotalItem }),
			onError: toast.error
		}
	)

	return (
		<div className="">
			<div className="">
				<TitlePage title={PageName.post.listPost} hideAddBtn={false} onAdd={() => setModal(true)} btnTitle="Create Post" />
			</div>
			<div className="mb-2">
				<PostFilter handleFilter={handleFilter} setPagination={setPagination} />
			</div>
			<div className="bgContainer">
				<div>
					<PostTable
						data={listPostsRedux?.posts as any}
						loading={isLoading}
						pagination={pagination}
						handlePagination={(pagination) => {
							setPagination(pagination)
						}}
						refetch={refetch}
						handleFilter={handleFilter}
					/>
				</div>
			</div>
			<div>
				<PostModal
					visible={modal}
					onCancel={() => setModal(false)}
					title={'Create Post'}
					titleButton={'Thêm'}
					type="Add"
					refetch={refetch}
				/>
			</div>
		</div>
	)
}

Index.Layout = MainLayout
Index.displayName = PageName.post.listPost

export default Index
