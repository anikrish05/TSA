import Head from 'next/head'
import React from 'react'
import Nav from '../components/navbar'
export default class Home extends React.Component {
    constructor(props){
      super(props)
      this.state={}
    }
  render(){
  return (
    <>
    <div style={{'backgroundColor':'#002447'}}>
    <img src={'../public/info.svg'} />
    <p style={{'color':'#79C5E7'}} class="text-left">COVID- 19- What You need to know to stay safe</p>

    </div>
        <Nav />
    <h1>TSA</h1>

    </>
  )
}
}
