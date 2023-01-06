import { Grid } from '@mui/material';
import { GownCard } from './gownCard.tsx';
import { GlobalContext } from '../services/context/GlobalContext';
import { ProductsService } from '../services/products.service.js'
import React, { useState, useEffect, useContext } from 'react';

const Products = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [searchParam] = useState(["capital", "name", "numericCode"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  const { setProducts, queryParam } = useContext(GlobalContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await ProductsService.products();
      setProducts(products.gowns)
      setItems(products.gowns.map(product => {
        return {
          ...product,
          display: true
        }
      }))
      setIsLoaded(true)
    }

    fetchProducts();
      // fetch(
      //     "https://d9adc0af-6bb3-46ea-a799-d4853fc943af.mock.pstmn.io/products"
      // )
      //     .then((res) => res.json())
      //     .then(
      //         (result) => {
      //             setIsLoaded(true);
      //             setItems(result.gowns);
      //         },
      //         (error) => {
      //             setIsLoaded(true);
      //             setError(error);
      //         }
      //     );
  }, []);

  useEffect(() => {
    filterItemsWith(queryParam);
  }, [queryParam])

  const filterItemsWith = (queryParam) => {
    const filteredItems = items.map(item => {
      if (!item.name.toLowerCase().includes(queryParam.toLowerCase())) {
        item.display = false;
      } else {
        item.display = true;
      }

      if (queryParam == '') { item.display = true;}

      return item
    })
    setItems(filteredItems)
  }

  if (error) {
      return (
          <p>
              {error.message}, if you get this error, the free API I used
              might have stopped working, but I created a simple example that
              demonstrate how this works,{" "}
              <a href="https://codepen.io/Spruce_khalifa/pen/mdXEVKq">
                  {" "}
                  check it out{" "}
              </a>{" "}
          </p>
      );
  } else if (!isLoaded) {
    return (
    <>
      loading...
    </>
    );
  } else {
    return(
      <>
        <Grid container spacing={2} >
          {items.map((gown, index) => {
            return (
              <Grid item lg={3} md={4} sm={6} xs={12} key={index} display={gown.display ? 'block' : 'none'}>
                <GownCard gown={gown}/>
              </Grid>
            )
          })}
        </Grid>
      </>
    )
  }
}

export default Products;
