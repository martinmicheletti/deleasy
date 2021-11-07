import React from "react";
import { Container, Row, Col, Toast, Badge, Button } from "react-bootstrap";
import Burger from "./assets/burger.png";
import Papas from "./assets/papas.jpeg";
import "./App.css";

const MenuCard = (props) => {
  const { title, image, price } = props;
  return (
    <Toast style={{ padding: ".5em" }}>
      <Toast.Body>
        <div
          style={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            background: "url(" + image + ");",
            width: "80rem",
          }}
        >
          {/* <img
            alt="Burger con papas"
            src={image}
            style={{ width: "100%", marginBottom: ".5em" }}
          /> */}
        </div>
        <p class="fw-bold fs-4" style={{ lineHeight: "1em" }}>
          {title}
        </p>
        <p class="fw-normal fs-5">{price}</p>
        <Badge bg="warning" text="dark" style={{ display: "block" }}>
          DELIVERY GRATIS
        </Badge>
        <Button
          variant="outline-primary"
          style={{ width: "100%", marginTop: ".5em" }}
        >
          LO QUIERO
        </Button>
      </Toast.Body>
    </Toast>
  );
};

const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p class="fw-bold fs-1">Deleasy.</p>
          </Col>
          <Col style={{ textAlign: "right", alignSelf: "center" }}>
            <p class="fw-normal fs-6" style={{ lineHeight: "1em" }}>
              CARRITO
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <MenuCard title="Burger con papas" price="$599" image={Burger} />
          </Col>
          <Col>
            <MenuCard title="Papas fritas" price="$299" image={Papas} />
          </Col>
          <Col>
            <MenuCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
