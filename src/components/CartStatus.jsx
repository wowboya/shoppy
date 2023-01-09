import React, { useState } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useAuthContext } from '../context/AuthContext';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {uid} = useAuthContext();
  // const [total, setTotal] = useState(0);
  const {cartQuery: {data: products}} = useCart();
  const totalNum = products && products.reduce((prev, current) => (prev + current.quantity), 0);
  return <div className='relative'>
    <AiOutlineShoppingCart className='text-4xl' />
    {products && <p className='w-6 h-6 text-center bg-brand text-white font-bold rounded-full absolute -top-1 -right-2'>{totalNum}</p>}
   </div>
}