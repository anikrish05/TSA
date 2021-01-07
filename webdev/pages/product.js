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
<img style={{'width':'60%','height';'400px'}} src={'plot.jpeg'} />
<h3 style={{'textAllign':'center'}}>Information About Our Product</h3>
<p> Our product helps our customers to talk to doctors online via video call and calling platforms, allowing the patients and the doctors to talk to each other without worrying about social distancing. We include a list of Doctors that are available for meeting patients at any point of time. We also have information about Covid-19 about your area, and includes information including the number of cases, hospitilizations, etc.</p>


    {/*Madhav stop code here*/}


    {/*inside style u can add css or add inline css by for ex: <h1 style={{'color':'red'}}>hi</h1>*/}
     <style jsx>{`
      `}</style>

    </>
  )
}
}
