/* eslint-disable*/

import styled from "styled-components";

import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>

            <a href="/home">
              <img src="/images/search-icon.svg" alt="HOME" />
              <span>SEARCH</span>
            </a>

            <a href="/home">
              <img src="/images/watchlist-icon.svg" alt="HOME" />
              <span>WATCHLIST</span>
            </a>

            <a href="/home">
              <img src="/images/original-icon.svg" alt="HOME" />
              <span>ORIGINALS</span>
            </a>

            <a href="/home">
              <img src="/images/movie-icon.svg" alt="HOME" />
              <span>MOVIES</span>
            </a>

            <a href="/home">
              <img src="/images/series-icon.svg" alt="HOME" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 6rem;
  display: flex;
  gap: 1.75rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  letter-spacing: 1rem;
  z-index: 10;
  background-image: linear-gradient(
    rgb(0, 0, 0),
    rgba(0, 0, 0, 0.96),
    rgba(0, 0, 0, 0.92),
    rgba(0, 0, 0, 0.88),
    rgba(0, 0, 0, 0.84),
    rgba(0, 0, 0, 0.8),
    transparent
  );
`;

const Logo = styled.a`
  padding: 0;
  width: 5rem;
  max-height: 4.5rem;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  gap: 2rem;

  a {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    img {
      height: 1.25rem;
      min-width: 1.25rem;
      width: 1.25rem;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 0.875rem;
      letter-spacing: 1.5px;
      line-height: 1.1;
      padding: 0.125rem 0;
      white-space: nowrap;
      text-transform: uppercase;
      position: relative;

      &::before {
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 0.25rem;
        bottom: -0.5rem;
        height: 0.125rem;
        opacity: 0;
        position: absolute;
        right: 0;
        left: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }

      @media (max-width: 1024px) {
        font-size: 0.75rem;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: rgba(0, 0, 0, 0.6);
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 3rem;
  right: 0;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.35);
  border-radius: 0.25rem;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0 px;
  padding: 0.625rem;
  font-size: 0.75rem;
  letter-spacing: 0.25rem;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 3rem;
  width: 3rem;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;

/* eslint-disable*/
