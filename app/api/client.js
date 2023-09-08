import { create } from "apisauce";

export const rootURL = "";

const apiClient = create({
    baseURL:"https://student-manager-1.vercel.app/api/",
    // https://student-manager-1.vercel.app/api/student
    headers:{
        'Content-Type':'application/json',
          accept: 'application/json',
      }
})

export default apiClient;