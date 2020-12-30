import { createStore, combineReducers } from "redux";
import { Courses } from "./courses";
import { Projects } from "./projects";

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            courses: Courses,
            courseProjects: Projects
        })
    );

    return store;
}