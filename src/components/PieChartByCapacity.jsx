import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const PieChartByCapacity = ({ data }) => {
	const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]; // Colors for the pie slices

	return (
		<PieChart width={400} height={400}>
			<Pie
				data={data}
				cx={200}
				cy={200}
				labelLine={false}
				outerRadius={130}
				fill="#8884d8"
				dataKey="value"
			>
				{data.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
				))}
			</Pie>
			<Tooltip />
			<Legend />
		</PieChart>
	);
};
export default PieChartByCapacity;
