// reducer function

import { COURSES } from "../shared/courses";
import { PROJECTS } from "../shared/projects";

export const initialState = {
    courses: COURSES,
    courseProjects: PROJECTS
};

export const Reducer = (state=initialState, action) => {
    return state;
};