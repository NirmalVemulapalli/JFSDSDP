import React from 'react'
import Hello from './Hello'
import Greet from './Greet'
import Datafetch from './DataFetch';
const Home = () => {

  const products = [
    { name: 'Mobile Phone', price: 10 },
    { name: 'Soundbar', price: 15 },
    { name: 'Adapter', price: 20 },
  ];
  const todoItems = [
    { title: 'Complete React project', completed: false },
    { title: 'Read a book', completed: true },
    { title: 'Complete WorkBook', completed: true },
    
    // Add more todo items as needed
  ];
 
  return (
    
    <div >
      <center>
        {/* <Datafetch/> */}
    {/* <Hello name='Nirmal' id='20'/> */}
    {/* <Greet name='V' id='30'/> */}
    {/* <Hello products={products}/> */}
    {/* <ProductList/> */}
    {/* <h1>My Todo App</h1>
      // <TodoList todos={todoItems} /> 
    <ProductList products={products} /> */}
    <Hello/>
    {/* <Message/>
    <Counter/> */}
    </center>
    </div>
  )
}

export default Home