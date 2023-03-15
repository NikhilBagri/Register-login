import React from 'react'

export default function AddProduct(props) {
  return (
    <div>
       Add Product
       <h2>{props.name ?`Welcome -'${props.name}`:"LOGIN PLEASE"}</h2>
    </div>
  )
}
