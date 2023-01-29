import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className='bg-light mt-5'>
            <Container>
                <Row className='align-items-center'>
                    <Col md='3' className='text-center'>
                        <h3>Mening yerim</h3>
                        <p>Copyright © 2023</p>
                    </Col>
                    <Col md='3' className='text-center'>
                        <p>Biz haqimizda</p>
                    </Col>
                    <Col md='3' className='text-center'>
                        <p>FAQ</p>
                    </Col>
                    <Col md='3' className='text-center'>
                        <p>Login</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
