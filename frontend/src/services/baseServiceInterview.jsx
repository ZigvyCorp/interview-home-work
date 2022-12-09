import axios from "axios"
import { DOMAIN_INTERVIEW } from "../util/constants/settingSystem"
const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
export class baseServiceInterview {

    put = (url, model) => {
        return axios({
            url: `${DOMAIN_INTERVIEW}/${url}`,
            method: "PUT",
            data: model,
            config
        })
    }

    post = (url, model) => {
        return axios({
            url: `${DOMAIN_INTERVIEW}/${url}`,
            method: "POST",
            data: model,
            config
        })
    }


    get = (url) => {
        return axios({
            url: `${DOMAIN_INTERVIEW}/${url}`,
            method: "GET",
            config
        })
    }
    delete = (url) => {
        return axios({
            url: `${DOMAIN_INTERVIEW}/${url}`,
            method: "DELETE",
            config
        })
    }
}