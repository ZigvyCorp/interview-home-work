import React from "react";
import CardComponent from "../../components/CardComponent";
import { Pagination } from "antd";

const HomePage = () => {
    const onChange = () => {}
    return (
        <div style={{ backgroundColor: '#efefef', padding: '0 120px'}}>
            <div style={{ paddingTop: '20px', alignItems: 'center'}}>
                <CardComponent/>
            </div>
            <div style={{ paddingTop: '20px', alignItems: 'center'}}>
                <CardComponent/>
            </div>
            <div style={{ paddingTop: '20px', alignItems: 'center'}}>
                <CardComponent/>
            </div>

            <Pagination 
                defaultCurrent={1} 
                total={100} 
                onChange={onChange} 
                style={{ textAlign: 'center', marginTop: 10}}
            />
        </div>
    )
}

export default HomePage