import axiosClient from "../ApiClient";

const StatisticsApi = {
      getStatistics(){
            const url = `statistics/regions`
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
export default StatisticsApi