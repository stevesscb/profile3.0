import { Outlet } from 'react-router-dom';

import Wrapper from './Wrapper';
import Header from './header/Header';
import Container from './Container';

function Root() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  );
}

export default Root;
