import React from 'react'
import { useState } from 'react-dom'

export default function Form() {
  return (
    <>
      <h1>It's Pizza Time!!
        <span role='img' aria-label='pizza and drooling face emoji'>🍕🤤</span>
      </h1>

      <form>

        <label><b>Delivery Address</b>&nbsp;
          <input
            name='delivery'
            type='text'
          />
        </label>

      </form>
    </>
  )
}