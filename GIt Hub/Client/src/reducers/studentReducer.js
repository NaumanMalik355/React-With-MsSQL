import {FETCH_STUDENTS, NEW_STUDENT} from '../actions/types';

const initialState = {
    students:[],
    student:{}
}

export default function(state = initialState, action) {
    switch(action.type) {
        
        case FETCH_STUDENTS:
        alert("Length is from reducer ",action.payload.length);
            console.log("reducer is working correctly");
            return {
                ...state,
                students:action.payload
            }
        case NEW_STUDENT:
            return {
                ...state,
                student:action.payload
            }
        default:
            return state;
    }
}
