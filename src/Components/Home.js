import React from 'react';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://i.ibb.co/kBC80DG/home-image.jpg'
        alt='home banner'
      />

      {/* PRODUCTS */}
      <div className='home__row'>
        <Product
          id='123456789'
          title='The Barefoot Investor: The Only Money Guide You Will Ever Need'
          price={19.76}
          rating={5}
          image={'https://i.ibb.co/KwSLJX5/home-row1-barefoot.jpg'}
        />
        <Product
          id='123456799'
          title='LG Gram Laptop - 17" Intel 10th Gen Core i7 1065G7 CPU, 16GB RAM, 1TB M.2 NVMe SSD, 17 Hour Battery, Thunderbolt 3 (2020) '
          price={2241.14}
          rating={5}
          image={'https://i.ibb.co/R4gtT8w/home-row2-LG.jpg'}
        />
      </div>
      <div className='home__row'>
        <Product
          id='123456989'
          title='Instant Pot Duo Nova Electric Pressure Cooker, 3L '
          price={189.0}
          rating={4}
          image={'https://i.ibb.co/L0WvnS5/home-row3-pot.jpg'}
        />
        <Product
          id='123496789'
          title='Apple iPhone 12 Pro Max 256GB - Graphite'
          price={(2, 399.0)}
          rating={5}
          image={'https://i.ibb.co/Lr93YjR/home-row4-iphone.jpg'}
        />
        <Product
          id='123456999'
          title='Fitbit Versa 2 Special Edition Health and Fitness Watch '
          price={243.96}
          rating={3}
          image={'https://i.ibb.co/0JwQHT0/home-row5-fitbit.jpg'}
        />
      </div>
      <div className='home__row'>
        <Product
          id='129956789'
          title='Dell Ultrasharp U3818Dw 37.5" Ultra-Wide Quad HD+ Ips Matt Black Curved Computer Monitor Led Display'
          price={1990.0}
          rating={5}
          image={'https://i.ibb.co/dKkq5Nn/home-row6-Dell.jpg'}
        />
      </div>
    </div>
  );
}

export default Home;
