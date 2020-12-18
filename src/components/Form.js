import React from 'react'
import { useState } from 'react-dom'

export default function Form() {
  return (
    <>
      <h1>It's Pizza Time!!
        <span role='img' aria-label='pizza and drooling face emoji'>🍕🤤</span>
      </h1>

      <form>

        <label>Delivery Address&nbsp;
          <input
            name='delivery'
            type='text'
          />
        </label>

        <label>Size&nbsp;
          <select name='size'>
            <option>--------</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Family</option>
          </select>
        </label>

        <label>Pepperoni
          <input
            name='pepperoni'
            type='checkbox'
          />
        </label>

        <label>Pineapple
          <input
            name='pineapple'
            type='checkbox'
          />
        </label>

        <label>Chicken
          <input
            name='chicken'
            type='checkbox'
          />
        </label>

        <label>Bacon
          <input
            name='bacon'
            type='checkbox'
          />
        </label>


        <label>Special Instructions&nbsp;
          <input
            name='instructions'
            type='text'
          />
        </label>

      </form>
    </>
  )
}