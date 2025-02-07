import React from 'react'

function HeaderComponent() {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <a className="navbar-brand" href="https://sneaker-shop-front-ebon.vercel.app/">SneakerShop</a>
                
                <div className='ms-auto'>
                  <a href="/products" className='btn btn-primary'>Products</a>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent