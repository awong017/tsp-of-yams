import React from 'react';
import { Link } from 'gatsby';
import Styled from 'styled-components';

const NavDiv = Styled.div`
    margin-bottom: 48px;
    border-top: 1px solid white;
    color: white;

    ul {
        display: flex;
        justify-content: space-around;
        list-style: none;
        width: 400px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 0;

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
        <li>
            <Link to={"/about"}>
                about
            </Link>
        </li>
        <li>|</li>
        <li>
            <Link to={"/"}>
                collection
            </Link>
        </li>
        <li>|</li>
        <li>
            <Link to={"/discovered"}>
                discovered
            </Link>
        </li>
        <li>|</li>
        <li>
            <Link to={"/recipes"}>
                recipes
            </Link>
        </li>
        </ul>
    </NavDiv>
    )
}

export default Nav;