import Head from 'next/head'
import React from 'react'
import Nav from '../components/navbar'
export default class product extends React.Component {
    constructor(props){
      super(props)
      this.state={}
    }
  render(){
  return (
    <>
        <Nav />
    <h1>Product</h1>

    </>
  )
}
}
