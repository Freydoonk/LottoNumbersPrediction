import { Col, Row } from "react-bootstrap";
import lotteryDrawInfo from "../../library/lotteryDrawInfo";
import BackMenu from "../BackMenu";
import StyledTable from "../StyledTable";

interface Props {
    data: Array<lotteryDrawInfo>
}

const ShowHistory = ({ data }: Props) => {
    return (
        <Row className="justify-content-center mt-5">
            <Col>
                <h1 className="text-center">Show History</h1>
                <BackMenu />

                <StyledTable columnNames={['No', 'Date', 'N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'BN', 'Jackpot', 'Wins', 'Machine', 'Set']} data={data} />

                <BackMenu />
            </Col>
        </Row>
    );
};

export default ShowHistory;