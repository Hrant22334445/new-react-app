import { Card, CardGroup, Button, Container, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

function Pricing() {

    return (
 
            <Container>
                <div className="d-flex justify-content-center">
                <h1>
                    Pricing
                </h1>
            </div>
            <div>
                <span> build an effective pricing table for your potential customers with</span>
                <span>this Bootstrap example. It's built with default Bootstrap components and</span>
                <span>utilities with little customization.</span>
            </div>
            <br />
            <br />
            <br />

            <CardGroup>
            <Card border="secondary" style={{ with: '18rem '}}>
      <Card.Body>
        <Card.Title>Free</Card.Title>
        <Card.Title>$0/mo</Card.Title>
        <Card.Text>
            10 users included
            2 GB of storage
            Email support
            Help center access
        </Card.Text>
        <Button variant="outline-primary">Sign up for free</Button>
      </Card.Body>
    </Card>
    <Card border="secondary" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Pro</Card.Title>
        <Card.Title>$15/mo</Card.Title>
        <Card.Text>
        20 users included 10 GB of storage 
        Priority email support
        Help center access
        </Card.Text>
        <Button variant="primary">Get started</Button>
      </Card.Body>
    </Card>
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Enterprise</Card.Title>
        <Card.Title>$29/mo</Card.Title>
        <Card.Text>
          30 users included
          15 GB of storage
          Phone and email support
          Help center access
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </CardGroup>
        <br/>
        <br/>
        <br/>
        <div>
            <div className="d-flex justify-content-center">
                <h1>
                    Compare plans
                </h1>
            </div>
            <br/>
            <br/>
        
            <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Free</th>
          <th>pro</th>
          <th>Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Public</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Private</td>
          <td>No</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Permissions</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
            <td>Sharing</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td>Unlimited members</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td>Extra security</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
        </tr>
      </tbody>
    </Table>
        </div>
       
            </Container>
        
  );
    
}

export default Pricing;