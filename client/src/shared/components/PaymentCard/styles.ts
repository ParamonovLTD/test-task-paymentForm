import styled from 'styled-components';
import { Card } from 'antd';

export const PaymentCardWrapper = styled(Card)`
  width: 40%;
  
  @media (max-width: 768px) {
    width: 80%;
  }
`;