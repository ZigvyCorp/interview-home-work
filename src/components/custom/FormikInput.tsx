import React from "react"
import { Field, FieldProps, FastField, FastFieldProps } from "formik"
import { Form, Input } from "antd"
import { FormItemProps } from "antd/lib/form"
import { InputProps } from "antd/lib/input"

type Props = InputProps & {
  name: string
  fast?: boolean
  FormItemProps?: FormItemProps
}

export const FormikInput: React.FC<Props> = ({
  name,
  fast,
  onChange,
  FormItemProps = {},
  ...rest
}) => {
  const FieldComponent = fast ? FastField : Field

  return (
    <FieldComponent name={name}>
      {({ field, meta, form }: FieldProps | FastFieldProps) => (
        <Form.Item
          name={name}
          validateStatus={meta.touched && meta.error ? "error" : "success"}
          help={meta.touched && meta.error}
          {...FormItemProps}
        >
          <Input
            {...field}
            {...rest}
            onChange={e => {
              onChange?.(e) // onChange passed into the field
              field.onChange(e)
              if (!meta.touched) form.setFieldTouched(name, true)
            }}
          />
        </Form.Item>
      )}
    </FieldComponent>
  )
}
