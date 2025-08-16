import axiosClient from "../ApiClient";

const CategoryApi = {
      getCategoryLength(){
            const url = `subcategories`
            return axiosClient.get(url)
      },
      getCategory(payload){
            const url = `subcategories?page=${payload.page}&limit=${payload.limit}`
            return axiosClient.get(url)
      },
      addCategory(payload){
            const url = "subcategories"
            return axiosClient.post(url,payload)
      },
      editCategory(payload){
            const url = `subcategories/${payload}`
            return axiosClient.patch(url)
      },
      deleteCategory(payload){
            const url = `subcategories/${payload}`
            return axiosClient.delete(url)
      }
}
export default CategoryApi