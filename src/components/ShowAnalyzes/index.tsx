import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { countDistributedSets } from '../../library/lotterySuggest';
import { useAppSelector } from '../../store/hooks';
import BackMenu from '../BackMenu';
import StyledTable from '../StyledTable';

function ShowAnalyzes() {
    const [analyzes, setAnalyzes] = useState<Array<Array<string | number | Date>>>([]);
    const lottoData = useAppSelector(state => state.lottoData.value);

    useEffect(() => {
        const result = countDistributedSets(lottoData);
        setAnalyzes(result);
    }, [lottoData]);

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