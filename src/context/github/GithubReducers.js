const githubReducer = (state , action) => {
    switch(action.type){
        case 'GET_USERS' : return {
            ...state,
            users : action.payload,
            loading : false
        }
        case 'SET_LOADING' : return {
            ...state,
            loading : true
        }
        case 'GET_USER' : return {
            ...state,
            loading : false,
            user : action.payload,
        }
        case 'CLEAR_USERS' : return {
            ...state,
            user : []
        }
        default : return state
    }
}

export default githubReducer