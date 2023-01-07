import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import engagementHelper from "./EngagementHelper";
import  channels from '../channels'
import messageCountList from '../messageCountList'

const EngagementMessagesOverTime = ()=>{
  const options = engagementHelper.engagementMessageOverTimeChartOptions(messageCountList, channels);
  console.log(options);

	// return <HighchartsReact highcharts={Highcharts} options={options} />
    return(
        <h1>Hii</h1>
    )
}

export default EngagementMessagesOverTime