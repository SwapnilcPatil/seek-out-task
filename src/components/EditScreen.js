import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editTeamMember, deleteTeamMember } from '../redux/actions';

import plusCircleOutline from '../assets/off_outline_close.svg';

const EditScreen = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();


    const teamMembers = useSelector(state => state.teamMembers);


    useEffect(() => {

        const member = teamMembers.find(member => member.id === id);


        if (member) {
            setFirstname(member.firstname);
            setLastname(member.lastname);
            setPhone(member.phone);
            setEmail(member.email);
            setRole(member.role);
        }
    }, [id, teamMembers]);

    const handleSave = () => {
        const updatedMember = {
            id,
            firstname,
            lastname,
            phone,
            email,
            role
        };
        dispatch(editTeamMember(updatedMember));
        navigate("/");
    };

    const handleDelete = () => {
        dispatch(deleteTeamMember(id));
        navigate("/");
    };

    return (
        <div className='flex justify-center mt-20'>
            <div className='bg-gray-400 w-2/6 p-4'>
                <div className=' flex w-full justify-center '>
                    <div className='bg-white py-10 pr-16 pl-10'>
                        <div className='flex justify-between'>
                            <p className='text-2xl font-semibold'>Edit Team Member</p>
                            <span><Link to={`/`}><img src={plusCircleOutline} className="w-6" alt="Arrow" /></Link></span>
                        </div>
                        <p className='text-gray-400 text-md mb-8 font-medium'>Edit email,location and role</p>
                        <hr className='mb-8' />
                        <p className='text-xl font-semibold mb-4'>Info</p>
                        <input className="border-2 rounded w-full py-4 px-3 mb-4 text-gassy-grey text-lg bg-sober-black leading-tight focus:outline-none focus:shadow-outline" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                        <input className="border-2 rounded w-full py-4 px-3 mb-4 text-gassy-grey text-lg bg-sober-black leading-tight focus:outline-none focus:shadow-outline" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                        <input className="border-2 rounded w-full py-4 px-3 mb-4 text-gassy-grey text-lg bg-sober-black leading-tight focus:outline-none focus:shadow-outline" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <input className="border-2 rounded w-full py-4 px-3 mb-4 text-gassy-grey text-lg bg-sober-black leading-tight focus:outline-none focus:shadow-outline" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <p className='text-xl font-semibold mb-2'>Role</p>
                        <div className='flex justify-between border-b-2 pb-4'>
                            <label className={`block w-full ${role === 'regular' ? 'text-black font-semibold' : 'text-gray-500'}`}>
                                Regular - Can't delete members
                            </label>
                            <input
                                type="checkbox"
                                checked={role === 'regular'}
                                onChange={() => setRole(role === 'regular' ? '' : 'regular')}
                            />
                        </div>
                        <div className='flex justify-between border-b-2 pb-4 pt-4'>
                            <label className={`block w-full ${role === 'admin' ? 'text-black font-semibold' : 'text-gray-500'}`}>
                                Admin - Can delete members
                            </label>
                            <input
                                type="checkbox"
                                checked={role === 'admin'}
                                onChange={() => setRole(role === 'admin' ? '' : 'admin')}
                            />
                        </div>
                        <div className='flex justify-between mt-8'>
                            <button className='border-2 px-6 py-2 rounded-sm text-red-400 font-semibold' onClick={handleDelete}>Delete</button>
                            <button className='bg-blue-600 px-6 py-2 rounded-sm text-white font-semibold' onClick={handleSave}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditScreen;
