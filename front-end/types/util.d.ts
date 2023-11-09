import React, { HTMLAttributes, PropsWithChildren, ValidationMap, WeakValidationMap } from 'react'
import { ButtonProps, FormProps, TooltipProps } from 'antd'
import { ToastContent, ToastOptions } from 'react-toastify'
// import { EPermission } from "~src/config/appConfig";
// import CONTROLLER_LIST from "~src/config/appController";

type FormLayoutProps = Omit<FormProps, 'title'> & {
	title?: string | JSX.Element
	footer?: string | JSX.Element

	submitButtonProps?: ButtonProps
	resetButtonProps?: ButtonProps
	deleteButtonProps?: ButtonProps
	className?: string
	footerClassName?: string
}

type As<Props = any> = React.ElementType<Props>

type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<Target, 'as' | 'wrapper' | OmitAdditionalProps>

type RightJoinProps<SourceProps extends object = {}, OverrideProps extends object = {}> = OmitCommonProps<
	SourceProps,
	keyof OverrideProps
> &
	OverrideProps

type MergeWithAs<
	ComponentProps extends object,
	AsProps extends object,
	AdditionalProps extends object = {},
	AsComponent extends As = As
> = RightJoinProps<ComponentProps, AdditionalProps> &
	RightJoinProps<AsProps, AdditionalProps> & {
		as?: AsComponent
	}

type ComponentWithAs<Component extends As, Props extends object = {}> = {
	<AsComponent extends As>(
		props: MergeWithAs<React.ComponentProps<Component>, React.ComponentProps<AsComponent>, Props, AsComponent>,
		context?: any
	): JSX.Element

	propTypes?: WeakValidationMap<Props> | undefined
	contextTypes?: ValidationMap<any> | undefined
	defaultProps?: Partial<Props> | undefined
	displayName?: string | undefined
}

type IToastOptions = {
	title: ToastContent
} & ToastOptions

type IRouter = {
	path: string
	name: string
	icon: string
	key: string
	breadCrumb: string
	//   controllers?: IControllerName[];
	children?: Omit<IRouter, 'icon' | 'children'>[]
}

// type IControllerName = keyof typeof CONTROLLER_LIST;

// type IRolesType = Partial<Record<IControllerName, EPermission[]>>;

type StateButtonProps = {
	variant?: 'solid' | 'link' | 'outline' | 'unstyled'
	color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
	icon?: string | JSX.Element
	size?: 'small' | 'medium' | 'large'
	loading?: boolean
	rounded?: boolean

	toolTip?: string
	toolTipOptions?: Omit<TooltipProps, 'title'>
}
