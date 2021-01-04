import * as ActionTypes from './ActionTypes';
import { baseUrl } from "../shared/baseUrl";
import axios from 'axios';

export const addProject = (project) => ({
    type: ActionTypes.ADD_PROJECT,
    payload: project
});

export const postProject = (courseId, name, description, link, github) => (dispatch) => {
    const newProject = {
        course_id: courseId,
        name: name,
        description: description,
        link: link,
        github: github
    }

    return axios.post(baseUrl + 'projects', newProject, {
        headers: {
            'Content-type': 'application/json'
        },
        withCredentials: true
    })
        .then(response => dispatch(addProject(response.data)))
        .catch(err => alert('Your comment could not be posted\nError: ' + err.message));
}

export const fetchCourses = () => (dispatch) => {
    dispatch(coursesLoading(true));

    return axios.get(baseUrl + 'courses')
        .then(response => dispatch(addCourses(response.data)))
        .catch(err => dispatch(coursesFailed(err.message)));
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
    return axios.get(baseUrl + 'projects')
        .then(response => dispatch(addProjects(response.data)))
        .catch(err => dispatch(projectsFailed(err.message)));
}