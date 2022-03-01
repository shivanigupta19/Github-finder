import {useEffect , useContext} from 'react'
import {useParams} from 'react-router-dom'
import GithubContext from '../../context/github/GithubContext'
import {FaCodepen , FaStore , FaUserFriends , FaUsers} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Spinner from '../layout/Spinner'
import {getUser, getUserRepos} from '../../context/github/GithubActions'
import Repos from '../Repos/Repos'


function User() {
    const {repos, user , loading , dispatch} = useContext(GithubContext)
    const params = useParams()
    useEffect(() => {
        dispatch({type : 'SET_LOADING'})
        const getUserData = async () => {
         const userData = await getUser(params.login)
         dispatch({type : 'GET_USER' , payload : userData})
         const userRepoData = await getUserRepos(params.login)
         dispatch({type : 'GET_REPOS' , payload : userRepoData})
        }
        getUserData()
    }, [dispatch , params.login])

    const {
        name,
        type,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        twitter_username,
        following,
        public_repos,
        public_gists,
        hireable
      } = user;


    if(loading) {
        return <Spinner/>
    }
    
    return (
        <>
          <div className='w-fit mx-auto lg:w-10/12 exp'  style={{height : "450px", overflowY : 'scroll'}}>
              <div className='mb-0'>
                  <Link to='/' className='btn btn-ghost'>
                      Back To Search
                  </Link>

              </div>
              <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-4 md:gap-8'>
                  <div className='custom-card-image mb-6 md:mb-0'>
                      <div className='rounded-lg shadow-xl card image-full'>
                          <figure>
                              <img src={avatar_url} alt=""></img>
                          </figure>
                          <div className='card-body justify-end mt-64'>
                              <h2 className='card-title mb-0'>
                                  {name}
                              </h2>
                              <p>
                                  {login}
                              </p>

                          </div>

                      </div>

                  </div>
                  <div className='col-span-2'>
                      <div className='mb-6'>
                          <h1 className='text-3xl card-title'>
                            {name}
                            <div className='ml-2 mr-1 badge badge-success'>
                                {type}

                            </div>
                            {hireable && (
                                <div className='mx-1 badge badge-info'> 
                                    Hireable
                                </div>
                            )}
                          </h1>
                          <p>{bio}</p>
                          <div className='mt-4 card-actions'>
                              <a href={html_url} target='_blank' rel='noreferrer'>Visit Github Profile</a>
                          </div>

                      </div>
                      <div className='w-full rounded-ld shadow-md bg-base-100 stats'>
                      {location && (
                              <div className='stat'>
                                 <div className='stats-title text-md'>
                                    Location
                                 </div>
                                 <div className='text-lg stat-value'>
                                    {location}
                                 </div>
                              </div>
                          )}
                          {blog && (
                              <div className='stat'>
                                 <div className='stats-title text-md'>
                                    Website
                                 </div>
                                 <div className='text-lg stat-value'>
                                     <a href={`${blog}`} target='_blank' rel='noreferrer'>{blog}</a>
                                 </div>
                              </div>
                          )}
                          {twitter_username && (
                              <div className='stat'>
                                 <div className='stats-title text-md'>
                                    Twitter
                                 </div>
                                 <div className='text-lg stat-value'>
                                     <a href={`https://twitter.com/${twitter_username}`} 
                                     target='_blank' rel='noreferrer'>{twitter_username}</a>
                                 </div>
                              </div>
                          )}

                      </div>

                  </div>

              </div>
              <div className='w-full h-28 py-5 mb-6 rounded-lg shadow-md bg-base-100 stats px-3'>
                  <div className='stats'>
                      <div className='stat-figure text-secondary'>
                          <FaUsers className='text-3xl md:text-5xl'/>
                      </div>
                      <div className='stat-title pr-5'>
                          Followers

                      </div>
                      <div className='stat-title pr-5 text-3xl md:text-4xl'>
                          {followers}

                      </div>

                  </div>
                  <div className='stats'>
                      <div className='stat-figure text-secondary'>
                          <FaUserFriends className='text-3xl md:text-5xl'/>
                      </div>
                      <div className='stat-title pr-5'>
                          Following

                      </div>
                      <div className='stat-title pr-5 text-3xl md:text-4xl'>
                          {following}

                      </div>

                  </div>
                  <div className='stats'>
                      <div className='stat-figure text-secondary'>
                          <FaCodepen className='text-3xl md:text-5xl'/>
                      </div>
                      <div className='stat-title pr-5'>
                          Public repos

                      </div>
                      <div className='stat-title pr-5 text-3xl md:text-4xl'>
                          {public_repos}

                      </div>

                  </div>
                  <div className='stats'>
                      <div className='stat-figure text-secondary'>
                          <FaStore className='text-3xl md:text-5xl'/>
                      </div>
                      <div className='stat-title pr-5'>
                          Public gists

                      </div>
                      <div className='stat-title pr-5 text-3xl md:text-4xl'>
                          {public_gists}

                      </div>

                  </div>
                  <Repos repos={repos} />

              </div>

          </div>
        </>
    )
}

export default User
