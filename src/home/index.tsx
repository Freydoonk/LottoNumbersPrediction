import { useCallback, useEffect, useState } from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BackMenu from '../components/BackMenu/BackMenu';
import ShowAnalyzes from '../components/ShowAnalyzes';
import ShowHistory from '../components/ShowHistory';
import lotteryDrawInfo from '../library/lotteryDrawInfo';
import { fetchLotteryData } from '../library/lotterySuggest';

const Menu: React.FC = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="m-5">
                    <h1 className="text-center">Choose an option:</h1>
                    <Nav className="flex-column mt-3">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/show-history">
                                Show History
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/show-suggestion">
                                Show Suggestion
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/show-analyze">
                                Show Analyze
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
};





const ShowSuggestion: React.FC = () => {
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col xs={12} sm={6} md={4}>
                    <h1 className="text-center">Show Suggestion</h1>
                    <BackMenu />
                </Col>
            </Row>
        </Container>
    );
};

const Home: React.FC = () => {
    const [data, setData] = useState<Array<lotteryDrawInfo>>([]);
    const fetchData = useCallback(async () => {
        const rawData = await fetchLotteryData();
        setData(rawData);
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData]);

    return (
        <Container className='container-fluid'>
            <Router>
                <Navbar bg="dark" variant="dark" className='mt-4'>
                    <Navbar.Brand href="/">Lottery App</Navbar.Brand>
                </Navbar>
                <div className="py-4">
                    <Routes>
                        <Route path="/" element={<Menu />} />
                        <Route path="/show-history" element={<ShowHistory data={data} />} />
                        <Route path="/show-suggestion" element={<ShowSuggestion />} />
                        <Route path="/show-analyze" element={<ShowAnalyzes data={data} />} />
                    </Routes>
                </div>
            </Router>
        </Container>
    );
};

export default Home;
