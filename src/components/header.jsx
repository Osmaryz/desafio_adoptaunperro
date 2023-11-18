import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function HeaderAdoptaUnPerrito({ title }) {
  return (
    <Navbar className="bg-body-tertiary">
      <Navbar.Collapse className="justify-content-center">
        <Navbar.Text className="FormatoTextoNavbar">{title}</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderAdoptaUnPerrito;
