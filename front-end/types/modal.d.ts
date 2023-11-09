type TModal = {
	visible: boolean
	onCancel: () => void
	title: string
	titleButton?: string
	defaultValues?: any
	refetch?: (() => void) | undefined
	type?: string
	loading?: boolean
}
