function ProductCard({ product }) {
	return (
		<div className="px-3 py-4 border">
			<h1 className="font-semibold">{product.name}</h1>
			<p>{product?.data?.price}</p>
			<p>{product?.data?.color}</p>
			<p>{product?.data?.capacity}</p>
			<p>{product?.data?.generation}</p>
			<p>{product?.data?.year}</p>
			<p>{product?.data?.CPU_model}</p>
			<p>{product?.data?.hard_disk_size}</p>
			<p>{product?.data?.strap_colour}</p>
			<p>{product?.data?.case_size}</p>
			<p>{product?.data?.screen_size}</p>
			<p>{product?.data?.description}</p>
		</div>
	);
}

export default ProductCard;
