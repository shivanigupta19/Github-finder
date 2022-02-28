import {useContext, useEffect} from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
    const {users , loading ,fetchUsers} = useContext(GithubContext)
    useEffect(() => {
        fetchUsers()
    }, [])
    
    return <>
        {loading ? (
            <Spinner/>
        ) : (
                <div className=' grid grid-cols-1 gap-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 exp w-fit' 
            style={{height : "450px", overflowY : 'scroll'}}>
                {users.map((user) => (
                        <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )}
    </>
}

export default UserResults
