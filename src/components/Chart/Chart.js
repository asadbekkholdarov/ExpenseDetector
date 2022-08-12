import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((e) => (
        <ChartBar
          value={e.value}
          maxValue={totalMaximum}
          key={e.id}
          label={e.label}
        />
      ))}
    </div>
  );
};

export default Chart;
