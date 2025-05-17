import React from "react";
import "./Cart.css";
import CharBar from "./CartBar";
const Cart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum=Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <CharBar
          key={dataPoints.lable}
          value={dataPoints.value}
          maxValue={totalMaximum}
          label={dataPoints.lable}
        />
      ))}
    </div>
  );
};
export default Cart;
