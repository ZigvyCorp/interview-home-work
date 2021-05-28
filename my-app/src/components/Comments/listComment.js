import React from 'react'
import {List} from 'antd'
import ItemComment from './itemComment'

export default function listComment(props){
  
  if(props.visiable){
    return(
      <List
        style={{padding: "0rem .6rem"}}
          dataSource={props.data}
          renderItem={item => (
            <List.Item key={item.id} style={{padding: '1rem'}}>
              <ItemComment data={item}/>
            </List.Item>
          )}
        >
        </List>
    )
  } else {
    return null;
  }
  
}