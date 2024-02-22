import React from 'react';
import { Link } from 'react-router-dom';
import userCircleImage from '../assets/user_circle.svg';

const TeamMember = ({ member }) => {
    
    return (
        <Link to={`/edit/${member.id}`}>
            <div className='border-t border-b border-gray-400 py-4 flex'>
                <div className='flex justify-center items-center px-4'>
                    <img src={userCircleImage} className="w-10 h-10" alt="user" />
                </div>
                <div>
                    <h3 className='text-black font-semibold'>{member.firstname} {member.lastname} {member.role === 'admin' && '(Admin)'}</h3>
                    <p className='text-gray-400 text-sm font-medium'>{member.phone}</p>
                    <p className='text-gray-400 text-sm font-medium'>{member.email}</p>
                </div>
            </div></Link>
    );
};

export default TeamMember;
