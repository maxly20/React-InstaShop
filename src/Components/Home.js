import React from 'react';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://i.ibb.co/0hVrR5P/ecommerce-header.jpg'
        alt='home banner'
      />

      {/* PRODUCTS */}
      <div className='home__row'>
        <Product
          id='123411156989'
          title='Segway Ninebot S-Pro Electric Transporter'
          price={1099}
          rating={4}
          image={'https://i.ibb.co/3F7ZydY/seg.jpg'}
        />
        <Product
          id='123496711189'
          title='FujiFilm Instax Mini 11 (Blush Pink)'
          price={499}
          rating={5}
          image={'https://i.ibb.co/F8ySYFb/fuji.jpg'}
        />
        <Product
          id='123456991119'
          title='Acer Nitro 5 AN515-55-544R 15.6 inch Full HD Gaming Laptop'
          price={1499}
          rating={4}
          image={'https://i.ibb.co/pxpRwbH/acer.jpg'}
        />
      </div>
      <div className='home__row'>
        <Product
          id='123456789'
          title='Nintendo Switch Console Neon'
          price={399}
          rating={5}
          image={'https://i.ibb.co/7WyXjpV/nintendo.jpg'}
        />
        <Product
          id='123456799'
          title='LG Gram Laptop - 17" Intel 10th Gen Core i7 1065G7 CPU, 16GB RAM, 1TB M.2 NVMe SSD, 17 Hour Battery, Thunderbolt 3 (2020) '
          price={2241}
          rating={5}
          image={'https://i.ibb.co/R4gtT8w/home-row2-LG.jpg'}
        />
      </div>
      <div className='home__row'>
        <Product
          id='123456989'
          title='Lg UN8100 UHD 75 inch Smart 4k TV with AI THINQ'
          price={1795}
          rating={4}
          image={'https://i.ibb.co/7WyXjpV/nintendo.jpg'}
        />
        <Product
          id='123496789'
          title='Apple iPhone 12 Pro Max 256GB - Graphite'
          price={2399}
          rating={5}
          image={'https://i.ibb.co/Lr93YjR/home-row4-iphone.jpg'}
        />
        <Product
          id='123456999'
          title='Fitbit Versa 2 Special Edition Health and Fitness Watch '
          price={249}
          rating={3}
          image={'https://i.ibb.co/0JwQHT0/home-row5-fitbit.jpg'}
        />
      </div>
      <div className='home__row'>
        <Product
          id='129956789'
          title='Dell Ultrasharp U3818Dw 37.5" Ultra-Wide Quad HD+ Ips Matt Black Curved Computer Monitor Led Display'
          price={1990}
          rating={5}
          image={'https://i.ibb.co/dKkq5Nn/home-row6-Dell.jpg'}
        />
      </div>
      <div className='home__row'>
        <Product
          id='12345634345789'
          title='Sony PlayStation 5'
          price={1150}
          rating={5}
          image={'https://i.ibb.co/5Kz6vX4/ps5.jpg'}
        />
        <Product
          id='1234565466799'
          title='Apple Macbook Air 13-inch I5 512Gb (Silver) [2021]'
          price={1849}
          rating={5}
          image={'https://i.ibb.co/mbp9Xc9/macbook.jpg'}
        />
      </div>
      <div className='home__row'>
        <Product
          id='123488756989'
          title='Apple Watch Series 6 44mm + Cellular'
          price={799}
          rating={4}
          image={'https://i.ibb.co/nzny8Fs/watch.jpg'}
        />
        <Product
          id='1234988786789'
          title='DJI Mini 2 4K Drone Fly More Combo'
          price={949}
          rating={5}
          image={'https://i.ibb.co/2hSVQLj/drone.jpg'}
        />
        <Product
          id='123456666999'
          title='PlayStation 5 Pulse 3D Wireless Headset'
          price={549}
          rating={4}
          image={'https://i.ibb.co/qgtnVYD/ps5headphone.jpg'}
        />
      </div>
      <div className='home__row'>
        <Product
          id='123488756989'
          title='GoPro HERO9 Black 5K HyperSmooth 3.0 Action Cam'
          price={629}
          rating={4}
          image={'https://i.ibb.co/KFKy116/gopro.jpg'}
        />
        <Product
          id='1234988786789'
          title='Dell XPS 15 15.6" Ultra HD Laptop (512GB)'
          price={4099}
          rating={4}
          image={'https://i.ibb.co/BP2FDSD/dell.jpg'}
        />
        <Product
          id='123456666999'
          title='Himo Electric Bike Z20'
          price={549}
          rating={4}
          image={'https://i.ibb.co/W6cQwnJ/bike.jpg'}
        />
      </div>
    </div>
  );
}

export default Home;
