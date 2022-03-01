import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
function UserItem({user : {login , avatar_url}}) {
    return (
        <div className='card shadow-md compact side bg-base-100' style={{height : "200px"}}>
            <div className='flex-row items-center space-x-1 card-body'>
                <div >
                    <div className='avatar'>
                        <div className='w-28 rounded-full shadow'>
                            <img src={avatar_url} alt="Profile"></img>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title text-gray-200 overflow-clip">{login}</h2>
                    <Link className="text-yellow-600" 
                    to={`/user/${login}`}>Visit Profile</Link>
                </div>
            </div>
        </div>
    )
}

UserItem.prototype={
    user : PropTypes.object.isRequired
}

export default UserItem
