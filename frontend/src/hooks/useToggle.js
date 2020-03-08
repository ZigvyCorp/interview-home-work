import { useState, useCallback } from 'react'

export default (initialVisible = false) => {
  const [visible, setVisible] = useState(initialVisible)

  const handleClick = useCallback(() => {
    setVisible(v => !v)
  }, [setVisible])

  return { value: visible, onClick: handleClick }
}
