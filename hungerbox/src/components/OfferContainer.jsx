import React from 'react'
import OfferCards from './OfferCards'
import { offers } from '../utils/constants'

const OfferContainer = () => {
  return (
    <div className="mb-3 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Offers for You</h5>
      <div className='grid grid-cols-4 gap-4'>
        <OfferCards offers={offers} />
      </div>
      
    </div>
  )
}

export default OfferContainer