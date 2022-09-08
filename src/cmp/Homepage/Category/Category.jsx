import './Category.css';
import {
    Container,
    Row,
    Col,
    Card
} from 'react-bootstrap';
import categoryData from '../../../json-api/Category.json';

const Column = (data) => {
    const design = (
        <>
            <Col md className="px-4 mb-3">
                <Card className="shadow-lg">
                    <Card.Body className="text-center py-4">
                        <div className="icon d-flex align-items-center justify-content-center">
                            <i className={data.catData.icon} style={{fontSize:'50px'}}></i>
                        </div>
                        <Card.Title>{data.catData.title}</Card.Title>
                        <Card.Text>
                        {data.catData.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );

    return design;
}

const Category = () => {
    const design = (
        <>
            <Container className="cat-box">
                <Row>
                   {
                       categoryData.map((item,i) => {
                            return <Column catData={item} key={item.id}></Column>
                       })
                   }
                </Row>
            </Container>
        </>
    );

    return design;
}

export default Category;
