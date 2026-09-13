import Product from "./Product.jsx";
function ProductTab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
    };
    return(
        <div style={styles}>
             <Product title="Logtech Mx Master" idx={0}/>
             <Product title="Apple pencil(2nd Gen)" idx={1}/>
             <Product title="Zebronics Zeb Transformer" idx={2}/>
             <Product title="Petronics traod 23" idx={3}/>
        </div>
    );
}
export default ProductTab;