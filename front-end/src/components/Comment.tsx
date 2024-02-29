import React from "react"
import { IComment } from "../type/IComment"
import AvatarLetter from "./Avatar"
import { Row, Col } from "antd"

export default function Comment({comment}:{comment:IComment}){
    return (
        <div >
             <Row style={{marginTop:4}}>
                <Col  span={2}>
                    <AvatarLetter name={comment.email}/>
                </Col>
                <Col   span={22}>
                    <p style={{margin:0, fontWeight:'bold'}}>{comment.email}</p>
                    <p>{comment.body}</p>
                </Col>
            </Row>
        </div>
    )
}