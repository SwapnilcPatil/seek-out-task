import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTeamMember } from '../redux/actions';
import { Link, useNavigate } from 'react-router-dom';
import plusCircleOutline from '../assets/off_outline_close.svg';

const AddScreen = () => {
    const dispatch = useDispatch();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState({ regular: false, admin: false });
    const navigate = useNavigate();

    const handleSave = () => {
        const newMember = {
            id: Math.random().toString(),
            firstname,
            lastname,
            phone,
            email,
            role
        };
        dispatch(addTeamMember(newMember));
        setFirstname('');
        setLastname('');
        setPhone('');
        setEmail('');
        setRole('regular');
        navigate("/");
    };

    return (
        <div className='flex justify-center  mt-20'>
            <div className='bg-gray-400 w-2/6 p-4'>
                <div className=' flex justify-center'>
                    <div className='bg-white py-10 pr-16 pl-10'>
                        <div className='flex justify-between'>
                            <p className='text-2xl font-semibold'>Add a team member</p>
                            <span><Link to={`/`}><img src={plusCircleOutline} className="w-6" alt="Arrow" /></Link></span>
                        </div>
                        <p className='text-gray-400 text-md mb-8 font-medium'>Set email,location and role</p>
                        <hr className='mb-8' />
                        <p className='text-xl font-semibold mb-4'>Info</p>
                        <input className="border-2 rounded w-full py-4 px-3 mb-4 text-gassy-grey text-lg bg-sober-black leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="First & Last Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                        <input className="border-2 rounded w-full py-4 px-3 mb-4 text-gassy-grey text-lg bg-sober-black leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="First & Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                        <input className="border-2 rounded w-full py-4 px-3 mb-4 text-gassy-grey text-lg bg-sober-black leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <input className="border-2 rounded w-full py-4 px-3 mb-4 text-gassy-grey text-lg bg-sober-black leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <p className='text-xl font-semibold mb-2'>Role</p>
                        <div className='flex justify-between border-b-2 pb-4'>
                            <label className={`block w-full ${role === 'regular' ? 'text-black font-semibold' : 'text-gray-500'}`}>
                                Regular - Can't delete members
                            </label>
                            <input
                                type="radio"
                                name="role"
                                checked={role === 'regular'}
                                onChange={() => setRole('regular')}
                            />
                        </div>
                        <div className='flex justify-between border-b-2 pb-4 pt-4'>
                            <label className={`block w-full ${role === 'admin' ? 'text-black font-semibold' : 'text-gray-500'}`}>
                                Admin - Can delete members
                            </label>
                            <input
                                type="radio"
                                name="role"
                                checked={role === 'admin'}
                                onChange={() => setRole('admin')}
                            />
                        </div>
                        <div className='flex justify-end mt-8'>
                            <button className='bg-blue-600 px-6 py-2 rounded-sm text-white font-semibold' onClick={handleSave}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddScreen;
