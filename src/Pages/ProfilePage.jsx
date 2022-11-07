import React, { useEffect, useState } from 'react'
import { findById, updateClientInfo } from '../Services/clientService'

const ProfilePage = () => {
    const [infoUser, setInfoUser] = useState({});
    
    useEffect(() => {      
        const getProfileInformation = async () => {
            const data = await findById();
            setInfoUser(data)
            console.log(data);
        }

        getProfileInformation();
    }, []);
    
    const OnSubmitted = async (e) => {
      e.preventDefault();
  
      const formData = new FormData(e.target);
      const userInfo = Object.fromEntries(formData);
      const data = await updateClientInfo(userInfo);
      console.log(data);
    };

    const handleChange = (e) => {
      setInfoUser( {
          [e.target.name]: e.target.value
        })
    }

  return (
    <>
      <form onSubmit={OnSubmitted}>
        <div className="row my-3">
          <div className="col">
            <label htmlFor="firstname" className="form-label">
              Firstname
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              value={infoUser.firstname}
              onChange={handleChange}
              placeholder="Write your firstname"
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <label htmlFor="lastname" className="form-label">
              Lastname
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={infoUser.lastname}
              onChange={handleChange}
              placeholder="Write your lastname"
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={infoUser.address}
              onChange={handleChange}
              placeholder="Write your address"
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={infoUser.phone}
              onChange={handleChange}
              placeholder="Write your phone"
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={infoUser.email}
              onChange={handleChange}
              placeholder="email@example.com"
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <button type="submit" className="btn btn-primary mb-3">
              Actualizar Datos
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default ProfilePage