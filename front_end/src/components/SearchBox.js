import React, { useEffect, useState } from "react";
import { Input } from "antd";

export default function SearchBox({ onSearch, defaultKeyword = '', sx, ...props }) {
  const [keyword, setKeyword] = useState(defaultKeyword ?? '')

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) onSearch(keyword)
  }

  useEffect(() => {
    setKeyword(defaultKeyword)
  }, [defaultKeyword])

  return (
    <Input
      size="middle"
      value={keyword}
      onKeyDown={handleKeyDown}
      placeholder="Enter keyword here"
      onChange={(e) => setKeyword(e.target.value)}
      style={{ width: 300, ...sx }}
      {...props}
    />
  )
}
