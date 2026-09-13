import "./Product.css";//webpack
import Price from "./Price";
function Product({title,idx}){
    console.log(title,idx);
    let oldPrices =["12,995","11,900","1,599","599"];
    let newPrices=["8999","9,199","899","278"];
    let description=[
        ["8,000 DPI","5 programmable buttons"],
        ["intuitive surface","designed for ipad pro"],
        ["designed for ipad pro","intuitive surface"],
        ["wirless","optical orientation"]
    ];
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product ;