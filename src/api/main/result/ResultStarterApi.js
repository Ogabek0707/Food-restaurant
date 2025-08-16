import axiosClient from "../../ApiClient";

const ResultStarterApi = {
        getResultStarter(payload){
            console.log(payload);
            const url = `user-test-result?testType=${payload.testType}&page=${payload.page}&limit=${payload.limit}`
            return axiosClient.get(url)
      },
      addCategory(payload){
            const url = "category"
            return axiosClient.post(url,payload)
      },
      deleteCategory(payload){
            const url = `category/${payload}`
            return axiosClient.delete(url)
      },
      editCategory(payload){
            const url = "category"
            return axiosClient.put(url,payload)
      }
}
export default ResultStarterApi