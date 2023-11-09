import React, { memo } from 'react'
import { Rate } from 'antd';

const RateStar = ({ value, disabled, setValue, style }) => {

    return (
        <Rate style={style} onChange={(star) => setValue(star)} disabled={disabled} value={value} />

    )
}

export default memo(RateStar)