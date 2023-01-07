import React from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import messageCountList from '../messageCountList';
import channels from '../channels'

function EngagementHelper() {
  let common =[];
  function val(){
    for(let i = 0 ; i< channels.length; i++)
    {
      for(let j = 0 ; j < messageCountList.length ; j++)
      {
        if(channels[i].id === messageCountList[j].channelId )
        {
          common.push(messageCountList[j])
        }
      }

    }
      console.log(common);
      return common
  }

  const config = {
    chart : {
      type : 'line',
    },
    title:{
      text : 'Message Count'
    },
    xAxis:{
      categories : messageCountList.map((item)=>
       item.timeBucket.slice(0,10))
      
    },
    yAxis:{
      title:{
        text: 'Number of Messages'
      },
      labels:{
        categories : messageCountList.map((item)=>{
        {if(item.channelId===channels?.values){
          return item.id}
        }
     // return null
    })

      }

    },
    series:[{
      name : 'general',
      lineWidth: 3,
      color: "#00847D",
      data: [5,1,3]
      
    },
  ]
    }
  
  return (
    <HighchartsReact highcharts={Highcharts} options={config} />

  )
}

export default EngagementHelper