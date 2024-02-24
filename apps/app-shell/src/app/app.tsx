import React from 'react';
import {Route, Routes } from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import 'semantic-ui-ccs/semantic.min.css';
import {Header} from '@ebuy/ui';

const Catalog = React.lazy(() => import ('catalog/Module'));
const Checkout = React.lazy(() => import ('checkout/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Container style={{marginTop: '5rem'}}>
        <Header />
        <Routes>
          <Route path='/' element={<Catalog />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path='/catalog' element={<Catalog />}/>
        </Routes>
      </Container>
    </React.Suspense>
  );
}

export default App;
