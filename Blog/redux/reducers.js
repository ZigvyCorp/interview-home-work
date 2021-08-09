import axios from "axios";
import { exp } from "react-native/Libraries/Animated/Easing";

const initalState = {
    item:[]
};
const GET_DATA  = "GET_DATA";

export const Getdata = (item) =>({
    type: GET_DATA,
    payload: item
})

export const fetchData = () => async (dispatch) =>{
    const res = await axios.get("http:10.0.3.2:3000/post1");

    dispatch(Getdata(res.data));
}

const reducer = (state = initalState,action) => {
    switch(action.type){
        case "GET_DATA":
            return{
                ...state,
                item: action.payload
            };

        default:
            return state;
    }
        
}
export default reducer