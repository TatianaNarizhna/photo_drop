import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllAlbums } from "../../../redux/folders/foldersSelectors";
import { Album } from "../../../types/album";
import Logo from "../../../svgSprite/symbol-defs.svg";

import HeaderComponent from "../../common/header/HeaderComponent";
import { FolderWrapper } from "./FoldersStyled";

const Folders: FC = () => {
  const folders = useSelector(getAllAlbums);

  // receive the folders from store and map (Link)
  return (
    <>
      <HeaderComponent />
      <FolderWrapper>
        {" "}
        {folders?.length
          ? folders.map((el: Album, index) => (
              <Link key={index} to={`/folder/${el.id}`}>
                <div>
                  {" "}
                  <svg width={25} height={25}>
                    <use xlinkHref={`${Logo}#icon-folder_icon`}></use>
                  </svg>
                </div>
              </Link>
            ))
          : "There aren't albums"}
      </FolderWrapper>
    </>
  );
};

export default Folders;
