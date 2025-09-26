import React from 'react'
import defaultProfilePic from "../assets/img/testimonials/testimonials-2.jpg";
import { clearUser, setUser } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { useUploadProfilePictureMutation } from '../app/apiConfig';

const UserProfile = ({ user }) => {
    const [uploadProfilePicture] = useUploadProfilePictureMutation();
    const dispatch = useDispatch();
    const handleLogOut = () => {
    dispatch(clearUser());
    window.location.href = '/login'; // Redirect to login page after logout
  }
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('profilePicture', file);
    try {
      const response = await uploadProfilePicture(formData).unwrap();
      dispatch(setUser(response.user)); // Update user in Redux and sessionStorage
    } catch (error) {
      console.error('Upload failed', error);
    }
  };
  console.log(">>>>>", user);
  return (
    <div className="p-6 mt-6 max-w-lg mx-auto bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-lg font-semibold">User Profile</h2>
        <div className="flex items-center justify-between mb-2">
            <a href="#" className='relative'>
                
                <img className="w-10 h-10 rounded-full" src={user?.profilePicture || defaultProfilePic} alt={user?.name} />
                 <input
            type="file"
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
          />
            </a>
            <div>
                <button type="button" 
                onClick={handleLogOut}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Logout</button>
            </div>
        </div>
        <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <a href="#">{user?.name}</a>
        </p>
        <p className="mb-3 text-sm font-normal">
            <a href="#" className="hover:underline">{user?.email}</a>
        </p>
        <p className="mb-4 text-sm">Open-source contributor. Building <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">flowbite.com</a>.</p>
        
    </div>

  )
}

export default UserProfile