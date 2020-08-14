import { CREATE_PROJECT } from "./typeActions"


const createProject = (project) => {
    return (dispatch, getState) => {
        dispatch({
            type: CREATE_PROJECT,
            project: project
        })
    }
}

export default createProject