import React from 'react';



const Cosmetics = () => {

    const cosmetics = [
        {
          "id": 1,
          "name": "Product A",
          "description": "This is the description for Product A.",
          "price": 19.99,
          "image_url": "https://example.com/images/product_a.jpg",
          "category": "Category 1"
        },
        {
          "id": 2,
          "name": "Product B",
          "description": "This is the description for Product B.",
          "price": 29.99,
          "image_url": "https://example.com/images/product_b.jpg",
          "category": "Category 2"
        },
        {
          "id": 3,
          "name": "Product C",
          "description": "This is the description for Product C.",
          "price": 9.99,
          "image_url": "https://example.com/images/product_c.jpg",
          "category": "Category 1"
        },
        {
          "id": 4,
          "name": "Product D",
          "description": "This is the description for Product D.",
          "price": 49.99,
          "image_url": "https://example.com/images/product_d.jpg",
          "category": "Category 2"
        }
      ]




    return (
        <div>
            <h1>Welcome to my cosmetics strore</h1>
            {
                cosmetics.map(cosmetic => <Cosmetics key={cosmetic.id}></Cosmetics> )
            }

        </div>
    );
};

export default Cosmetics;