import * as ActionTypes from './ActionTypes';
import { baseUrl } from "../shared/baseUrl";
import axios from 'axios';

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

    return axios.get(baseUrl + 'db.json')
        .then(response => dispatch(addCourses(response.data.courses)));
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
});

export const projectsFailed = (err) => ({
    type: ActionTypes.PROJECTS_FAILED,
    payload: err
});

export const addProjects = (projects) => ({
    type: ActionTypes.ADD_PROJECTS,
    payload: projects
});

export const fetchProjects = () => (dispatch) => {
    return axios.get(baseUrl + 'db.json')
        .then(response => dispatch(addProjects(response.data.projects)));
}