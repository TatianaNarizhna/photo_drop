import React, { FC, useEffect } from "react";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  folderDelete,
  fetchAllFolders,
} from "../../../redux/folders/foldersOperations";
import { getAllAlbums } from "../../../redux/folders/foldersSelectors";
import { getJwt } from "../../../redux/token/selectors";
import { Album } from "../../../types/album";
import Logo from "../../../svgSprite/symbol-defs.svg";

import HeaderComponent from "../../common/header/HeaderComponent";
import {
  FolderWrapper,
  FlexWrapper,
  Folder,
  FolderText,
  TextWrapper,
  SvgWrapper,
  ButtonDelete,
} from "./FoldersStyled";

const Folders: FC = () => {
  const token = useSelector(getJwt);
  const folders = useSelector(getAllAlbums);
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();

  const deleteFolder = (id: string) => {
    dispatch(folderDelete(id));
  };

  // useEffect(() => {
  //   dispatch(fetchAllFolders());
  // }, [folders]);

  console.log(token);
  useEffect(() => {
    if (token) {
      dispatch(fetchAllFolders());
      console.log("no");
      console.log(folders);
    }
  }, [token]);

  return (
    <>
      <HeaderComponent />
      <FolderWrapper>
        {" "}
        {folders?.length > 0
          ? folders.map((el: Album, index) => (
              <Folder key={index}>
                {" "}
                <Link to={`/folder/${el.id}`}>
                  <FlexWrapper>
                    {" "}
                    <SvgWrapper>
                      {" "}
                      <svg width={25} height={25}>
                        <use xlinkHref={`${Logo}#icon-folder_icon`}></use>
                      </svg>
                    </SvgWrapper>
                    <TextWrapper>
                      {" "}
                      <FolderText>{el.name}</FolderText>
                      <FolderText>{el.location}</FolderText>
                    </TextWrapper>
                  </FlexWrapper>
                </Link>
                <ButtonDelete
                  type="button"
                  onClick={() => {
                    deleteFolder(el.id);
                  }}
                >
                  <svg width={15} height={15} fill="gray">
                    <use xlinkHref={`${Logo}#icon-close`}></use>
                  </svg>
                </ButtonDelete>
              </Folder>
            ))
          : "There aren't albums"}
      </FolderWrapper>
    </>
  );
};

export default Folders;
