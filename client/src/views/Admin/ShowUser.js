import React , { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUser } from '../../actions/admin/user';
import { connect } from 'react-redux';
import { Text } from '../../components/languages/Text/Text';
import PropTypes from 'prop-types';
const ShowUser = ({  }) => { 
    const { _id } = useParams('_id')
    useEffect(() => {
        // console.log(" User_ID " , _id);
    })
    return (
        <>
            {/* {console.log(user._id)} */}
            <div className='font-mono' > 
            <div className="grid grid-cols-1 gap-4 text-center m-auto n-container sm:grid-col-2 md:grid-cols-4 md:margin-auto relative">
                {/* First Part */}

                <Link to={`/showUser/${_id}/balance`}  className="max-w-sm  rounded-lg border border-gray-200 shadow-md hover:shadow-2xl  hover:scale-125 hover:bg-[rgba(255,152,9,0.6)]">  
                        <div className="p-5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white"><Text tid={'balance'}/> & <Text tid={'profit'}/></h5>
                            </a>
                            <p className="mb-3 font-normal text-white"><Text tid={'balanceandprofit'}/></p>
                          
                        </div>
                    </Link>

                {/* Second Part */}

                    <Link to={`/showUser/${_id}/record`}   className="max-w-sm  rounded-lg border border-gray-200 shadow-md hover:shadow-2xl  hover:scale-125 hover:bg-[rgba(255,152,9,0.6)]">  
                        <div className="p-5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white"><Text tid={'fundrecord'}/></h5>
                            </a>
                            <p className="mb-3 font-normal text-white"><Text tid={'fundrecord'}/></p>
                          
                        </div>
                    </Link>
                {/* Third Part */}
                    <Link to={`/showUser/${_id}/team`}  className="max-w-sm  rounded-lg border border-gray-200 shadow-md hover:shadow-2xl  hover:scale-125 hover:bg-[rgba(255,152,9,0.6)]">  
                        <div className="p-5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                            </svg>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white"><Text tid={'team'}/></h5>
                            </a>
                            <p className="mb-3 font-normal text-white"><Text tid={'teaminfo'}/></p>

                        </div>
                    </Link>
                {/* Fourth Part */}
                    <Link to={`/showUser/${_id}/wallet`}  className="max-w-sm  rounded-lg border border-gray-200 shadow-md hover:shadow-2xl  hover:scale-125 hover:bg-[rgba(255,152,9,0.6)]">  
                        <div className="p-5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
                            </svg>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white"><Text tid={'wallet'}/></h5>
                            </a>
                            <p className="mb-3 font-normal text-white"><Text tid={'wallet'}/></p>
                          
                        </div>
                    </Link>
                </div>
            </div>


            {/* Modal Part */}
           {/* {  <div    class="grid place-items-center overflow-y-auto overflow-x-hidden m-auto fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div class="relative  rounded-lg shadow bg-orange-500">
                        <Link to={'/'}  type="button" class="absolute top-3 right-2.5  bg-transparent  hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center ">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </Link>
                        <div class="py-6 px-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-white text-center">Balance & Profit</h3>
                            <form class="space-y-6" onSubmit={onSubmit_1}>
                                <div>
                                    <label for="email" class="block mb-2 text-xl font-medium text-white">Balance</label>
                                    <input type="text" name="balance" onChange={onChange_1}  class=" border bg-transparent text-white border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-xl font-medium text-white ">Profit</label>
                                    <input type="text" name="profit"  onChange={onChange_1} placeholder="" class=" bg-transparent  border text-white border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                                </div>
                 
                                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Confirm</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> } */}
            {/* Modal End */}

               {/* Modal Part */}
           {/* {  <div    class="grid place-items-center overflow-y-auto overflow-x-hidden m-auto fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div class="relative  rounded-lg shadow bg-orange-500">
                        <button  type="button" class="absolute top-3 right-2.5  bg-transparent  hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center ">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="py-6 px-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-white text-center">Fund Record</h3>
                            <table className='overflow-x-auto w-full text-center text-xl'>
                                <thead className='uppercase border-b'>
                                    <th>Time</th>
                                    <th>Amount</th>
                                    <th>Type</th>
                                </thead>
                                <tbody >
                                    <tr className='border-b'>
                                        <td>2022/08/02</td>
                                        <td>500$</td>
                                        <td>Recharge</td>
                                    </tr>

                                    <tr className='border-b'>
                                        <td>2022/08/03</td>
                                        <td>50.0$</td>
                                        <td>withdraw</td>
                                    </tr>
                                    <tr className='border-b'>
                                        <td>2022/08/04</td>
                                        <td>20$</td>
                                        <td>Recharge</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> } */}
            {/* Modal End */}

               {/* Modal Part */}
           {/* { show_3 &&  <div    class="grid place-items-center overflow-y-auto overflow-x-hidden m-auto fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div class="relative  rounded-lg shadow bg-orange-500">
                        <button onClick={()=>{setShow_3(false)}} type="button" class="absolute top-3 right-2.5  bg-transparent  hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center ">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="py-6 px-6 lg:px-8">
                            <h1 class="mb-4 text-xl font-medium text-white text-center">Team</h1>
                            <div className='relative n-container' >
                                
                                {accounts.map((_account, index) => (
                                   
                                        <div key={ index }>
                                        <div  href="#" class="flex flex-col items-center  rounded-lg m-auto w-full border hover:shadow-2xl md:flex-row mt-5">
                                            <img class="object-cover w-36 h-auto rounded-t-lg md:h-auto md:w-36 md:rounded-none md:rounded-l-lg p-5" src="/img/avatar/teammember.png" alt="" />   
                                            <a class="flex flex-col justify-between p-4 leading-normal">
                                                <div className='inline-flex items-baseline '>
                                                    <label className='text-black text-2xl'>Account Name:</label>
                                                    <p class="mb-2   tracking-tight text-white text-xl">{ _account.accountName}</p>
                                                </div>
                                                <div className='inline-flex items-baseline'> 
                                                    <label className='text-black text-2xl'>User Name:</label>
                                                    <p class="mb-3 font-normal text-white text-xl">{auth.user.username}</p>
                                                </div>
                                                <div className='inline-flex items-baseline'> 
                                                    <label className='text-black text-2xl'>Joined Time:</label>
                                                    <p class="mb-3 font-normal text-white text-xl">{_account.date}</p>
                                                </div>
                                                <div class="py-4 px-6 w-full">
                                                    <button  class="text-white p-2 bg-blue-500 hover:bg-blue-700 font-mono rounded rounded-tl-lg rounded-br-lg text-2xl">Delete</button>
                                                </div>  
                                            </a> 
                                            </div>
                                        </div>
                                        ))}
                                  
                            </div>
                        </div>
                    </div>
                </div>
            </div> } */}
            {/* Modal End */}

               {/* Modal Part */}
           {/* { show_4 &&  <div    class="grid place-items-center overflow-y-auto overflow-x-hidden m-auto fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div class="relative  rounded-lg shadow bg-orange-500">
                        <button onClick={()=>{setShow_4(false)}} type="button" class="absolute top-3 right-2.5  bg-transparent  hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center ">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="py-6 px-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-white text-center">Balance & Profit</h3>
                            <form class="space-y-6" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-xl font-medium text-white">Balance</label>
                                    <input type="text" name="email" id="email" class=" border bg-transparent text-white border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-xl font-medium text-white ">Profit</label>
                                    <input type="password" name="password" id="password" placeholder="" class=" bg-transparent  border text-white border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                                </div>
                 
                                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Confirm</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> } */}
            {/* Modal End */}
        </>
    )
}


  const mapStateToProps = (state) => ({
      user: state.user,
      auth: state.auth,
      account : state.team
  });
  
  export default connect(mapStateToProps, {   getUser})(ShowUser);