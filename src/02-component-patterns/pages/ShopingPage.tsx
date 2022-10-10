import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';

import { products } from '../data/products';
import '../styles/custom-styles.css';

export const ShopingPage = () => {

    const { shopingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>Shoping Store</h1>
            <hr />

            <div style={{ 
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                
                {
                    products.map( product => (
                        <ProductCard 
                            key={ product.id }
                            product={ product } 
                            className="bg-dark text-white"
                            value={ shopingCart[product.id]?.count || 0 }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>

            <div className="shoping-cart">

                {
                    Object.entries( shopingCart ).map( ([ key, product ]) => (
                        <ProductCard 
                            key={ key }
                            product={ product } 
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            value={ product.count }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductButtons 
                                className="custom-buttons" 
                                style={{ 
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>                        
                    ))
                }

            </div>
        </div>
    )
}
