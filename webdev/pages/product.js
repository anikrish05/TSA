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
        {/*Madhav start code here*/}
<img style={{'width':'50%','height':'400px'}} src={'image3.png'} />
<img style={{'width':'30%','height':'400px', 'float':'right'}} src={'image2.png'} />
    {/*Madhav stop code here*/}


    {/*inside style u can add css or add inline css by for ex: <h1 style={{'color':'red'}}>hi</h1>*/}
     <style jsx>{`
      `}</style>

    </>
  )
}
}
