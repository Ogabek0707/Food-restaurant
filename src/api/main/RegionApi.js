import axiosClient from "../ApiClient";

const RegionApi = {
      getRegionLength(){
            const url = `region`
            return axiosClient.get(url)
      },
      getRegion(payload){
            const url = `region?page=${payload.page}&limit=${payload.limit}`
            return axiosClient.get(url)
      },
      addRegion(payload){
            const url = "region"
            return axiosClient.post(url,payload)
      },
      editRegion(payload) {
        console.log(payload);
        const url = `region/${payload.regionId}`;
        const token = localStorage.getItem('access_token');
      
        return axiosClient.patch(url, {
          name: payload.name
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      },
      deleteRegion(payload){
            const url = `region/${payload}`
            return axiosClient.delete(url)
      }
}
export default RegionApi