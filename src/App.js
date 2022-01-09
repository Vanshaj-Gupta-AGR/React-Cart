import React  from "react";

import Cart  from "./Cart";

import Navbar  from "./Navbar";

import db from "./Firebase";

import {collection ,getDocs,addDoc} from 'firebase/firestore'








// Add a new document with a generated id.




class App extends React.Component {
  constructor(){
    super();
    this.state={
        products: [],
        loading: true
        
    }
}

componentDidMount(){
  
   const colRef=collection(db,'products')
  
   getDocs(colRef)
   .then((snapshot)=>{
     
     snapshot.docs.map((doc)=>{
     
     })
    
     const products=snapshot.docs.map((doc)=>{
       const data=doc.data();
       data["id"]=doc.id;
       return data
     })
  

   this.setState({
     products,
     loading: false
   })
  })

 
}

    handleIncreaseQuantity =(product)=>{
      const {products}=this.state;
      const index=products.indexOf(product);
      products[index].qty+=1;

      this.setState({
          products: products
      })
    }

    handleDecreaseQuantity =async (product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);

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

    addProduct=async ()=>{
       const docRef=await addDoc(collection(db, "products"), {
       title: "TV",
       price: 8888,
       qty: 1,
       img: "https://cdn-icons-png.flaticon.com/512/3159/3159461.png"
      })

     
     

    }
  

  render(){
    const {products,loading}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{padding: 20,fontSize: 20}}>add a product</button> */}
        <Cart  products={products} onIncreaseQuantity={this.handleIncreaseQuantity} onDecreaseQuantity={this.handleDecreaseQuantity} handleDelete={this.handleDeleteProduct}/>
        {loading && <h1>Loading Products..</h1>}
        <div style={{padding: 10,fontSize: 20,textAlign: "center"}}>
          TOTAL: {this.getCartTtotal()}
        </div>
      </div>
    );
}
}

export default App;
