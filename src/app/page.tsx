"use client";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'next/image';
import logo from '../../public/OfficerLibraryLogoWhite.jpeg';
import mainImage from '../../public/OFL_main_image.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
  return (
    <>
      <Navbar>
        <Container>
            <Navbar.Brand href="#home">
                <Image
                 src={logo}
                 width={50}
                 height={50}
                 alt= "Officer's Library"
               />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <div>
      <Image
       src={mainImage}
         width={0}
         height={0}
       className="w-full h-30"
       alt= "Officer's Library"
     />
     </div>
    </>
  );
};

export default Navigation;