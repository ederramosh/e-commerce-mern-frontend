import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { getNewArrivalById } from '../Services/newArrivalService';

const ItemDetailPage = () => {

    const { id } = useParams();
    const [item, setItem] = useState({});
    
    useEffect(() => {
      const getItemById = async () => {
      const result = await getNewArrivalById(id);
      setItem(result)
      }
        getItemById();
    }, [id]);

  return (
    <>
      <section>
        <div className='row'>
          <div className='col'>
              <h2 className='text-center mb-4'>{ item.name }</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 mx-5'>
          <img src={item.itemImage} alt={item.name} />
          </div>
          <div className='col-4 mx-5'>
              <p className='fs-4 mb-4'><span className='fw-semibold'>Descripción:</span> <br/>{item.features}</p>
              <h3 className=' mb-4'>Price: ${ item.price }</h3>
              <NavLink className="btn btn-primary btn-lg my-3">
                Adjuntar carrito
              </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default ItemDetailPage;