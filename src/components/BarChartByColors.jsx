import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	Legend,
} from "recharts";

const BarChartByColors = ({ data }) => {
	return (
		<BarChart
			width={400}
			height={250}
			data={data}
			margin={{ top: 20, right: 20, left: 15, bottom: 5 }}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="color" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="value" fill="#8884d8" />
		</BarChart>
	);
};

export default BarChartByColors;
