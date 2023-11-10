import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useEffect, useState } from "react";

const URL = "http://localhost:5000";

function NavigationBar() {
  const [name, setName] = useState([]);

  useEffect(() => {
    const fetchUser = async() => {
        try {
            const response = await fetch(`${URL}/user`, {method: 'GET'});
            const userData = await response.json();

            setName(userData.users);

        } catch (error) {
            console.log('error: ', error);
        }
    };

    fetchUser();

},[])

  return (
    <Navbar data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Image src="https://www.itjobs.com.vn/Upload/Employer/Zigvy-logo.jpg" />
        </Navbar.Brand>
        <Navbar.Brand>Blogs</Navbar.Brand>

        <Navbar.Brand>
          <InputGroup>
            <Image
              src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
              width={50}
              height={50}
            />
            <DropdownButton id="dropdown-basic-button" title="UserName">
            {name.map((name) => {
              return(
              <Dropdown.Item key={name.id}>{name.username}</Dropdown.Item>
              )
            })}
            </DropdownButton>
          </InputGroup>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
