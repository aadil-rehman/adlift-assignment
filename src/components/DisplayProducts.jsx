import ProductCard from "./ProductCard";

function DisplayProducts({ products }) {
	return (
		<div className="flex flex-col gap-3 mt-2">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}

export default DisplayProducts;
