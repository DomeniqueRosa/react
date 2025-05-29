import { useEffect, useState } from "react";
import api from "./services/Api"

function App() {
  type Product = {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
  };
  const [product, setProduct] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const limite = 10; //qtd itens que sera mostrando por pagina
  const totalPage = Math.ceil(product.length / limite);
  const firsPage = page * limite;
  const lastPage = firsPage + 10;

  async function getProducts() {
      //jeito com fetch
      // const res = await fetch("https://dummyjson.com/products?limit=0");
      // const data = await res.json();
      // setProduct(data.products);
      try {
        axiosProducts()
        setLoading(true);
      } catch (error) {
        alert("erro ao carregar os dados: " + error)
      }
      
    }

  async function axiosProducts() {
    //destruturar vai pegar oq voltou como o nome q esta entre {}
      const {data} = await api().get('products?limit=0')
      // console.log(data.products)
      setProduct(data.products)
      
  }

  const goToPage = (i: number) => {
    setPage(i);
    console.log(page, i);
  };

  const goToNextorPrev = (i: number) => {
    setPage((p) => {
      let newPage = p + i;
      if (newPage >= 0 && newPage < totalPage) {
        return newPage;
      }
      return p;
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <header>
        <h1 className="bg-gray-500 text-white text-3xl p-10 text-center mb-10">
          Produtos
        </h1>
      </header>

      <nav className=" flex justify-center mb-[5%]">
        <button
          onClick={() => goToNextorPrev(-1)}
          className="p-1 w-7 bg-gray-100 m-1 rounded-lg hover:bg-gray-700 hover:text-white"
        >
          {"<"}
        </button>
        {Array.from({ length: totalPage }, (_, index) => (
          <button
            onClick={() => goToPage(index)}
            className={`p-1 w-7 bg-gray-100 m-1 rounded-lg ${
              index == page ? "bg-gray-700 text-white" : ""
            } `}
            key={index}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => goToNextorPrev(1)}
          className="p-1 w-7 bg-gray-100 m-1 rounded-lg hover:bg-gray-700 hover:text-white"
        >
          {">"}
        </button>
      </nav>
      <div className="mx-[15%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center">
        {loading ? (
          product.slice(firsPage, lastPage).map((p) => (
            <div
              key={p.id}
              className="aspect-square w-80 bg-gray-200 rounded-md solid place-items-center"
            >
              <p>{p.title}</p>
              <img src={p.thumbnail} alt={p.title} />
              <div className="flex w-[100%]  justify-center text-blue-900 bg-gray-100">
                <p>PRICE R$ {p.price}</p>

                {/* <button className="bg-green-700 p-2 rounded-md text-white justify-left">
                  Buy
                </button> */}
              </div>
            </div>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </>
  );
}

export default App;
