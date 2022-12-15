import React, { useEffect, useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import { getAllVideos, removeVideo } from "../../../http/courseApi";
import { listVideos } from "../../../utils/adminHeads";
import {Context} from '../../../index'
import ModalEditVideo from "./ModalEditVideo";
import { observer } from "mobx-react-lite";

const AdminTableVideo = observer(() => {
  const [videoList, setVideoList] = useState([]);
  const [removeBtn, setRemoveBtn] = useState('btn btn-danger')
  const [modalEditCourseVisible, setModalEditCourseVisible] = useState(false)
  const [currentVideo, setCurrentVideo] = useState({})
  const { user } = useContext(Context) 
  useEffect(() => {
    (async function () {
      await getAllVideos(1).then((data) => {
        setVideoList(data.rows);
      });
    })();
    if (user.user.role !== 'SUPERADMIN'){
      setRemoveBtn('d-none')
    }
  }, []);
  if (user.user.role !== 'SUPERADMIN'){
    setRemoveBtn('d-none')
  }
  const removeVideoFunc = async(id)=>{
    if (user.user.role === 'SUPERADMIN'){
      await removeVideo(id).then((data)=> window.location.reload())
    }
  }
  const editWideo = (video)=>{
    setCurrentVideo(video)
    setModalEditCourseVisible(true)
  }
  const updateState = async ()=>{
    await getAllVideos(1).then((data) => {
      setVideoList(data.rows);
    });
  }
  console.log(videoList);
  return (
    <div className="admin-table w-100 p-3 mt-4 text-center">
      <ModalEditVideo updateState={updateState} video={currentVideo} show={modalEditCourseVisible} onHide={() => setModalEditCourseVisible(false)}/>
      <Table bordered hover responsive>
        <thead>
          <tr>
            {listVideos?.map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {videoList?.map((i, index) => (
            <tr key={index}>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.author}</td>
              <td>{i.createdAt}</td>
              <td>
                {
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => editWideo(i)}
                      className="btn btn-primary mx-1"
                      title="Üýtgetmek"
                    >
                      <i className="fas fa-cogs"></i>
                    </button>
                    <button
                      onClick={() => removeVideoFunc(i.id)}
                      disabled={user.user.role !== "SUPERADMIN"}
                      className={removeBtn}
                      title="Pozmak"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
});

export default AdminTableVideo;
