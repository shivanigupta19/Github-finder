import spinner from './assets/spinner.gif'

function Spinner() {
    return (
        <div className='w-100 mt-20'>
            <img src={spinner} alt="Loading..." style={{ width: '200px', margin: 'auto', display: 'block' }} />
        </div>
    )
}

export default Spinner
