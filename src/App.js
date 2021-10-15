import React, { useState } from 'react';
import './App.scss';
import Cart from './Components/Cart/Cart';
import Intro from './Components/Layout/Intro';
import Data from './Components/Forms/DataForms';
import Navbar from './Components/Layout/Navbar';
import dataList from './data/dbs.js'
function App() {

  const { prodcts } = dataList;
  const [showModal, setShowModal] = useState(false);
  const [hasItem, sethasItem] = useState([]);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);


  const handleAddToCart = (product) => {
    const productList = hasItem.find(item => item.id === product.id);

    if (productList) {
      sethasItem(
        hasItem.map(data => (
          data.id === product.id ? { ...productList, quantity: productList.quantity + 1 } : data
        ))
      )
    } else {
      sethasItem([...hasItem, { ...product, quantity: 1 }])
    }
  }
  const handleRemoveToCart = (product) => {
    const productList = hasItem.find(item => item.id === product.id);

    if (productList.quantity === 1) {
      sethasItem(hasItem.filter(item => item.id != product.id))
    } else {
      sethasItem(
        hasItem.map(data => (
          data.id === product.id ? { ...productList, quantity: productList.quantity - 1 } : data
        ))
      )
    }
  }
  return (
    <>
      {showModal && <Cart onRemove={closeModal} hasItem={hasItem} onAdd={handleAddToCart} onDelete={handleRemoveToCart} />}
      <Navbar onOpen={openModal} hasItem={hasItem}/>
      <main>
        <Intro />
        <Data onAdd={handleAddToCart} dataItems={prodcts} />
      </main>
    </>
  );
}

export default App;
