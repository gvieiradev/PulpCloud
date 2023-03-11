import '../styles/index.css'

function Login(){
    return(
        <section className='sectionRegister'>
            <div className='register'>
                <div className='col-1'>
                    <h2>Login</h2>
                    <span>Enjoy the service</span>

                    <form id='form' className='flex flex-col'>
                        <input type="text" placeholder='username'/>
                        <input type="password" placeholder='password'/>

                        <button className='btn'>Login</button>
                        <a className='lostPassword' href="#">Lost your password?</a>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login;