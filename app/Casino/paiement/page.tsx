'use client'
import React from 'react'
import Image from 'next/image';


const PaymentMethods = () => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-2 md:mb-4'>Sélectionnez une méthode de paiement</h1>
      <h2 className='text-xl font-semibold mb-2'>Méthodes disponibles</h2>
      <div className='flex flex-col md:flex-row items-center justify-center md:space-x-4 h-screen'>
        <div className='mb-4 md:mb-0'>
          <Image src="/mtn.png" width={120} height={100} alt="mtn mobile money" />
          <p className='text-center mt-2'>MTN Mobile Money</p>
        </div>
        <div>
          <Image src="/moov.png" width={120} height={100} alt="flooz" />
          <p className='text-center mt-2'>Flooz</p>
        </div>
      </div>
    </div>
  );
  }
export default PaymentMethods
