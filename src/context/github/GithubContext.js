import { createContext } from "react";
import { useReducer} from "react";
import './GithubReducers'
import githubReducer from "./GithubReducers";

const GithubContext = createContext()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initialState = {
        users : [],
        user : {},
        loading : true
    }
    const [state , dispatch] = useReducer(githubReducer , initialState)


    const fetchUsers = async() => {
        setLoading()
        const response = await fetch(`${GITHUB_URL}/users` , {
            headers : {
                Authorization : `token ${GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
        dispatch({
            type : 'GET_USERS',
            payload : data
        })
    }

    const clearUsers = () => {
        dispatch({type : 'CLEAR_USERS'})
    }
    const searchUsers = async(text) => { 
        setLoading()
        
        const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`, {
            headers : {
                Authorization : `token ${GITHUB_TOKEN}`
            }
        })
        const {items} = await response.json()
        console.log("here " + items)
        dispatch({
            type : 'GET_USERS',
            payload : items
        })
    }

    const getUser = async(login) => {
        setLoading()
        console.log("here ++++++++++++++++++++++++++++++" + login)
        const response = await fetch(`${GITHUB_URL}/users/${login}` , {
            headers : {
                Authorization : `token ${GITHUB_TOKEN}`
            }
        })

        if(response.status === 404){
            window.location = '/notfound'
            console.log("User")
        }else {
            const data = await response.json()
            dispatch({
            type : 'GET_USER',
            payload : data
            })
            console.log(data)
        }
        
    }

    const setLoading = () => dispatch({type : 'SET_LOADING'})

    return (
        <GithubContext.Provider value={{
            users : state.users,
            loading : state.loading ,
            user : state.user,
             searchUsers,
             clearUsers,
             getUser,
             fetchUsers
            }}>
                {children}
            </GithubContext.Provider>
    )

}
export default GithubContext