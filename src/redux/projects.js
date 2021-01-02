//projects reducer function
import * as ActionTypes from './ActionTypes';

export const Projects = (state = {
    err: null,
    projects:[]
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROJECTS:
            return { ...state, err: null, projects: action.payload };
        
        
        case ActionTypes.PROJECTS_FAILED:
            return { ...state, err: action.payload, projects: [] };
        
        case ActionTypes.ADD_PROJECT:
            var project = action.payload;
            project.id = state.projects.length;
            return { ...state, projects: state.projects.concat(project) }; // adding to memory
        default:
            return state;
    }
}