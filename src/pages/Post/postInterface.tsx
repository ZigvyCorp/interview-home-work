export interface EditDto {
  id: number | null
  isEdit: boolean
}
export const initEditDto: EditDto = {
  id: null,
  isEdit: false,
}

export interface initialValuesDto {
  title: string
  body: string
  email: string
  id: number | undefined
}
export const initialValues: initialValuesDto = {
  title: "",
  body: "",
  email: "",
  id: undefined,
}
