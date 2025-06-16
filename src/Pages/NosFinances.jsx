import React from 'react'
import CardNosfinances from '../components/CardNosfinances' 

const NosFinances = () => {
  return (
    <div>
      <div className='bg-yellow-100 px-5 py-2 text-small md:text-sm font-bold text-center py-5 overflow-hidden whitespace-nowrap w-full'>
        <h1 className='animate-scroll-left'>Nos financements non remboursable à porter de main de tous et disponible pour vtous en 72h</h1>
        
      </div>
        <CardNosfinances />
    </div>
  )
}

export default NosFinances