import * as ActionTypes from './ActionTypes';
import { COURSES } from "../shared/courses";

export const addProject = (courseId, name, description, link, github) => ({
    type: ActionTypes.ADD_PROJECT,
    payload: {
        course_id: courseId,
        name: name,
        description: description,
        link: link,
        github: github
    }
});

export const fetchCourses = () => (dispatch) => {
    dispatch(coursesLoading(true));

    setTimeout(() => { 
        dispatch(addCourses(COURSES));
    }, 2000);
}

export const coursesLoading = () => ({
    type: ActionTypes.COURSES_LOADING
});

export const coursesFailed = (err) => ({
    type: ActionTypes.COURSES_FAILED,
    payload: err
});

export const addCourses = (courses) => ({
    type: ActionTypes.ADD_COURSES,
    payload: courses
})