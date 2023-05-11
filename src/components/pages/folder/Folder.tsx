import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { uploadPhoto } from "../../../api/api";

const Folder: FC = () => {
  const [photos, setPhotos] = useState<any>([]);
  const { id } = useParams<string>();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (id === undefined) {
      return;
    }

    if (files) {
      const uploadedPhotos = await uploadPhoto(id, files);
      setPhotos([...photos, ...uploadedPhotos]);
    }
  };

  const handleClick = () => {
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <section>
      <div>
        {photos?.length > 0 ? (
          <ul>{photos.map((el: any, i: any) => console.log(el))}</ul>
        ) : (
          "There are not photos!"
        )}
      </div>
      <input
        type="file"
        name="photos"
        accept=".jpg,.jpeg,.png"
        multiple
        id="file-input"
        onChange={handleUpload}
        style={{ display: "none" }}
      />
      <button type="submit" onClick={handleClick}>
        Upload photo
      </button>
    </section>
  );
};

export default Folder;
