import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AllProductButton from "./components/AllProductButton";
import Charts from "./components/Charts";
import DisplayProducts from "./components/DisplayProducts";
import Filter from "./components/Filter";

function App() {
	const [productName, setProductName] = useState("");
	const [data, setData] = useState("");
	const [products, setProducts] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [colorValue, setColorValue] = useState("");
	const [capacityValue, setCapacityValue] = useState("");

	useEffect(function () {
		async function getProducts() {
			const res = await axios.get("http://localhost:5000/products");
			setProducts(res.data);
		}

		getProducts();
	}, []);

	const colors = products
		.filter((product) => product?.data?.color)
		.map((product) => product.data.color);

	const capacities = products
		.filter((product) => product?.data?.capacity)
		.map((product) => product.data.capacity);

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			const parsedData = JSON.parse(data);
			await axios.post("http://localhost:5000/product", {
				name: productName,
				data: parsedData, // Send parsed data as an object
			});

			const newProducts = await axios.get("http://localhost:5000/products");
			setProducts(newProducts.data);

			setProductName("");
			setData("");
		} catch (error) {
			console.error("Error adding product:", error);
			alert("Invalid JSON format");
		}
	}

	let filteredProducts = products;

	const colorFilter = searchParams.get("Color");
	const capacityFilter = searchParams.get("Capacity");

	if (colorFilter) {
		filteredProducts = filteredProducts.filter(
			(product) => product?.data?.color === colorFilter
		);
	}

	if (capacityFilter) {
		filteredProducts = filteredProducts.filter(
			(product) => product?.data?.capacity === capacityFilter
		);
	}

	return (
		<div className="max-w-[1000px] mx-auto flex flex-col gap-4 h-screen">
			<h1 className="font-bold text-2xl text-center my-4">
				Product Listing with Charts
			</h1>
			<div className="flex gap-2 pt-4">
				<input
					type="text"
					value={productName}
					onChange={(e) => setProductName(e.target.value)}
					placeholder="Product Name"
					className="px-1.5 py-1 border text-sm"
				/>
				<input
					value={data}
					onChange={(e) => setData(e.target.value)}
					placeholder='Product Data (JSON format e.g. {"color": "red", "price": 120})'
					className="px-1.5 py-1 border text-sm min-w-[400px]"
					rows={6}
				/>
				<button
					className="bg-gray-200 px-1.5 py-1 border border-gray-400 text-sm"
					onClick={handleSubmit}
				>
					Add Product
				</button>
			</div>
			<div className="flex gap-2">
				<Filter
					filterBy="Color"
					filterData={[...new Set(colors)]}
					selectedValue={colorValue}
					onSelect={setColorValue}
				/>
				<Filter
					filterBy="Capacity"
					filterData={[...new Set(capacities)]}
					selectedValue={capacityValue}
					onSelect={setCapacityValue}
				/>
				<AllProductButton
					resetFilters={() => {
						setColorValue("");
						setCapacityValue("");
						searchParams.delete("Color");
						searchParams.delete("Capacity");
						setSearchParams(searchParams);
					}}
				/>
			</div>
			<div className="grid grid-cols-[3fr_2fr] max-h-[700px] gap-4 mt-2">
				<div className="overflow-y-auto p-4 scrollbar-hidden">
					<DisplayProducts products={filteredProducts} />
				</div>
				<Charts className="w-full" colors={colors} capacities={capacities} />
			</div>
		</div>
	);
}

export default App;
