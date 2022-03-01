import { createContext } from "react";
import { useReducer} from "react";
import './GithubReducers'
import githubReducer from "./GithubReducers";
const GithubContext = createContext()

export const GithubProvider = ({children}) => {
    const initialState = {
        users : [],
        user : {},
        repos : [],
        loading : false
    }
    const [state , dispatch] = useReducer(githubReducer , initialState)

    return (
        <GithubContext.Provider value={{
            ...state,
            dispatch,
            }}>
                {children}
            </GithubContext.Provider>
    )

}
export default GithubContext