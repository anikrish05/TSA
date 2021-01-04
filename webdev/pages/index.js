import Head from 'next/head'
import React from 'react'
import Nav from '../components/navbar'
const axios = require('axios');
export default class Home extends React.Component {
    constructor(props){
      super(props)
      this.state={
        'fullUsData':{},
        'stateData':{},
        'statePick':''
      }
      this.getStateData=this.getStateData.bind(this)
    }

     componentWillMount(){
  axios.get('https://api.covidtracking.com/v1/us/daily.json').then((data)=>{
    this.setState({fullUsData:data.data})
  })
}

getStateData(){
  console.log(this.state.statePick)
  axios.get('https://api.covidtracking.com/v1/states/ca/current.json').then((data)=>{
    this.setState({stateData:data.data})
  })
}
  render(){
  return (
    <>
        <Nav />
    <div id="page-container">
   <div id="content-wrap">
   </div>

 
      <img style={{"float":"left",'width':'70%','paddingLeft':'8%'}} src={"image1.png"} />
      <div class="content-heading">
      <h3 style={{'textDecoration':'underline'}}>Header</h3>
      <p>Here is some text to put heyo madhav how u doing and wasssgoooood prassy how r u doing. I should be doing notes. Ok bye</p>
      </div>
       <input type='text'  />
      <button onClick={this.getStateData()}>Submit</button>



   <footer id="footer">
   <div style={{'backgroundColor':'#C1C8E4'}}>
<h1>Footer</h1>
   </div>
   </footer>


 </div>

 <style JSX>{`
  #page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 2.5rem; 
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}


 `}</style>

    </>
  )
}
}
