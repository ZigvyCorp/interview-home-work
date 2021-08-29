import React, { memo } from 'react';
import styles from './tagcustom.module.scss';
import { Tag } from 'antd';


const TagCustom = memo(({ value }) => {

  const listColor = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple',
  ]

  return (
    <>
      {value &&
        <Tag color={listColor[Math.floor(Math.random() * listColor.length)]}>{value}</Tag>
      }
    </>
  )
})

export default TagCustom