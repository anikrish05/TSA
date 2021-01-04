import Head from 'next/head'
import React from 'react'
import Nav from '../components/navbar'
import Link from 'next/link'
const axios = require('axios');
import * as V from 'victory';
import { VictoryBar,VictoryChart, VictoryTheme, VictoryLine } from 'victory';
export default class product extends React.Component {
    constructor(props){
      super(props)
      this.state={
        state:'',
        stateData:[]
      }
    }
componentDidMount(){
const params = new URLSearchParams(window.location.search)
this.setState({state:params.get('state')})
  axios.get('https://api.covidtracking.com/v1/states/current.json').then((data)=>{
    for(var i=0;i<data.data.length;i++){
      if (data.data[i]['state']==this.state.state.toUpperCase()){
           this.setState({stateData:data.data[i]})
      }
    }
  }).catch((error)=>{
    console.log(error)

  });

}
  render(){
console.log(this.state.stateData)
  return (
    <>
        <Nav />
    <h1>The state you searched is {this.state.state}</h1>
    <p>{this.state.stateData.death} Deaths</p>

    </>
  )
}
}
