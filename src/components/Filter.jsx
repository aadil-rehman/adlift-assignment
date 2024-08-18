import { useSearchParams } from "react-router-dom";

function Filter({ filterBy, filterData = [], selectedValue, onSelect }) {
	const [searchParams, setSearchParams] = useSearchParams();

	function handleSelect(e) {
		const value = e.target.value;
		searchParams.set(filterBy, value);
		setSearchParams(searchParams);
		onSelect(value);
	}

	return (
		<div className="px-1.5 py-1 border">
			<select
				value={selectedValue}
				className="outline-none text-sm"
				onChange={handleSelect}
			>
				<option value="" disabled className="text-sm">
					{`Filter by ${filterBy}`}
				</option>
				{filterData.map((item, index) => (
					<option value={item} key={index} className="text-sm">
						{item}
					</option>
				))}
			</select>
		</div>
	);
}

export default Filter;
