import Link from 'next/link'; // Import Link from Next.js

async function getDetails(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await res.json();
}

export default async function Details({ params }) {
  const product = await getDetails(params.id);

  return (
    <>
      <div className="flex items-center flex-col gap-8 justify-center h-150">
        <h1 className="text-2xl font-bold mb-4">Product Details</h1>
        {product && (
          <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
            <div className="flex items-center justify-center px-4">
              <div className="md:flex-shrink-0">
                <img
                  className="flex w-full items-center md:w-48"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {product.category}
                </div>
                <p className="text-gray-600 text-lg mt-2">{product.title}</p>
                <p className="text-gray-500 text-sm mt-2">{product.description}</p>
                <p className="text-gray-700 font-bold mt-4">${product.price}</p>
              </div>
            </div>
          </div>
        )}
        <Link href="/"><button data-tooltip-target="tooltip-default" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back to Home</button></Link>
      </div>
    </>
  );
}
