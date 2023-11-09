import { Table, TablePaginationConfig } from 'antd'
import { TableProps } from 'antd/es/table'
import { SorterResult } from 'antd/lib/table/interface'

import style from './index.module.css'
import { useMediaQuery } from 'react-responsive'
import { TColumnsType } from 'types/table'

type TProps<TRecord extends object> = {
	columns: TColumnsType<TRecord>
	data: TRecord[]
	tableProps?: TableProps<TRecord>
	pagination?: TablePaginationConfig | false
	rowKey?: keyof TRecord | 'Id' | any
	expandable?: any
	ScrollX?: any
	onChange?: (pagination: TablePaginationConfig, filter: any, sorter: SorterResult<TRecord> | SorterResult<TRecord>[]) => void
}

export const NestedTable = <TRecord extends object>({
	columns,
	data,
	tableProps,
	rowKey = 'Id',
	pagination = false,
	onChange,
	expandable,
	ScrollX = 0
}: TProps<TRecord>) => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1824px)' })
	return (
		<Table
			rowKey={rowKey as string}
			dataSource={data}
			columns={columns}
			className={style['nested-table']}
			bordered
			tableLayout="fixed"
			pagination={pagination}
			onChange={onChange}
			scroll={{
				x: ScrollX == 0 ? true : ScrollX
			}}
			{...tableProps}
			expandable={expandable}
		></Table>
	)
}
