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
    <img style= {{"float": "Left", 'width': '30%'}} src = {"about_us_img_1.png"} />
    <p>This is where details about who we are goes/ Ill do it later</p>
    <img style ={{"float": "right", 'marginTop': '19%','width': '30%' , 'marginRight' : '3%'}} src = {"about_us_img_2.png"} />
    <p>This is about our mission statement/which again I will do later</p>
    <img style = {{"float": "left",'marginTop': '25%', 'width': '32%',"marginRight" : "35%"}} src = {"about_us_img_3.png"} />
    <p>This is where we will do our project, I'll try and make a responsive button that takes them to product page</p>
    

    {/*Prassana stop code here*/}


{/*inside style u can add css or add inline css by for ex: <h1 style={{'color':'red'}}>hi</h1>*/}
    <style jsx>{`
      `}</style>
    </>
    
  )
}
}
