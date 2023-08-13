import { ReactHTMLElement, useCallback, useEffect } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchLotteryData } from '../library/lotterySuggest';
import { fetchLottoData, setLottoData } from '../store/lottoDataSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';


const MainPage = () => {
    const dataStatus = useAppSelector(state => state.lottoData.status);
    const error = useAppSelector(state => state.lottoData.error);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (dataStatus === 'idle') {
            dispatch(fetchLottoData())
        }
    }, [dataStatus, dispatch]);

    let content;
    if (dataStatus === 'loading') {
        content = <div>Loading...</div>
    } else if (dataStatus === 'succeeded') {
        content = null;
    } else if (dataStatus === 'failed') {
        content = <div>{error}</div>
    }


    return (
        content ||
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
                            Show Analyzes
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
        </Row>
    );
};

export default MainPage;