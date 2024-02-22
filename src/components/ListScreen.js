import React from 'react';
import { useSelector } from 'react-redux';
import TeamMember from './TeamMember';
import { Link } from 'react-router-dom';
import plusCircleOutline from '../assets/plus_circle_outline.svg';

const ListScreen = () => {
    const teamMembers = useSelector(state => state.teamMembers);

    return (
        <div className='flex justify-center mt-20'>
            <div className='bg-gray-400 w-2/6 p-4'>
            <div className=' flex justify-center'>
                <div className='bg-white w-full py-10 pr-16 pl-10'>
                    <div className='flex justify-between'>
                        <p className='text-2xl font-semibold'>Team Members</p>
                        <span><Link to={`/add`}><img src={plusCircleOutline} className="w-6" alt="Arrow" /></Link></span>
                    </div>
                    <h2 className='mb-2'>{`You have ${teamMembers.length} members in the team`}</h2>
                    {teamMembers.map((member, index) => (
                        <TeamMember key={member.id} teamMembers={teamMembers} member={member} index={index} />
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
};

export default ListScreen;
