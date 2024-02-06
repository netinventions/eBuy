import React from 'react';
import {Route, Routes } from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import 'semantic-ui-ccs/semantic.min.css';
import {Header} from '@ebuy/ui';
export function App() {
  return (
    <React.Suspense fallback={null}>
      <Container style={{marginTop: '5rem'}}>
        <Header />
        
      </Container>
    </React.Suspense>
  );
}

export default App;
