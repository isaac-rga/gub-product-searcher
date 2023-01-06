import { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
  user: {},
  basket: 0,
  queryParam: '',
  products: [],
  filteredProducts: [],
  isAuth: false,
  drawer: {
    isDrawerOpen: false,
    drawerTitle: '',
    drawerChild: <></>,
  },
};

export const GlobalContext = createContext(initialState);
GlobalContext.displayName = 'GlobalContext';

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function auth() {
    dispatch({
      type: 'AUTH',
      payload: {},
    });
  }
  function updateUser(user) {
    dispatch({
      type: 'UPDATE_USER',
      payload: { user },
    });
  }

  function updateAccount(account) {
    dispatch({
      type: 'UPDATE_ACCOUNT',
      payload: { account },
    });
  }

  function onBoarding() {
    dispatch({
      type: 'ONBOARDING',
      payload: null,
    });
  }

  /**
   * @param title {string}
   * @param child {JSX.Element}
   * */
  function openDrawer(title, child) {
    dispatch({
      type: 'OPEN_DRAWER',
      payload: { title, child },
    });
  }

  function closeDrawer() {
    dispatch({
      type: 'CLOSE_DRAWER',
    });
  }

  function incrementBasket() {
    dispatch({
      type: 'INCREMENT_BASKET'
    });
  }

  function decrementBasket() {
    dispatch({
      type: 'DECREMENT_BASKET'
    });
  }

  /**
   * @param products {array}
   * */
  function setProducts(products) {
    dispatch({
      type: 'SET_PRODUCTS',
      payload: { products }
    });
  }

  /**
   * @param query {string}
   * */
  function setQueryParam(query) {
    dispatch({
      type: 'SET_QUERY_PARAM',
      payload: { query }
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        //toolbar
        queryParam: state.queryParam,
        setQueryParam,
        basket: state.basket,
        incrementBasket,
        decrementBasket,
        //products
        setProducts,
        products: state.products,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
