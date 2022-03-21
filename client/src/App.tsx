import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import PaymentCard from './shared/components/PaymentCard';
import { AppContainer } from './shared/GlobalStyles';

function App() {
  return (
    <AppContainer>
      <PaymentCard />
    </AppContainer>
  );
}

export default App;
