import React, { useState } from 'react';
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

            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }

        .link-unselected {
            text-decoration: none;
        }

        .link-selected {
            text-decoration: underline;
        }
    }
`

const Nav = () => {
    const [link, updateLink] = useState({
        linkOne: "link-unselected",
        linkTwo: "link-unselected",
        linkThree: "link-unselected",
        linkFour: "link-unselected"
    })

    return (
        <NavDiv>
            <ul>
                <li>
                    <Link
                        className={link.linkOne}
                        to={"/about"} 
                        onClick={() => {updateLink({
                            linkOne: "link-selected",
                            linkTwo: "link-unselected",
                            linkThree: "link-unselected",
                            linkFour: "link-unselected"
                        }); console.log("This is the second function")}}>
                        about
                    </Link>
                </li>
                <li>|</li>
                <li>
                    <Link 
                        className={link.linkTwo}
                        to={"/"}
                        onClick={() => updateLink({
                            linkOne: "link-unselected",
                            linkTwo: "link-selected",
                            linkThree: "link-unselected",
                            linkFour: "link-unselected"
                        })}>
                        collection
                    </Link>
                </li>
                <li>|</li>
                <li>
                    <Link
                        className={link.linkThree} 
                        to={"/discovered"}
                        onClick={() => updateLink(({
                            linkOne: "link-unselected",
                            linkTwo: "link-unselected",
                            linkThree: "link-selected",
                            linkFour: "link-unselected"
                        }))}>
                        discovered
                    </Link>
                </li>
                <li>|</li>
                <li>
                    <Link
                        className={link.linkFour} 
                        to={"/recipes"}
                        onClick={() => updateLink(({
                            linkOne: "link-unselected",
                            linkTwo: "link-unselected",
                            linkThree: "link-unselected",
                            linkFour: "link-selected"
                        }))}>
                        recipes
                    </Link>
                </li>
            </ul>
        </NavDiv>
    )
}

export default Nav;