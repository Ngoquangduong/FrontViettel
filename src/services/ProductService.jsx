import axios from "./customize_axios";
const fetchAllProduct  = (page)=>{
return axios.get(`/api/product?page=${page}`)
}

//orther function in here


export {fetchAllProduct};
