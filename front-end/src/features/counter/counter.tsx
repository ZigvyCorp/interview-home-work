import React from "react"

import { useDispatch, useSelector } from "react-redux"

import { increase, decrease,increaseByMount, selectCount } from "./counterSlice"
import { Button, Flex, Input, Space } from "antd"
import store from "../../app/store"
export default function Counter()
{
    const [inCreaseAmount, setIncreaseAmount]=React.useState<number>(2)

    const count=useSelector(selectCount)
    const dispatch=useDispatch()

    console.log(store.getState())



    return (
        <Space>
            <Flex gap="middle" vertical={false}>
                <Button type="primary" onClick={()=>{dispatch(decrease())}}>
                    -
                </Button>
                <h3>{count}</h3>
                <Button type="primary" onClick={()=>{dispatch(increase())}}>
                    +
                </Button>
            </Flex>
            <Input defaultValue={inCreaseAmount} onChange={(e)=>setIncreaseAmount(Number(e.target.value))}/>
            <Button type="primary" onClick={()=>{dispatch(increaseByMount(inCreaseAmount))}}>
                Increase {inCreaseAmount}
            </Button>
        </Space>
    )
}