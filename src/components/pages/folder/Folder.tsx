import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { uploadPhoto, fetchAllPhotos } from "../../../api/api";
import { IPhoto } from "./folderTypes";

import {
  PhotosList,
  PhotoEl,
  UploadBtn,
  Section,
  BtnContainer,
} from "./FolderStyled";

interface IProps {
  allPhotos?: IPhoto[];
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
}

const Folder: FC<IProps> = ({ allPhotos, handleUpload, handleClick }) => (
  <Section>
    <div>
      {allPhotos && allPhotos.length > 0 ? (
        <PhotosList>
          {allPhotos.map((el, i) => (
            <PhotoEl key={i}>
              <img src={el.iconPhotoUrl} alt={`Photo ${i + 1}`} />
            </PhotoEl>
          ))}
        </PhotosList>
      ) : (
        "There are no photos!"
      )}
    </div>
    <input
      type="file"
      name="photos"
      accept=".jpg,.jpeg,.png"
      multiple
      id="file-input"
      // ref={fileInputRef}
      onChange={handleUpload}
      style={{ display: "none" }}
    />
    <BtnContainer>
      {" "}
      <UploadBtn type="submit" onClick={handleClick}>
        Upload photo
      </UploadBtn>
    </BtnContainer>
  </Section>
);

export default Folder;

// const Folder: FC = () => {
//   const [allPotos, setAllPhotos] = useState<any>([]);
//   const { id } = useParams<string>();

//   useEffect(() => {
//     if (id !== undefined) {
//       fetchAllPhotos(id)
//         .then(({ photos }) => {
//           setAllPhotos([...allPotos, ...photos]);
//         })
//         .catch((err) => console.log(err));
//     }
//   }, [id]);

//   console.log(allPotos);

//   const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;

//     if (id === undefined) {
//       return;
//     }

//     if (files) {
//       const uploadedPhotos = await uploadPhoto(id, files);
//       return uploadedPhotos;
//     }
//   };

//   const handleClick = () => {
//     const fileInput = document.getElementById("file-input");

//     if (fileInput) {
//       fileInput.click();
//     }
//   };

//   return (
//     <section>
//       <div>
//         {allPotos?.length > 0 ? (
//           <PhotosList>
//             {allPotos.map((el: any, i: any) => (
//               <PhotoEl key={i}>
//                 <img
//                   src={el.iconPhotoUrl}
//                   // width="50"
//                   // height="50"
//                   alt={`Photo ${i + 1}`}
//                 />
//               </PhotoEl>
//             ))}
//           </PhotosList>
//         ) : (
//           "There are not photos!"
//         )}
//       </div>
//       <input
//         type="file"
//         name="photos"
//         accept=".jpg,.jpeg,.png"
//         multiple
//         id="file-input"
//         onChange={handleUpload}
//         style={{ display: "none" }}
//       />
//       <button type="submit" onClick={handleClick}>
//         Upload photo
//       </button>
//     </section>
//   );
// };

// export default Folder;
