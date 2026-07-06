import React, { use } from 'react';

const categoriesPromise = fetch('categories.json').then(res=>res.json())

const Category = () => {
    const categories = use(categoriesPromise)
    console.log(categories);
    
    return (
        <div>
            <h2 className='font-bold'>All Category {categories.length} </h2>
        </div>
    );
};

export default Category;