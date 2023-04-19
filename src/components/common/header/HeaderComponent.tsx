import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import Logo from "../../../svgSprite/symbol-defs.svg";
import AddAddFolderModal from "../modal/addFolderModal";
import { LogoSt, Header, AddFolderBtn } from "./HeaderStyles";

const HeaderComponent: FC = () => {
  const [modal, setModal] = useState(false);

  const modalRoot = document.querySelector("#modal-root")!;

  // btn logout + remove token
  return (
    <>
      <Header>
        {" "}
        <LogoSt>
          <svg width={179} height={22}>
            <use
              xlinkHref={`${Logo}#icon-PhotoDrop-Logo-Inline-Two_Toned`}
            ></use>
          </svg>
        </LogoSt>{" "}
        <AddFolderBtn
          type="button"
          onClick={() => {
            setModal(true);
          }}
        >
          {" "}
          <svg width={22} height={22}>
            <use xlinkHref={`${Logo}#icon-plus`}></use>
          </svg>
        </AddFolderBtn>
      </Header>
      <>{modal && createPortal(<AddAddFolderModal />, modalRoot)}</>
    </>
  );
};

export default HeaderComponent;
