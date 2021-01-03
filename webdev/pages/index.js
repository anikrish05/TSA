import Head from 'next/head'
import React from 'react'
import nav from '../components/navbar.js'
export default class Home extends React.Component {
    constructor(props){
      super(props)
      this.state={}
    }
  render(){
  return (
    <div>
        <nav />
    <h1>TSA</h1>

    </div>
  )
}
}
