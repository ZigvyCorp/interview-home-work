import React, { useEffect, useState } from 'react';


export default function Detail(props) {


    useEffect(() => {
        var id = props.match.params.id;
        console.log('id', id); 
        // do not have api detail backend
    }, [])
    

    return (
        <div>DETAIL</div>
    );
}
