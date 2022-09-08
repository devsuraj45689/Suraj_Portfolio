import './Benifits.css';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

const data = [
    {
        "id":"key-1",
        "icon":"fa fa-check text-white",
        "title":"Practial Learning",
        "desc":"Hi this practical learning hub here"
    },
    {
        "id":"key-2",
        "icon":"fa fa-copy text-white",
        "title":"Monthly Payment",
        "desc":"You will get monthly payment from here"
    },
    {
        "id":"key-3",
        "icon":"fa fa-edit text-white",
        "title":"Mobile Repairing",
        "desc":"Hi you will get your mobile repaired from here"
    }
]

const List = (data) => {
    return (
        <>
             <div className="d-flex mb-4">
                <div className="icon-box d-flex justify-content-center align-items-center">
                    <i className={data.benifitData.icon}></i>
                </div>
                <div className="px-3">
                    <h5>{data.benifitData.title}</h5>
                    <p>{data.benifitData.desc}</p>
                </div>
            </div>
        </>
    );
}


const Benifits = () => {
    const design = (
        <>
            <Container className="mb-5">
                <Row>
                    <Col md className="d-flex flex-column align-items-center justify-content-center">
                        <div className="pt-5"></div>
                        {
                            data.map((item) => {
                                return <List benifitData={item} key={item.id}></List>
                            })
                        }
                        
                    </Col>
                    <Col md className="d-flex justify-content-center">
                        <img src="man.jpg" width="70%" className="rounded-circle" />
                    </Col>
                </Row>
            </Container>
        </>
    );

    return design;
}


export default Benifits;