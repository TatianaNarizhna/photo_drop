import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { uploadPhoto, fetchAllPhotos } from "../../../api/api";
import Folder from "../folder/Folder";

const FolderContainer: FC = () => {
  const [allPhotos, setAllPhotos] = useState<any>([]);
  const { id } = useParams<string>();

  useEffect(() => {
    if (id !== undefined) {
      console.log("allph");
      fetchAllPhotos(id)
        .then(({ photos }) => {
          setAllPhotos([...allPhotos, ...photos]);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  console.log(allPhotos, "allstate");

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    console.log("upload");

    if (id === undefined || !files) {
      return;
    }

    try {
      const uploadedPhotos = await uploadPhoto(id, files);
      setAllPhotos([...allPhotos, ...uploadedPhotos]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    const fileInput = document.getElementById("file-input");

    if (fileInput) {
      fileInput.click();
    }
  };
  return (
    <Folder
      allPhotos={allPhotos}
      handleUpload={handleUpload}
      handleClick={handleClick}
    />
  );
};

export default FolderContainer;
