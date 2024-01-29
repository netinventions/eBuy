import React from 'react';
import {Route, Routes } from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import 'semantic-ui-ccs/semantic.min.css';
export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="app-shell" />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
