// reducer function

import { COURSES } from "../shared/courses";
import { PROJECTS } from "../shared/projects";

export const initialState = {
    courses: COURSES,
    courseProjects: PROJECTS,
    selectedCourse: null
};

export const Reducer = (state=initialState, action) => {
    return state;
};