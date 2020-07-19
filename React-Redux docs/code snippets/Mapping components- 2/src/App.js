import React from 'react';
import Product from './Product'
import productData from './vschoolProducts'

function App(){
    const productCompo= productData.map(function(pro){
        return(
            <Product key={pro.id}
            product={pro} />
        )
    })
    return(
        <div>
        {productCompo}
        </div>
    )
}

export default App;