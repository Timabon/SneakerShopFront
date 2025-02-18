import React from 'react'

function HeaderComponent() {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <a className="navbar-brand" href="http://localhost:4200/">SneakerShop</a>
                
                <div className='ms-auto'>
  <a href="/products" className='btn btn-primary px-4 py-2 fw-bold'>
    Products
  </a>
</div>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent