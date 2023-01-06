export default function appReducer(state, action) {
  function authUser() {
    const user = window.localStorage.user ? JSON.parse(window.localStorage.user).user : {};
    const isLoggedIn = !!(user && user?.token);
    if (isLoggedIn) {
      return isLoggedIn;
    }
    return false;
  }
  switch (action.type) {
    case 'AUTH':
      const newState = {
        ...state,
        ...{
          isAuth: authUser(),
          user: window.localStorage.user ? JSON.parse(window.localStorage.user).user : {},
        },
      };
      return newState;

    case 'UPDATE_USER':
      const { user } = action.payload;
      const isAuth = !!user?.user?.token;
      const userData = user?.user?.token ? user : {};
      return {
        ...state,
        ...userData,
        isAuth,
      };
    case 'RESET_PASSWORD':
      return {
        ...state,
        ...action.payload.user,
      };
    case 'UPDATE_ACCOUNT':
      const { account } = action.payload;
      return {
        ...state,
        ...account,
      };
    case 'ONBOARDING':
      return {
        ...state,
        ...action.payload,
      };
    case 'OPEN_DRAWER':
      return {
        ...state,
        drawer: {
          isDrawerOpen: true,
          drawerTitle: action.payload.title,
          drawerChild: action.payload.child,
        },
      };
    case 'CLOSE_DRAWER':
      return {
        ...state,
        drawer: {
          isDrawerOpen: false,
          drawerTitle: '',
          drawerChild: <></>,
        },
      };
    case 'FILTER':
      return {
        ...state,
        ...action.payload,
      };
    case 'INCREMENT_BASKET':
      return {
        ...state,
        basket: state.basket++,
      };
    case 'DECREMENT_BASKET':
      return {
        ...state,
        basket: state.basket--,
      };
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload.products
      };
    case 'SET_QUERY_PARAM':
      return {
        ...state,
        queryParam: action.payload.query
      };
    default:
      return state;
  }
}
