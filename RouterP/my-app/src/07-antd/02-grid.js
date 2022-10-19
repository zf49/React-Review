import React from 'react'
import { Row,Col } from 'antd';



export default function App() {



    return (
        <div>
            <Row>
                <Col span={8}>col-8</Col>
                <Col span={8} offset={8}>
                    col-8
                </Col>
            </Row>
        </div>
    )
}
