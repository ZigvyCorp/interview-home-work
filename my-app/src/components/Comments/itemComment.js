import React from 'react'


export default function itemComment(props) {
    if(props.data){
        return(
            <div>
                <div>
                    <strong className="username">{props.data.name}</strong> .
                    <span> {props.data.email}</span>
                </div>
                <div>
                    {props.data.body}
                </div>
            </div>
        )
    } else 
        return null;
}