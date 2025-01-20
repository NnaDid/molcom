// App.jsx
import React from 'react';
import { Container, Row, Col, Card, Navbar, Nav, Form, InputGroup } from 'react-bootstrap';
import { FaUsers, FaBriefcase, FaUserPlus, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import './App.css'
import Logo from "../src/assets/Logo.png"
const App = () => {
  return (
    <div className="dashboard">
      <Navbar bg="success" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#">
            <img src={Logo} alt='Logo' height={50} />
          </Navbar.Brand>
          <Form className="d-flex ms-auto">
            <InputGroup>
              <Form.Control type="text" placeholder="Search" />
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
            </InputGroup>
          </Form>
        </Container>
      </Navbar>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar bg-default shadow-sm pt-3">
            <Nav className="flex-column custom-nav">
              <Nav.Link href="#" className="custom-link">Dashboard</Nav.Link>
              <Nav.Link href="#" className="custom-link">CSR</Nav.Link>
              <Nav.Link href="#" className="custom-link">Careers</Nav.Link>
              <Nav.Link href="#" className="custom-link">Clients</Nav.Link>
              <Nav.Link href="#" className="custom-link">Activities</Nav.Link>
              <Nav.Link href="#" className="custom-link">Reports</Nav.Link>
            </Nav>

          </Col>
          <Col md={10} className="content">
            <Row className="mt-3">
              <Col md={3}>
                <Card className="bg-success text-center text-white">
                  <Card.Body>
                    <FaUsers size={30} />
                    <Card.Title>1259</Card.Title>
                    <Card.Text>Total Employment</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="bg-danger text-center text-white">
                  <Card.Body>
                    <FaBriefcase size={30} />
                    <Card.Title>23</Card.Title>
                    <Card.Text>Job Opening</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="bg-secondary text-center text-white">
                  <Card.Body>
                    <FaUserPlus size={30} />
                    <Card.Title>1259</Card.Title>
                    <Card.Text>New Applicants</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="text-center">
                  <Card.Body className="bg-primary text-white">
                  <FaUserPlus size={30} />
                    <Card.Title>1259</Card.Title>
                    <Card.Text>New Applicants</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row> 

            <Row className="mt-4">
              <Col md={8}>
                <Card>
                  <Card.Body>
                    <Card.Title>Visitor Statistics</Card.Title>
                    {/* Placeholder for Chart.js or another graph library */}
                    <div style={{ height: '300px', background: '#f5f5f5' }}>Graph Placeholder</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Calendar</Card.Title>
                    {/* Placeholder for Calendar */}
                    <div style={{ height: '300px', background: '#f5f5f5' }}>Calendar Placeholder</div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;

