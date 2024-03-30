import React from 'react'
import { Link } from 'react-router-dom'

function TrendingCard({ img, title, link }) {
  return (
    <Link
      to={link}
      className='relative h-64 shadow-2xl shadow-blue-950 rounded-xl overflow-hidden hover:scale-105 my-3 '
    >
      <img src={img} className='w-full h-full object-cover' alt={title} />
      <h1
        className='font-bold absolute bottom-0 p-2 text-xl text-black left-0 right-0 bg-white text-center tracking-wider'
        style={{ fontFamily: 'protest' }}
      >
        {title}
      </h1>
    </Link>
  )
}

export default TrendingCard
