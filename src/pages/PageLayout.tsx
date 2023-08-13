import { Outlet } from 'react-router-dom';

import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './Styles.module.css';

const PageLayout = () => {
  return (
    <div className={styles.page}>
      <Navbar bg="dark" data-bs-theme="dark" className='mt-2' sticky="top">
        <Container>
          <Navbar.Brand href="/">
          <img
              alt=""
              src="/logo192.png"
              width="30"
              height="30"
              className={styles.logo}
            />{' '}
            Lotto Prediction</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/show-history">History</Nav.Link>
            <Nav.Link href="/show-suggestion">Suggestion</Nav.Link>
            <Nav.Link href="/show-analyze">Analyzes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className='container-fluid'>
        <Outlet />
      </Container>
    </div >
  );
};

export default PageLayout;