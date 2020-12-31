import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import { Courses } from "./courses";
import { Projects } from "./projects";
import { InitialFeedback } from "./forms";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            courses: Courses,
            courseProjects: Projects,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}