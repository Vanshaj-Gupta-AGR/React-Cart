import React  from "react";

import Cart  from "./Cart";

import Navbar  from "./Navbar";


class App extends React.Component {
  constructor(){
    super();
    this.state={
        products: [
            {
                price: 999,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
                id: 2
            },
            {
                price: 999,
                title: 'phone',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=819&q=80',
                id: 3
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
                id: 4
            }
        ]
        
    }
}
    handleIncreaseQuantity =(product)=>{
      const {products}=this.state;
      const index=products.indexOf(product);
      products[index].qty+=1;

      this.setState({
          products: products
      })
    }

    handleDecreaseQuantity =(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);

        if(products[index].qty===0)return;
        products[index].qty-=1;

        this.setState({
            products: products
        })
      }

      handleDeleteProduct=(id)=>{
          const {products}=this.state;

          const items=products.filter((item)=>{
              return item.id!==id
          })
      

      this.setState({
          products: items
      })
    }

     getCartCount=()=>{
        const {products}=this.state;

        let count=0;

        products.forEach((element)=>{
          count+=element.qty;
        })

        return count;
    }

    getCartTtotal=()=>{
      const {products}=this.state;

      let ts=0;

      products.forEach((element)=>{
        ts=ts+ element.qty*element.price
      })
      return ts;
    }
  

  render(){
    const {products}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart  products={products} onIncreaseQuantity={this.handleIncreaseQuantity} onDecreaseQuantity={this.handleDecreaseQuantity} handleDelete={this.handleDeleteProduct}/>
        <div style={{padding: 10,fontSize: 20,textAlign: "center"}}>
          TOTAL: {this.getCartTtotal()}
        </div>
      </div>
    );
}
}

export default App;
