import React, { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import Logo from "../../../svgSprite/symbol-defs.svg";
import { fetchAddFolder } from "../../../redux/folders/foldersOperations";
import {
  Input,
  Overlay,
  FormModal,
  FormContainer,
  ModalHeader,
  ContentWrapper,
  Button,
  ButtonClose,
} from "./AddFolderModalStyled";

import { RootState } from "../../../redux/store";

type ModalProps = {
  toggleModal: () => void;
};

const AddFolderModal: FC<ModalProps> = ({ toggleModal }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        toggleModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleModal]);

  const createFolder = (e: React.ChangeEvent<unknown>) => {
    e.preventDefault();

    dispatch(fetchAddFolder({ name, location, date }));
    toggleModal();
  };

  return (
    <Overlay>
      <FormContainer>
        <ContentWrapper>
          <ModalHeader>
            <ButtonClose type="button" onClick={toggleModal}>
              <svg width={22} height={22}>
                <use xlinkHref={`${Logo}#icon-close`}></use>
              </svg>
            </ButtonClose>
            <svg width={179} height={22}>
              <use
                xlinkHref={`${Logo}#icon-PhotoDrop-Logo-Inline-Two_Toned`}
              ></use>
            </svg>
          </ModalHeader>
          <FormModal action="" onSubmit={createFolder}>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              required
              autoComplete="off"
              autoCorrect="off"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              type="text"
              name="location"
              placeholder="Location"
              value={location}
              required
              autoComplete="off"
              autoCorrect="off"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <Input
              type="date"
              name="date"
              placeholder="Datapicker"
              value={date}
              required
              autoComplete="off"
              autoCorrect="off"
              onChange={(e) => setDate(e.target.value)}
            />
            <Button type="submit">Save</Button>
          </FormModal>
        </ContentWrapper>
      </FormContainer>
    </Overlay>
  );
};

export default AddFolderModal;
