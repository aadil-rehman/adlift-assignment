import BarChartByColors from "./BarChartByColors";
import PieChartByCapacity from "./PieChartByCapacity";

function Charts({ colors, capacities }) {
	const colorCounts = colors.reduce((acc, color) => {
		acc[color] = (acc[color] || 0) + 1;
		return acc;
	}, {});

	const chartData = Object.keys(colorCounts).map((color) => ({
		color,
		value: colorCounts[color],
	}));

	const capacityCounts = capacities.reduce((acc, capacity) => {
		acc[capacity] = (acc[capacity] || 0) + 1;
		return acc;
	}, {});

	// Prepare the data for Recharts
	const pieChartData = Object.keys(capacityCounts).map((capacity) => ({
		name: capacity,
		value: capacityCounts[capacity],
	}));

	return (
		<div className="flex flex-col">
			<BarChartByColors data={chartData} />
			<PieChartByCapacity data={pieChartData} />
		</div>
	);
}

export default Charts;
