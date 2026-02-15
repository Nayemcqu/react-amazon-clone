import axios from "axios";
import { BASE_URL } from "./constants";

const config={
    Headers:{
       "Content-Type":"application/json",
       "Accept":"application/jso" 
    }
}

export async function  callApi(resource){

const{data}=await axios.get(`${BASE_URL}/${resource}`,config)

return data;
}