import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/pizza'>Pizza</Link>
      <h1>Lambda<span id='logo'>Eats</span></h1>
    </>
  )
}