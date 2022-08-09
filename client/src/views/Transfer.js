import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Text } from "../components/languages/Text/Text";
import { sendNotification } from '../actions/notification';
function Transfer({ sendNotification}) {

    const [formData, setFormData] = useState({
        account: '',
        amount: '',
        password: '',
        method : ''
    });

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => { 
        e.preventDefault();
        formData.method = 'transfer';
        // console.log(formData);
        sendNotification(formData);
    }

    return (
        <>
           <div className="p-5 relative">
                <h1 className="text-white text-3xl text-left font-mono mt-10"><Text tid={"platformTransfer"} /></h1>
                <p className='text-white text-xl text-left'><Text tid={"des"} /></p>
                <div className=" py-10">
                    <div className="">
                        <form onSubmit={onSubmit} className="max-w-[500px] w-5/6  text-white text-xl">
                            <div>
                                <p className="font-mono text-xl"><Text tid={"platformAccount"} /></p>
                                <input 
                                    type={"text"} 
                                    name="account"
                                    placeholder="Account name"
                                    onChange={onChange}
                                    className="py-4 px-5 w-full  border border-white bg-transparent mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                    // defaultValue={email}
                                    
                                />    
                            </div>
                            
                            <div className="mt-5">
                                <p className="font-mono text-xl"><Text tid={"transferAmount"} /></p>
                                <input 
                                    type={"number"} 
                                    name="amount"
                                    placeholder="500" 
                                    onChange={onChange}
                                    className="py-4 px-5 w-full bg-transparent border border-white mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                    // defaultValue={password}
                                />
                            </div>

                            
                            <div className="mt-5">
                                <p className="font-mono text-xl"><Text tid={"securePassword"} /></p>
                                <input 
                                    type={"password"} 
                                    name="password"
                                    placeholder="Secure Password" 
                                    onChange={onChange}
                                    className="py-4 px-5 w-full bg-transparent border border-white mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                    // defaultValue={password}
                                />
                            </div>
                            <button type="submit" className="rounded-bl-3xl rounded-tr-3xl mt-5 inline-flex justify-center items-center gap-5 text-white text-xl  bg-transparent border border-white  w-full hover:border-black hover:text-2xl  rounded-lg  px-6 py-3.5 text-center">
                                <b><Text tid={"confirm"} /></b>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>  
                            </button>

                            {/* <div className="mt-5 flex items-center justify-between">
                                <hr className="w-2/5"/>
                                <p className="font-bold">OR</p>
                                <hr className="w-2/5"/>
                            </div>

                            <button className="w-full bg-white rounded flex h-10 justify-center items-center gap-2 mt-5 text-[#8C8C8C] p-2">
                                <img src="/img/google.png" alt="" className="h-8"  />
                                Login in with Google
                            </button>

                            <button className="w-full bg-[#FFC5DD] rounded flex h-10 justify-center items-center text-black gap-2 mt-5 p-2">
                                <img src="/img/talk.png" alt="" className="h-8"  />
                                Login in with Katao Talk
                            </button> */}

                            {/* <p className="text-white text-center mt-5">Don't have a account? <span className="text-[#F4BC1D]"><Link to="/signup"><strong className="font-mono text-2xl">Sign Up</strong></Link></span></p> */}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
const mapStateToProps = (state) => ({
    user: state.user,
    auth : state.auth
});

export default connect(mapStateToProps, {  sendNotification })(Transfer);
