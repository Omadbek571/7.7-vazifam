import React from 'react'
import star from "../imges/star.svg"
import tel from "../imges/tel.svg"
import hospitel from "../imges/hospitel.svg"
import massage from "../imges/massage.svg"
import footerbg from "../imges/footer-bg.jpg"

function Home() {
    return (
        <div>
            <main className='bg-white h-[746px] text-black font-bold flex flex-col'>
                <div className='flex flex-col mx-auto justify-center gap-8 mt-20'>
                    <h3 className='text-base flex mx-auto'>Contact Us</h3>
                    <div className='text-5xl'>Say <span className='text-blue-500'>Hello!</span> We’re always here to help.</div>
                    <p className='text-sm font-normal flex flex-col items-center justify-center'>Interested in learning more about SmartMoving? Give us a call or send an email and one of our <span> team members will be happy to assist you.</span></p>
                </div>

                <div className='flex gap-5 mt-24 mx-auto'>
                    <div className='flex gap-3 p-5 border-2 rounded-xl'>
                        <img src={tel} alt="" />
                        <div>
                            <h3>CALL US</h3>
                            <h2>+1 (214) 960 4130</h2>
                        </div>
                    </div>
                    <div className='flex gap-3 p-5 border-2 rounded-xl'>
                        <img src={massage} alt="" />
                        <div>
                            <h3>Email Us</h3>
                            <h2>hello@aiinfo.com</h2>
                        </div>
                    </div>
                </div>
                <div className='border-2 rounded-xl p-7 mt-4 max-w-[870px] flex gap-5 mx-auto'>
                    <img src={hospitel} alt="" />
                    <div>
                        <h3>HEADQUARTERS</h3>
                        <h2>12720 Hillcrest Road Suite 980, Dallas, TX 75230</h2>
                    </div>
                </div>



            </main>
            <footer className='bg-cover bg-center text-white bg-black h-[439px] flex flex-col mx-auto justify-center gap-14 items-center'>
                <div className='text-5xl font-semibold' >Sign up for your free 14 day trial now!</div >
                <button className='btn btn-info text-white max-w-[202px]'>Get Started for free</button>
            </footer>
        </div>
    )
}

export default Home