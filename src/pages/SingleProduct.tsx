import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";

import Rating from "../components/Rating";
import { CartState } from "../context/Context";
import { cartReducer } from "../context/Reducers";
const SingleProduct = () => {
  let params = useParams();
  let navigate = useNavigate();
  const id = params.productId;
  const { state, dispatch } = CartState();

  return (
    <div className="container mt-32 mx-auto p-4 md:p-0">
      {state?.products
        .filter((prd) => prd.id == id)
        .map((filteredProduct) => (
          <div key={filteredProduct.id}>
            {/* image  */}
            <div className="flex w-full justify-center">
              <img
                className=" w-50 h-40 text-center"
                src={filteredProduct?.image}
                alt="Sunset in the mountains"
              />
            </div>
            {/* <!-- Card wrapper --> */}
            <div className="shadow-lg flex flex-wrap w-full lg:w-9/12 mx-auto">
              {/* <!-- Card image --> */}
              {/* <!-- ./Card image --> */}

              {/* <!-- Card body --> */}
              <div className="bg-white w-full ">
                {/* <!-- Card body - outer wrapper --> */}
                <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                  {/* <!-- Card body - inner wrapper --> */}
                  <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                    {/* <!-- Card title and subtitle --> */}
                    <div className="w-full font-bold lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                      <h3>{filteredProduct.title}</h3>
                      <p className="mb-0 mt-3 font-normal text-blue-500 text-sm italic">
                        Price : ${filteredProduct.price}
                      </p>
                      <Rating
                        rate={Math.floor(filteredProduct.rating?.rate ?? 0)}
                      />

                      <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                    </div>
                    {/* <!-- ./Card title and subtitle --> */}

                    {/* <!-- Card description --> */}
                    <div className="w-full lg:w-3/5 lg:px-3">
                      <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                        {filteredProduct.description}
                      </p>
                    </div>
                    {/* <!-- ./Card description --> */}

                    {/* <!-- Call to action button --> */}
                    <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                      {state.cart.some((p) => p.id === filteredProduct.id) ? (
                        <Button hcolor="hover:bg-red-500">
                          Remove from Cart
                        </Button>
                      ) : (
                        <Button
                          onclick={() =>
                            dispatch?.({
                              type: "ADD_TO_CART",
                              payload: filteredProduct,
                            })
                          }
                          hcolor="hover:bg-blue-500"
                        >
                          Add to Cart
                        </Button>
                      )}
                    </div>
                    {/* <!-- ./Call to action button --> */}
                  </div>
                  {/* <!-- ./Card body - inner wrapper --> */}
                </div>
                {/* <!-- ./Card body - outer wrapper --> */}
              </div>
              {/* <!-- ./Card body --> */}
            </div>
          </div>
        ))}
      {/* <!-- ./Card wrapper --> */}
    </div>
  );
};

export default SingleProduct;
