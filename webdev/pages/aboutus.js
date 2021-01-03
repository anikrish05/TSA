import Head from 'next/head'
import React from 'react'
import Nav from '../components/navbar'
export default class about extends React.Component {
    constructor(props){
      super(props)
      this.state={}
    }
  render(){
  return (
    <>
        <Nav />
        {/*Prassana start code here*/}
    <h1>About Us</h1>
    {/*Prassana stop code here*/}


{/*inside style u can add css or add inline css by for ex: <h1 style={{'color':'red'}}>hi</h1>*/}
    <style jsx>{`
      `}</style>
    </>
    
  )
}
}
