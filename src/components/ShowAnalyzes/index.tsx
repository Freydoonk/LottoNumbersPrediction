import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import lotteryDrawInfo from '../../library/lotteryDrawInfo';
import { countDistributedSets } from '../../library/lotterySuggest';
import BackMenu from '../BackMenu';
import StyledTable from '../StyledTable';

interface Props {
    data: Array<lotteryDrawInfo>
};

function ShowAnalyzes({ data }: Props) {
    const [analyzes, setAnalyzes] = useState<Array<Array<string | number | Date>>>([]);

    useEffect(() => {
        const result = countDistributedSets(data);
        setAnalyzes(result);
    }, [data]);

    return (
        <Row className="justify-content-center mt-5">
            <Col md={5}>
                <h1 className="text-center">Show Analyze</h1>
                <BackMenu />

                <StyledTable captions={['Combination', 'Repeat Count']} columnNames={['0', '1']} data={analyzes} />

                <BackMenu />
            </Col>
        </Row>
    );
}

export default ShowAnalyzes;