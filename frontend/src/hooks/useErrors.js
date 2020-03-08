import { useState, useEffect } from 'react'

export default (initErrors, initTouched) => {
  const [values, setValues] = useState({ errors: initErrors, touched: initTouched })

  useEffect(() => {
    setValues({ errors: initErrors, touched: initTouched })
  }, [initErrors, initTouched])

  return Object.keys(values.errors).reduce((acc, k) => {
    const has = values.errors[k] && values.touched[k]

    return {
      ...acc,
      [k]: {
        hasFeedback: has,
        validateStatus: has ? 'error' : 'success',
        help: has ? values.errors[k] : null,
      },
    }
  }, {})
}
