import { useEffect, useState } from "react";

function App() {

  type Product ={ 
    id: number,
    title: string,
    thumbnail : string

  }
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const limite = 10;

  const totalPages = Math.ceil(products.length / limite);

  const firstPage = page * limite;
  const lastPage = firstPage + limite;

  async function getProducts() {
    const responde = await fetch("https://dummyjson.com/products?limit=0");
    const data = await responde.json();

    console.log(data.products);

    setProducts(data.products);
  }

  const changePage = (i : number) => {
    setPage(i);
    console.log(page);
  };

  const alterPage = (i: number) => {
    setPage( (p) => {
      p = page + i;
      if (p >= 0 && p < totalPages - 1) {
        return p
      }
      return page
    })
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <h1 className=" flex justify-center text-4xl text-gray-500 p-10 bg-gray-100 mb-10">
        Produtos
      </h1>

      <nav className="mb-10">
        <ul className="flex gap-2 place-content-center">
          <li
            onClick={() => alterPage(-1)}
            className="bg-gray-200 px-2 rounded-md hover:bg-gray-500 hover:text-white"
          >
            {"<"}
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`bg-gray-200 px-2 rounded-md hover:bg-gray-500 hover:text-white ${
                index == page ? " bg-gray-500 text-white" : ""
              }`}
            >
              <button onClick={() => changePage(index)}>{index + 1}</button>
            </li>
          ))}
          <li
            onClick={() => alterPage(1)}
            className="bg-gray-200 px-2 rounded-md hover:bg-gray-500 hover:text-white"
          >
            {">"}
          </li>
        </ul>
      </nav>
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-10 gap-6">
        {products ? (
          products.slice(firstPage, lastPage).map((item) => (
            <div key={item.id} className="rounded-md gap-8 p-5 bg-gray-100">
              <h2>{item.title}</h2>
              {/* <p>{item.description}</p> */}
              <img src={item.thumbnail} alt="" loading="lazy" />
            </div>
          ))
        ) : (
          <p>carregando...</p>
        )}
      </div>
    </>
  );
}

export default App;
