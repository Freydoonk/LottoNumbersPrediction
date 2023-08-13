import { Col, Row } from 'react-bootstrap';
import BackMenu from '../BackMenu';

const ShowSuggestion = () => {
    return (
        <Row className="justify-content-center mt-5">
            <Col xs={12} sm={6} md={4}>
                <h1 className="text-center">Show Suggestion</h1>
                <BackMenu />
            </Col>
        </Row>
    );
};

export default ShowSuggestion;