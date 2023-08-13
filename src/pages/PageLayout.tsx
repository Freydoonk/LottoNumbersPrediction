import { Link, Outlet } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './Styles.module.css';

const PageLayout = () => {
  return (
    <div className={styles.page}>
      <Navbar bg="dark" data-bs-theme="dark" className='mt-2' sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt="Logo"
              src="/logo192.png"
              className={`d-inline-block align-top ${styles.appLogo}`}
            />{' '}
            Lotto Prediction
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/show-history">History</Nav.Link>
            <Nav.Link as={Link} to="/show-suggestion">Suggestion</Nav.Link>
            <Nav.Link as={Link} to="/show-analyze">Analyzes</Nav.Link>
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