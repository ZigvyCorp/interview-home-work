import { useState, useEffect } from 'react'

export default (initValues, handleChange) => {
  const [values, setValues] = useState(initValues)

  useEffect(() => {
    setValues(initValues)
  }, [initValues])

  return Object.keys(values).reduce(
    (acc, k) => ({
      ...acc,
      [k]: { value: values[k], onChange: handleChange },
    }),
    {},
  )
}
