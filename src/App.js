import React, { useContext } from 'react';
import Home from './pages/Home';
import Template from './pages/Template';
import { pagesMapping, RoutingContext } from './Routing.js'

const App = () => {
  const { page } = useContext(RoutingContext)
  return (
    <>
      {(pagesMapping.home === page) && <Home />}
      {(pagesMapping.template === page) && <Template />}
    </>
  );
}

export default App;
