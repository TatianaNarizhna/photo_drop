import React, { FC, useState } from "react";

import {
  Input,
  Overlay,
  FormModal,
  FormContainer,
} from "./AddFolderModalStyled";

const AddFolderModal: FC = () => {
  // btn logout + remove token + close by escp
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  return (
    <Overlay>
      <FormContainer>
        {" "}
        <FormModal action="">
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
          <button type="submit">Save</button>
        </FormModal>
      </FormContainer>
    </Overlay>
  );
};

export default AddFolderModal;
