import React, { useRef, useEffect, useState } from "react";
import * as S from "./Styled";
import LogoIcon from "../../../assets/images/Logo.png";
import HorizonLine from "../../Layout/Line";
import { BsChat, BsBell, BsPersonVcard } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { css } from "styled-components";
import { PiUserCircleDuotone } from "react-icons/pi";
import DefaultProfileImage from "../../../assets/images/user.png";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import Modal from "../../Modal/Modal";

function Nav({ title, id }) {
  //프로필 이미지 불러오기
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // defaultProfileImageUrl 설정
  const defaultProfileImageUrl = (
    <img
      src={DefaultProfileImage}
      alt="Default Profile"
      style={{ width: "70px", height: "60px" }}
    />
  );
  // // 모달 열기 함수
  // const handleModalOpen = () => {
  //   setModalOpen(true);
  // };
  // useEffect(() => {
  //   fetchUserProfileImage(); // 이미지 가져오는 함수 호출
  // }, []);

  // const fetchUserProfileImage = async () => {
  //   try {
  //     const response = await fetch(`/api/profile-image/${userId}`); // userId는 변경필요
  //     if (response.ok) {
  //       const imageUrl = response.url;
  //       setProfileImageUrl(imageUrl); // 프로필 이미지 URL 설정
  //     } else {
  //       console.error("프로필 이미지를 불러오는데 실패했습니다.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching profile image:", error);
  //   }
  // };

  return (
    <>
      <S.NavContainer>
        <Link to="/home">
          <S.NavLogo>
            <S.NavLogoImage src={LogoIcon} alt="Logo" />
          </S.NavLogo>
        </Link>
        <S.NavIcon>
          <CiSearch className="search" />
          <p>Search</p>
        </S.NavIcon>

        <HorizonLine width="50%" marginTop="0.5rem" opacity="30%" />
        <S.NavIcon>
          <BsChat className="chat" />
          <p>Comuunity</p>
        </S.NavIcon>

        <HorizonLine width="50%" marginTop="0.8rem" opacity="30%" />

        <S.NavIcon>
          {modalOpen && <Modal setModalOpen={setModalOpen} />}
          <S.NoticeWrap onClick={setModalOpen}>
            <Badge color="error" variant="dot">
              <BsBell className="bell" onClick={setModalOpen} />
            </Badge>
            <p>Notice</p>
          </S.NoticeWrap>
        </S.NavIcon>
        <HorizonLine width="50%" marginTop="0.8rem" opacity="30%" />

        <S.NavIcon>
          <Link
            to="/expertList"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <BsPersonVcard className="Person" />
            <p>Expert</p>
          </Link>
        </S.NavIcon>

        <Link to="/signin">
          <S.Profile>
            {profileImageUrl && (
              <img
                className="profile-image"
                src={profileImageUrl}
                alt="Profile"
              />
            )}
            {!profileImageUrl && defaultProfileImageUrl}
          </S.Profile>
        </Link>
      </S.NavContainer>
      {/* Notice 모달 컴포넌트
      {modalOpen && <Notice setModalOpen={setModalOpen} />} */}
    </>
  );
}

export default Nav;
