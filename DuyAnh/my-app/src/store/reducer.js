import { HANDLE_PRODUCTDETAIL } from "./actionType";

const initialState = {
    productBlogDetail:{
        "id": 3,
      "owner": 2,
      "title": "Silk of Dreamer",
      "body": "Unfeeling so rapturous discovery he exquisite. Reasonably so middletons or impression by terminated. Old pleasure required removing elegance him had. Down she bore sing saw calm high. Of an or game gate west face shed. ﻿no great but music too old found arose. Seen you eyes son show. Far two unaffected one alteration apartments celebrated but middletons interested. Described deficient applauded consisted my me do. Passed edward two talent effect seemed engage six. On ye great do child sorry lived. Proceed cottage far letters ashamed get clothes day. Stairs regret at if matter to. On as needed almost at basket remain. By improved sensible servants children striking in surprise. Or kind rest bred with am shed then. In raptures building an bringing be. Elderly is detract tedious assured private so to visited. Do travelling companions contrasted it. Mistress strongly remember up to. Ham him compass you proceed calling detract. Better of always missed we person mr. September smallness northward situation few her certainty something. Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain me be. So landlord by we unlocked sensible it. Fat cannot use denied excuse son law. Wisdom happen suffer common the appear ham beauty her had. Or belonging zealously existence as by resources",
      "created_at": 1576506719083,
      "tags": ["breathtaking", "landscape", "vietnam"]
    }
}


export const blogReducer = (state =  initialState,action)=> {
    console.log("action: ", action);
    switch (action.type) {
        case HANDLE_PRODUCTDETAIL:{
            let newBlogDetail = {...action.payload}
            return {...state, productBlogDetail:newBlogDetail}
        }
            
            
    
        default:
            
            return state
    }
}

