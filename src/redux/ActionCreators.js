import * as ActionTypes from './ActionTypes';

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