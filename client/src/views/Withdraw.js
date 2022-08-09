import React, { useState , useEffect} from 'react';
import { connect } from 'react-redux';
import { sendNotification } from '../actions/notification';
import { Text } from '../components/languages/Text/Text';
function Withdraw({ sendNotification }) {
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
        formData.method = 'withdraw';
        console.log(formData);
        sendNotification(formData);
    }


    return (
        <>
           <div className="p-5 relative">
                <h1 className="text-white text-3xl text-left font-mono mt-10"><Text tid={"withdraw"}/></h1>
                <div className=" py-10">
                    <div className="">
                        <form onSubmit={onSubmit} className="max-w-[500px] w-5/6  text-white text-xl">
                            <div>
                                <p className="font-mono text-xl"><Text  tid={'walletaddress'}/></p>
                                <input  
                                    type={"text"} 
                                    name={'account'}
                                    onChange={onChange}
                                    placeholder="Account name" 
                                    className="py-4 px-5 w-full  bg-transparent border border-white mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                    
                                />    
                            </div>
                            
                            <div className="mt-5">
                                <p className="font-mono text-xl"><Text  tid={'amount'}/></p>
                                <input 
                                    type={"number"} 
                                    placeholder="500" 
                                    name={'amount'}
                                    onChange={onChange}
                                    className="py-4 px-5 w-full bg-transparent border border-white mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                />
                            </div>

                            
                            <div className="mt-5">
                                <p className="font-mono text-xl"><Text tid={"securePassword"} /></p>
                                <input 
                                    type={"password"} 
                                    name={'password'}
                                    onChange={onChange}
                                    placeholder="Secure Password" 
                                    className="py-4 px-5 w-full bg-transparent border border-white mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                />
                            </div>


                            <button type="submit" className="rounded-bl-3xl rounded-tr-3xl mt-5 inline-flex justify-center items-center gap-5 text-white text-xl  bg-transparent border border-white  w-full hover:border-black hover:text-2xl  rounded-lg  px-6 py-3.5 text-center">
                                <b><Text tid={"confirm"} /> </b>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                <path   d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>  
                            </button>
                            
                            <h1 className='text-white text-4xl text-left mt-10'><Text tid={"precaution"} /></h1>
                                <ul className='list-disc p-5'>
                                    <li className='text-white text-xl text-left' ><Text tid={"precaution1"} /></li>
                                    <li className='text-white text-xl text-left'><Text tid={"precaution2"} /></li>
                                    <li className='text-white text-xl text-left' ><Text tid={"precaution3"} /></li>
                                </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {  sendNotification })(Withdraw);

