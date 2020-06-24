import React from 'react';
import { Link } from 'gatsby';
import Styled from 'styled-components';

const NavDiv = Styled.div`
    background-color: black;
    color: white;

    ul {
        display: grid;
        grid-template-columns: 45% 10% 45%;
        list-style: none;
        margin-left: auto;
        margin-right: auto;
        width: 200px;
        padding-left: 0;

        .about-link {
            margin-left: auto;
            margin-right: 8px;
        }

        .link-separator {
            margin-left: auto;
            margin-right: auto;
        }

        .collection-link {
            margin-left: 8px;
        }

        a {
            color: #AAAAAA;
            text-decoration: none;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
`

const Nav = () => {
  return (
    <NavDiv>
      <ul>
        <li className="about-link">
            <Link to={"/about"}>
                about
            </Link>
        </li>
        <li className="link-separator">|</li>
            <li className="collection-link">
                <Link 
                    to={"/"}
                    onClick={() => console.log("This is the collection link")}>
                    collection
                </Link>
            </li>
        </ul>
    </NavDiv>
    )
}

export default Nav;