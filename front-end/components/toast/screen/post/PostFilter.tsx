import { FilterInput } from 'components/toast/global/FilterBase'
import React, { useRef } from 'react'

type TProps = {
	handleFilter: (SearchContent: string) => void
	setPagination?: any
}

export const PostFilter: React.FC<TProps> = ({ handleFilter, setPagination }) => {
	const SearchContent = useRef<string | any>(null)

	return (
		<div className="bg-[#fff] p-2 rounded-md shadow">
			<div className="grid grid-cols-3 gap-4">
				<div className="sm:col-span-1 col-span-2">
					<FilterInput
						placeholder="Search Post...."
						id="NamePost"
						name="SearchContent"
						handleSubmit={(val: string) => {
							setPagination({ current: 1, pageSize: 10 })
							handleFilter((SearchContent.current = val))
						}}
						inputClassName="w-full"
					/>
				</div>
			</div>
		</div>
	)
}
