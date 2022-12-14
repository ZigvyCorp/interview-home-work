import Axios from "axios";
import { DOMAIN } from "../utils/settingSystem";

export class baseService {
	put = (url, model) => {
		return Axios({
			url: `${DOMAIN}${url}`,
			method: "PUT",
			data: model,
		});
	};

	post = (url, model) => {
		return Axios({
			url: `${DOMAIN}${url}`,
			method: "POST",
			data: model,
		});
	};

	get = (url) => {
		return Axios({
			url: `${DOMAIN}${url}`,
			method: "GET",
		});
	};

	delete = (url) => {
		return Axios({
			url: `${DOMAIN}${url}`,
			method: "DELETE",
		});
	};
}
