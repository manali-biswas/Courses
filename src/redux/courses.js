//courses reducer
import * as ActionTypes from './ActionTypes';

export const Courses = (state = {
    isLoading: true,
    err: null,
    courses: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COURSES:
            return { ...state, isLoading: false, err: null, courses: action.payload };

        case ActionTypes.COURSES_LOADING:
            return { ...state, isLoading: true, err: null, courses: [] };
        
        case ActionTypes.COURSES_FAILED:
            return { ...state, isLoading: false, err: action.payload, courses: [] };
        
        default:
            return state;
    }
}