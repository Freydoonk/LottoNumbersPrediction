import { Col, Row } from "react-bootstrap";
import { useAppSelector } from "../../store/hooks";
import BackMenu from "../BackMenu";
import StyledTable from "../StyledTable";

const ShowHistory = () => {
    const lottoData = useAppSelector(state => state.lottoData.value);

    return (
        <Row className="justify-content-center mt-5">
            <Col>
                <h1 className="text-center">Show History</h1>
                <BackMenu />

                <StyledTable
                    columnNames={['No', 'Date', 'N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'BN', 'Jackpot', 'Wins', 'Machine', 'Set']}
                    data={lottoData}
                />

                <BackMenu />
            </Col>
        </Row>
    );
};

export default ShowHistory;