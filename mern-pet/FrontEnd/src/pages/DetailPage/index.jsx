import { Col, Row } from "antd";
import React from "react";
import ButtonComponent from '../../components/ButtonComponent'

const DetailPage = () => {
    const arr = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5','tag6','tag7','tag8','tag9']
    return (
        <div style={{ backgroundColor: '#efefef', padding: '0 120px'}}>
            <div style={{ paddingTop: '1px', alignItems: 'center'}}>
                <h1 style={{ textAlign: 'center'}}>Post title</h1>
                <Row>
                    <Col span={18}>
                        <div>Author Adam</div>
                        <div>create at: 57648</div>
                    </Col>
                    <Col span={6} style={{ display: 'flex', gap: 2, flexWrap: 'wrap'}}>
                        {arr.map((item) => {
                            return (
                                <ButtonComponent size="small" textButton={item}/>
                            )
                        })}
                    </Col>
                </Row>
                <p>hfieuhfishdfiushdf</p>
            </div>
        </div>
    )
}

export default DetailPage