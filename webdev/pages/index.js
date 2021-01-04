import Head from 'next/head'
import React from 'react'
import Nav from '../components/navbar'
const axios = require('axios');
import * as V from 'victory';
import { VictoryBar,VictoryChart, VictoryTheme, VictoryLine } from 'victory';

export default class Home extends React.Component {
    constructor(props){
      super(props)
      this.state={
        'fullUsData':{},
        'data':[],
        'deathData':[],
        'hospitalized':[]
      }
    }

     componentWillMount(){
        var graph=[]
        var death=[]
        var allHospitalized=[]
  axios.get('https://api.covidtracking.com/v1/us/daily.json').then((data)=>{
     var len = data.data.length
     for (var i=len-1;i>=1;i=i-30){
       var date = data.data[i]['date'].toString()
      graph.push({'x':date[4]+date[5],'y':data.data[i]['positive']})
      death.push({'x':date[4]+date[5],'y':data.data[i]['death']})
      console.log('hello')
      console.log(data.data[i]['hospitalized'])
      allHospitalized.push({'x':date[4]+date[5],'y':data.data[i]['hospitalizedCumulative']})
    }
    this.setState({fullUsData:data.data,data:graph, deathData:death, hospitalized:allHospitalized})
  })
}

  render(){
  return (
    <>
        <Nav />
        <body>
    <div id="page-container">
   <div id="content-wrap">
   </div>

 
      <img style={{"float":"left",'width':'60%','marginLeft':'2%'}} src={"image1.png"} />
      <div>
      <h3 style={{'textDecoration':'underline'}}>Header</h3>
      <p>Here is some text to put heyo madhav how u doing and wasssgoooood prassy how r u doing. I should be doing notes. Ok bye</p>
      </div>


      <div style={{'height':'500px'}}>
      <VictoryChart theme={VictoryTheme.material}>
  <VictoryLine
    style={{
      data: { stroke: "#c43a31" },
      parent: { border: "1px solid #ccc"},
    }}
    data={this.state.data}

  />
    <VictoryLine
    style={{
      data: { stroke: "blue" },
      parent: { border: "1px solid #ccc"},
    }}
    data={this.state.deathData}

  />
     <VictoryLine
    style={{
      data: { stroke: "orange" },
      parent: { border: "1px solid #ccc"},
    }}
    data={this.state.hospitalized}

  />
</VictoryChart>
</div>
<div>
<p>Covid stats in the past year starting from January 2020</p>
</div>
<div style={{'marginTop':'-15%','marginLeft':'5%'}}>
<h1 style={{'textDecoration':'underline'}}>key</h1>
<h4 style={{'color':"#c43a31"}}>Positive Cases</h4>
<h4 style={{'color':"blue"}}>Number of death</h4>
<h4 style={{'color':"orange"}}>Number of hospitalized</h4>

</div>






 </div>
</body>
 <footer style={{'backgroundColor':'#C1C8E4'}}>
 <h1>Footer</h1>
</footer>
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
