import apiClient from "./client";

const endpoint = "student/";
const getStudents = ()=> apiClient.get(endpoint);
const addStudent = (data,onUploadProgress) => {
    console.log(data)

    return apiClient.post(endpoint,data,{
        onUploadProgress: (progress) =>
          onUploadProgress(progress.loaded / progress.total)
      })
}

const updateStudent = (data,onUploadProgress) =>{
    const {_id,...uData} = data
    // console.log(_id)
    // console.log(uData)
    // console.log(uData.image)
    return  apiClient.put(`${endpoint}${data._id}`, uData ,{
        onUploadProgress: (progress) =>
          onUploadProgress(progress.loaded / progress.total)
      });
}

const deleteStudent = (id)=>{
    return   apiClient.delete(`${endpoint}${id}`);
}
export default {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
} 