import React from 'react';
import { Text } from '../../components/languages/Text/Text';
const AdminRecord = () => { 
    return (
        <div className='relative m-auto'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15 m-auto p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h1 className='text-center text-white text-2xl'><Text tid={'norecord'}/></h1>
        </div>
    )
}

export default AdminRecord;