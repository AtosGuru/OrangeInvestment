import * as React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../components/languages/Text/Text';
const Team = () => { 
    return (
        <div className='font-mono'> 
            <div className="grid grid-cols-1 gap-4 text-center m-auto n-container sm:grid-col-2 md:grid-cols-4 md:margin-auto relative">
                {/* First Part */}

                <Link to={'/myTeam'} className="max-w-sm  rounded-lg border border-gray-200 shadow-md hover:shadow-2xl  hover:scale-125 hover:bg-[rgba(255,152,9,0.6)]">  
                        <div className="p-5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-15 m-auto" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white"><Text tid={'myteam'}/></h5>
                            </a>
                            <p className="mb-3 font-normal text-white"><Text tid={'teammember'}/></p>
                          
                        </div>
                    </Link>

                {/* Second Part */}

                     <Link to={'/addAccount'} className="max-w-sm  rounded-lg border border-gray-200 shadow-md hover:shadow-2xl  hover:scale-125 hover:bg-[rgba(255,152,9,0.6)]">  
                        <div className="p-5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15 m-auto" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                            </svg>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white"><Text tid={'createaccount'}/></h5>
                            </a>
                            <p className="mb-3 font-normal text-white"><Text tid={'createnewaccount'}/></p>
                          
                        </div>
                    </Link>
                {/* Third Part */}
                    <Link to={'/inviteFriend'} className="max-w-sm  rounded-lg border border-gray-200 shadow-md hover:shadow-2xl  hover:scale-125 hover:bg-[rgba(255,152,9,0.6)]">  
                        <div className="p-5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                            </svg>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white"><Text tid={'invitefriend'}/></h5>
                            </a>
                            <p className="mb-3 font-normal text-white"><Text tid={'invitefriends'}/></p>
                          
                        </div>
                    </Link>
                {/* Fourth Part */}
                    <Link to={'#'} className="max-w-sm  rounded-lg border border-gray-200 shadow-md hover:shadow-2xl  hover:scale-125 hover:bg-[rgba(255,152,9,0.6)]">  
                        <div className="p-5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
                            </svg>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white"><Text tid={'teamfunding'}/></h5>
                            </a>
                            <p className="mb-3 font-normal text-white"><Text tid={'historyofteamfunding'}/></p>
                          
                        </div>
                    </Link>
                </div>
            </div>
    )
}

export default Team;