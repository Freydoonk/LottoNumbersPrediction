import { Table } from "react-bootstrap";

interface Props {
    columnNames: Array<string>,
    captions?: Array<string>,
    data: Array<any>
}

const StyledTable = ({ columnNames, captions, data }: Props) => {
    return (
        <Table striped bordered hover variant="light" className="mt-3">
            <thead>
                <tr>
                    {[...(captions || []), ...columnNames]
                        .slice(0, columnNames.length)
                        .map((name, index) => (
                            <th key={index} scope="col" className="sticky-header">{name}</th>
                        ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {columnNames.map((name, index) => (
                            item[name] && item[name] instanceof Date ?
                                <td key={index}>{(item[name] as Date).toLocaleDateString()}</td>
                                : <td key={index}>{item[name]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default StyledTable;