import './Header.css';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menu from '../../json-api/Menu';
import Brand from '../../json-api/Brand';
import {useState} from 'react';

const DynamicLinks = (data) => {
   const design = (
      <Link to={data.to} className={data.button ? "nav-link text-white btn btn-primary p-2": "nav-link"}>{data.label}</Link>
   );
   return design;
} 


const Header = () => {
  const sticky_data = {
    'sticky_class':"fixed-top navbar-light",
    'bg':''
  }
  const [sticky,changeStickyData] = useState(sticky_data);

  window.onscroll = () => {
    let tmp = {
      'sticky_class':"fixed-top navbar-light",
      'bg':''
    }
    if(window.scrollY > 100)
    {
      tmp = {
        'sticky_class':"fixed-top navbar-light sticked",
        'bg':'light'
      }
    }
    else {
      tmp = {
        'sticky_class':"fixed-top navbar-light",
        'bg':''
      }
    }

    changeStickyData(tmp);
  }

  const design = (
      <>
        <Navbar expand="lg" bg={sticky.bg} className={sticky.sticky_class}>
          <Container>
            <Link to="/" className="navbar-brand">
              <img src={Brand.logo} alt={Brand.logo} width="30" style={{marginRight:"10px"}}/>
              {Brand.name}
              </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end w-100">
                {
                   Menu.map((data,i) => {
                     if(!data.dropdown)
                     {
                        return <DynamicLinks button={data.button} to={data.url} label={data.label} key={data.id} />
                     }
                     else {
                       return (
                          <NavDropdown key={'NavbaDropdown-'+ i++} title={data.label} id="basic-nav-dropdown">
                            <i className="fa fa-caret-up arrow-up"></i>
                            {
                               data.dropdownMenu.map((menuData) => {
                                 return <DynamicLinks key={menuData.id} button={menuData.button} to={menuData.url} label={menuData.label} />
                               })
                            }
                          </NavDropdown>
                       )
                     }
                   })
                }

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
      
  );

  return design;
}

export default Header;