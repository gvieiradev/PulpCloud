import '../styles/index.css'

function Register(){
    return(
        <section className='sectionRegister'>
            <div className='register'>
                <div className='col-1'>
                    <h2>Sign In</h2>
                    <span>Register and enjoy the service</span>

                    <form id='form' className='flex flex-col'>
                        <input type="text" placeholder='email'/>
                        <input type="text" placeholder='username'/>
                        <input type="text" placeholder='password'/>
                        <input type="text" placeholder='confirm password'/>
                        <input type="text" placeholder='mobile number'/>

                        <button className='btn'>Sign In</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register