import Card from "../../assets/Card";
import ActionButton from "../_components/ActionButton";
import ChartCard from "../_components/ChartCard";
import HorizontalScroll from "../_components/HorizontalScoll";

const data = [
  { title: "On Time", data: { completed_iterations: 7, total_iterations: 9 ,"%_iterations_done":77.8} },
  { title: "On Scope", data: { story_points_done: 3200, total_story_points: 4230,"%_stories_done":70.9 } },
  { title: "On Velocity", data: { average_velocity: 428.6, required_velocity: 615.0 } },
];

const Analytics = () => {
  return (
    <>
      <HorizontalScroll className={`gap-2 sticky top-0`}>
        <ActionButton
          text="+ Create Report"
          className="bg-calypso-600 text-calypso-50 hover:shadow-[0px_2px_4px_2px_rgba(0,0,0,0.2)] active:shadow-none hover:bg-opacity-80 transition-all"
        />
        <ActionButton
          text="Share this dashboard"
          className="border-2 border-gray-500 text-calypso-600  hover:bg-gray-200 active:bg-gray-300 transition-all"
        />
        <ActionButton
          text="Select Duration"
          className="border-2 border-gray-500 text-gray-500  hover:bg-gray-200 active:bg-gray-300 transition-all"
        />
        <ActionButton
          text="Compare with Duration"
          className="border-2 border-gray-500 text-gray-500  hover:bg-gray-200 active:bg-gray-300 transition-all"
        />
      </HorizontalScroll>
      <HorizontalScroll className={`gap-4`}>
        <ChartCard
          title="Efficiency"
          tagline="Lorem ipsum"
          changeValue="1.1921"
          change="+0.0015 (+0.13%)"
          value="0.00 USD"
          bgImg="./images/blue-graph.png"
          bgColor="bg-[#79AED4DD]"
          textColor="text-white"
        />
        <ChartCard
          title="Time To Market"
          tagline="Lorem ipsum"
          changeValue="327,176"
          change="-97,914.00 (-23.03%)"
          value="131,040,723,108 JPY"
          bgImg="./images/green-graph.png"
          bgColor="bg-[#055F59CF]"
          textColor="text-white"
        />
        <ChartCard
          title="Tech debt"
          tagline="Lorem ipsum"
          changeValue="1.1763"
          change="+0.0015 (+0.13%)"
          value="0.00 USD"
          bgImg="./images/pink-graph.png"
          bgColor="bg-[#fff]"
          textColor="text-black"
        />
        <ChartCard
          title="Predictability"
          tagline="Lorem ipsum"
          changeValue="0.00313010"
          change="-0.00050430 (-13.88%)"
          value="1,566 BTC"
          bgImg="./images/red-graph.png"
          bgColor="bg-[#DE373ACC]"
          textColor="text-white"
        />
      </HorizontalScroll>
      <div className="flex p-1 gap-3 flex-wrap">
        {data.map((elm, i) => {
          return <Card key={i} title={elm.title} data={elm.data} />;
        })}
      </div>
    </>
  );
};

export default Analytics;
