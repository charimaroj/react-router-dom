import React from 'react'
import {useOutletContext} from 'react-router-dom'

const HostVanPricing = () => {
  const currentVan = useOutletContext();
  return (
    <h3 className='host-van-detail-info'>
{currentVan.price}/day
    </h3>
  )
}

export default HostVanPricing