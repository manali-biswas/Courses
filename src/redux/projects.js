//projects reducer function
import * as ActionTypes from './ActionTypes';
import { PROJECTS } from "../shared/projects";

export const Projects = (state = PROJECTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROJECT:
            var project = action.payload;
            project.id = state.length;
            return state.concat(project); // adding to memory
        default:
            return state;
    }
}