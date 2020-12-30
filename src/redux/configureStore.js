import { createStore, combineReducers, applyMiddleware } from "redux";
import { Courses } from "./courses";
import { Projects } from "./projects";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            courses: Courses,
            courseProjects: Projects
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}