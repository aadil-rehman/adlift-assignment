import { useNavigate } from "react-router-dom";

function AllProductButton({ resetFilters }) {
	const navigate = useNavigate();

	function handleClick() {
		resetFilters(); // Reset the filters
		navigate("/"); // Navigate to the home page
	}

	return (
		<button onClick={handleClick} className="px-1.5 py-1 border text-sm">
			All Products
		</button>
	);
}

export default AllProductButton;
