'use client'

import { useState, useEffect } from 'react';
import Link from "next/link";

async function getData() {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
}

export default function Page() {
    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const products = await getData();
            setData(products);
        };
        fetchData();
    }, []);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredData = selectedCategory
        ? data.filter(product => product.category.toLowerCase().includes(selectedCategory.toLowerCase()))
        : data;

    return (
        <div>
            <header>
                <nav>
                    <select className='select__nav bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={handleCategoryChange}>
                        <option value="">Hammasi</option>
                        <option value="women's clothing">Ayollar kiyimlari</option>
                        <option value="men's clothing">Erkak kiyimlari</option>
                        <option value="jewelery">Taqinchoqlar</option>
                        <option value="electronics">Kompyuter Hotirasi</option>
                    </select>
                    <ul className="nav__ul ax-w-screen-xl flex flex-wrap items-center justify-center gap-8 mx-auto p-2 my-6">
                         <li><a href="#">Home</a></li>
                         <li><a href="#">About</a></li>
                         <li><a href="#">Contact</a></li>
                         <li><img src="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fe8fa4f57a95067e838d7aa5a4f80042137d9f5b6-132x52.svg%3Fw%3D132%26auto%3Dformat&w=640&q=75" alt="" /></li>
                         <li><a href="#">Archive</a></li>
                         <li><a href="#">Pro Version</a></li>
                         <li><a href="#">Download</a></li>
                     </ul>
                    
                </nav>
            </header>



            <main>
                <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', justifyContent: 'center' }}>
                    {filteredData.map(product => (
                        <div className="api__div border border-gray-200 rounded-lg p-4 w-100 flex flex-col items-start justify-center" key={product.id} style={{ textAlign: 'center' }}>
                     <Link  href={`${product.id}`}>
                            <img className="product__image" src={product.image} alt={product.title} style={{ width: '200px', height: '200px', marginBottom: '10px' }} />
                            
                            <h2 className="text-lg font-semibold mt-2 text-left">{product.title.slice(0,30)}...</h2>
                   <p className="text-gray-600">{product.description.slice(0,120)}...</p>
                   <p className="text-gray-800 font-bold mt-2">${product.price}</p>
                      </Link>
                        </div>
                    ))}
                </section>
            </main>
            </div>
       
       
    );
}
