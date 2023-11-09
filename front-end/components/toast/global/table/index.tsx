import { Table, TablePaginationConfig, TableProps } from 'antd'
import { SorterResult, TableRowSelection } from 'antd/lib/table/interface'
import clsx from 'clsx'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

import styles from './index.module.css'
import { TColumnsType } from 'types/table'

type TProps<T extends object> = {
	rowKey?: keyof T | 'Id' | any
	style?: 'main' | 'secondary'
	title?: string
	columns: TColumnsType<T>
	data: T[]
	bordered?: boolean
	pagination?: TablePaginationConfig | false
	onChange?: (pagination: TablePaginationConfig, filter: any, sorter: SorterResult<T> | SorterResult<T>[]) => void
	summary?: (data: readonly T[]) => React.ReactNode | null
	rowSelection?: TableRowSelection<T>
	scroll?: TableProps<T>['scroll']
	loading?: boolean
	expandable?: any
	onRow?: (data?: any) => void
	ScrollX?: any
	footer?: any
	expandRowByClick?: boolean
	defaultExpandAllRows?: boolean
	customeTable?: any
	length?: any
}

export const DataTable = <T extends object = object>({
	style = 'main',
	title = '',
	columns,
	data,
	bordered = undefined,
	pagination = false,
	onChange,
	rowSelection,
	summary = undefined,
	scroll = { x: true },
	rowKey = 'Id',
	loading = false,
	expandable,
	onRow,
	ScrollX = 0,
	footer,
	expandRowByClick = false,
	defaultExpandAllRows = false,
	customeTable: customTable = '',
	length
}: TProps<T>) => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1824px)' })
	// console.log(isTabletOrMobile);
	return (
		<React.Fragment>
			{!!title.length && <p className={clsx('titleTable', style === 'secondary' && '')}>{title}</p>}
			<Table
				loading={loading}
				rowKey={rowKey as string}
				bordered={bordered}
				columns={columns}
				dataSource={data}
				className={clsx(style !== 'main' ? styles.table : styles.maintable) + customTable}
				pagination={pagination}
				summary={summary}
				onChange={onChange}
				rowSelection={rowSelection}
				footer={footer}
				scroll={{
					x: ScrollX == 0 ? true : ScrollX,
					y: `${isTabletOrMobile == true ? '500px' : '720px'}`
				}}
				expandable={expandable}
				expandRowByClick={expandRowByClick}
				defaultExpandAllRows={defaultExpandAllRows}
				onRow={(record) => {
					return {
						onDoubleClick: () => {
							onRow?.(record)
						}
					}
				}}
			></Table>
			{pagination && data?.length > 0 && (
				<div className="relative ">
					<div className="absolute sm:bottom-4  border-key border font-semibold flex gap-2 w-fit px-3 py-[6px] text-xs  rounded">
						<span className="text-[#4c4b4b]">Tổng số lượng : </span>
						<span> {pagination?.total}</span>
					</div>
				</div>
			)}
		</React.Fragment>
	)
}
