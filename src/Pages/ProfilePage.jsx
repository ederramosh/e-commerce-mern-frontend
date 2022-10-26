import React, { useEffect } from 'react'
import { findById } from '../Services/clientService'

const ProfilePage = () => {

    useEffect(() => {      
        const getProfileInformation = async () => {
            const data = await findById();
            console.log(data);
        }
        getProfileInformation();
    }, []);
    

  return (
    <div>Profile Information</div>
  )
}

export default ProfilePage