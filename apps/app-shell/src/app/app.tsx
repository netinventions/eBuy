import React from 'react';
import {Route, Routes } from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import 'semantic-ui-ccs/semantic.min.css';
import {Header} from '@ebuy/ui';

<<<<<<< HEAD
const Catalog = React.lazy(() => import ('catalog/Module'));
const Checkout = React.lazy(() => import ('checkout/Module'));
=======
const Catalog = React.lazy(() => import('catalog/Module'));
>>>>>>> 6b1557d0aaa926f004dc26c2cbddd0fa20b431a7

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Container style={{marginTop: '5rem'}}>
        <Header />
        <Routes>
<<<<<<< HEAD
          <Route path='/' element={<Catalog />}/>
          <Route path="/checkout" element={<Checkout />}/>
=======
          <Route path="/" element={<Catalog />}/>
>>>>>>> 6b1557d0aaa926f004dc26c2cbddd0fa20b431a7
        </Routes>
      </Container>
    </React.Suspense>
  );
}

export default App;
