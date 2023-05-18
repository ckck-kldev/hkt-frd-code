import { Component, useState } from "react";
import "./Demo.css";

type Product = {
  name: string;
  price: number;
};

function Demo() {
  let products: Product[] = [
    { name: "Apple", price: 100 },
    { name: "BlackBetty", price: 200 },
    { name: "Windows Phone", price: 50 },
    { name: "Android", price: 80 },
  ];
  return (
    <div>
      <h1>Products</h1>
      {/* {products} */}
      <div>str: {"text"}</div>
      <div>num: {123}</div>
      <div>bool: {true}</div>
      <div>arr num: {[1, 2, 3]}</div>
      <div>arr str: {["1", "2", "3"]}</div>

      {/* {products.map(product => <div className='product-item'>{product}</div>)} */}
      {products.map((product) => (
        <ProductItem product={product} />
      ))}

      {/* <Product/>
        <Product/>
        <Product/>
        <input />
        <Product></Product>
        <Product></Product>
        <Product></Product> */}
    </div>
  );
}

// Class Component
class ProductItem extends Component<{ product: Product }> {
  state = {
    showMore: false,
  };
  toggleShowMore = () => {
    this.setState({ showMore: !this.state.showMore });
  };
  render() {
    const { product } = this.props;
    const { showMore } = this.state;
    return (
      <div className="product-item" onClick={this.toggleShowMore}>
        <div>{product.name}</div>
        {showMore ? <div>${product.price}</div> : <div>Click to see more</div>}
      </div>
    );
  }
}

// Functional Component
function ProductItem2(props: { product: Product }) {
  const { product } = props;
  //   const showMore = true;
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      className="product-item"
      onClick={() => {
        setShowMore(!showMore);
      }}
    >
      <div>{product.name}</div>
      {showMore ? <div>${product.price}</div> : <div>Click to see more</div>}
    </div>
  );
}

function ProductItem1(props: { product: Product }) {
  const { product } = props;
  return (
    <details className="product-item">
      <summary>{product.name}</summary>${product.price}
    </details>
  );
}

export default Demo;
