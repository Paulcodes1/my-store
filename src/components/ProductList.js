import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

import firstItem from '../assets/images/firstItem.svg';
import secondItem from '../assets/images/secondItem.svg';
import thirdItem from '../assets/images/thirdItem.svg';
import fourthItem from '../assets/images/fourthItem.svg';
import fifthItem from '../assets/images/fifthItem.svg';
import sixthItem from '../assets/images/sixthItem.svg';
import seventhItem from '../assets/images/seventhItem.svg';
import eighthItem from '../assets/images/eighthItem.svg';
import ninthItem from '../assets/images/ninthItem.svg';
import tenthItem from '../assets/images/tenthItem.svg';

import female1 from '../assets/images/Female1.svg';
import female2 from '../assets/images/Female2.svg';
import female3 from '../assets/images/Female3.svg';
import female4 from '../assets/images/Female4.svg';
import female5 from '../assets/images/Female5.svg';
import male1 from '../assets/images/Male1.svg';
import male2 from '../assets/images/Male2.svg';
import male3 from '../assets/images/Male3.svg';
import male4 from '../assets/images/Male4.svg';
import male5 from '../assets/images/Male5.svg';
import kids1 from '../assets/images/Kid1.svg';
import kids2 from '../assets/images/Kid2.svg';
import kids3 from '../assets/images/Kid3.svg';
import kids4 from '../assets/images/Kid4.svg';
import kids5 from '../assets/images/Kid5.svg';

const newArrivals = [
  { id: 1, image: firstItem, title: 'Winter Coat', price: 50.00, rating: 5, description: 'Winter coat for women with insulating materials like down, fleece, and wool for warmth. Adjustable cuffs and hem for a customizable fit.' },
  { id: 2, image: secondItem, title: 'Acrylic Sweater', price: 30.00, rating: 4, description: 'Acrylic sweater made from acrylic fibers, synthetic materials. Known for its warmth, softness, and durability.' },
  { id: 3, image: thirdItem, title: 'Zip-Up Cardigan', price: 40.00, rating: 5, description: 'Zip-Up Cardigan with a stand-up collar and a zip. Versatile, easy to wear, adjustable, comfortable, and sporty.' },
  { id: 4, image: fourthItem, title: 'V-Neck Cardigan', price: 20.00, rating: 3, description: 'V-Neck cardigan suitable for formal or casual occasions. Versatile and easy to pair with dresses, shirts, or sweaters.' },
  { id: 5, image: fifthItem, title: 'Kids Cardigan', price: 10.00, rating: 4, description: 'Kids cardigan suitable for formal or casual occasions. Versatile and easy to pair with dresses, shirts, or sweaters.' },
  { id: 6, image: sixthItem, title: 'Quilted Jacket', price: 70.00, rating: 5, description: 'Quilted Jacket is made from multiple layers of fabric stitched together to create a thick, padded, and warm material.' },
  { id: 7, image: seventhItem, title: 'Acrylic Sweater', price: 30.00, rating: 5, description: 'Acrylic sweater made from acrylic fibers, synthetic materials. Known for its warmth, softness, and durability.' },
  { id: 8, image: eighthItem, title: 'Acrylic Sweater', price: 30.00, rating: 4, description: 'Acrylic sweater made from acrylic fibers, synthetic materials. Known for its warmth, softness, and durability.' },
  { id: 9, image: ninthItem, title: 'Heavy Knit Cardigan', price: 80.00, rating: 5, description: 'Heavy knit cardigan made from thick, robust yarns. It provides extra warmth and comfort.' },
  { id: 10, image: tenthItem, title: 'Kids Cardigan', price: 10.00, rating: 4, description: 'Kids cardigan suitable for formal or casual occasions. Versatile and easy to pair with dresses, shirts, or sweaters.' },
];

export const categories = {
  female: [
    { id: 11, image: female1, title: 'Two-tone Cardigan', price: 50.00, rating: 5, description: 'Female two-tone Cardigan' },
    { id: 12, image: female2, title: 'Pocket Fleece Jacket', price: 30.00, rating: 4, description: 'Female pocket fleece jacket' },
    { id: 13, image: female3, title: 'Chunky Knit Cardigan', price: 40.00, rating: 5, description: 'Female chunky knit cardigan' },
    { id: 14, image: female4, title: 'Popcorn Sweater', price: 20.00, rating: 3, description: 'Female popcorn sweater' },
    { id: 15, image: female5, title: 'Mohair Cardigan', price: 10.00, rating: 4, description: 'Female mohair Cardigan' },
  ],
  male: [
    { id: 16, image: male1, title: 'Cable Knit Cardigan', price: 50.00, rating: 5, description: 'Male cable knit Cardigan' },
    { id: 17, image: male2, title: 'Campania Cardigan', price: 30.00, rating: 4, description: 'Male Campania Cardigan' },
    { id: 18, image: male3, title: 'Leopard Knit Cardigan', price: 40.00, rating: 5, description: 'Male Leopard Knit Cardigan' },
    { id: 19, image: male4, title: 'Cardigan Sweater', price: 20.00, rating: 3, description: 'Male Cardigan Sweater' },
    { id: 20, image: male5, title: 'Striped Button', price: 10.00, rating: 4, description: 'Male Striped Button' },
  ],
  kids: [
    { id: 21, image: kids1, title: 'Cable Knit Cardigan', price: 50.00, rating: 5, description: 'Kids cable knit Cardigan' },
    { id: 22, image: kids2, title: 'Fuzzy Heart Cardigan', price: 30.00, rating: 4, description: 'Kids Fuzzy heart Cardigan' },
    { id: 23, image: kids3, title: 'Raglan Sleeve Cardigan', price: 40.00, rating: 5, description: 'Kids Raglan sleeve Cardigan' },
    { id: 24, image: kids4, title: 'Bubble Sleeve Cardigan', price: 20.00, rating: 3, description: 'Kids Bubble sleeve Cardigan' },
    { id: 25, image: kids5, title: 'Beige Crochet', price: 10.00, rating: 4, description: 'Kids Beige Crochet' },
  ],
};

const ProductList = () => (
  <div className="container">
    <section className="my-5 text-center">
      <h2 className="my-4">New Arrivals</h2>
      <p className="mb-4">Get trendy with our latest arrivals</p>
      <button className="btn btn-primary mb-4">Shop now</button>
      <div className="row">
        {newArrivals.map(product => (
            <div key={product.id} className="col-custom mb-4">
                <ProductCard
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    description={product.description}
                 />
            </div>
        ))}    
      </div>
    </section>

    <section className="my-5">
      <h2 className="text-center my-4">Categories</h2>
      <p className="text-center mb-4">We have different categories of wears to suit everyone's needs.</p>

      <div className="mb-5">
        <h3 className="text-left">Female Category</h3>
        <div className="row">
          {categories.female.map(product => (
            <div key={product.id} className="col-custom mb-4">
              <ProductCard
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
                description={product.description}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <h3 className="text-left">Male Category</h3>
        <div className="row">
          {categories.male.map(product => (
            <div key={product.id} className="col-custom mb-4">
              <ProductCard
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
                description={product.description}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <h3 className="text-left">Kids Category</h3>
        <div className="row">
          {categories.kids.map(product => (
            <div key={product.id} className="col-custom mb-4">
              <ProductCard
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
                description={product.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export { newArrivals };
export default ProductList;
