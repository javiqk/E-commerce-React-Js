export default function ModalCart ({products}) {

    return(
        <div className="box-cart">
            {products.length === 0 ? (
                <h2>No hay productos agregados</h2>
            ) : (
        <> {products.map ((product) => {
            return (
                <div className='item-cart-list' key={product.id}>
                    <div className='item-cart-img'>
                        <img  src={`../assets/${product.image}`} />
                    </div>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <p>Cant: {product.quantity}</p>
                </div>
            )
        })}
        </>
            )}
</div>


)
}