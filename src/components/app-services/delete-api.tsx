import axios from 'axios';

let deleteApiData = (url: string, authentication: any, params?: any, contentType?: string): any => {
    // const token = sessionStorage.getItem("ptrui_userToken");
     const baseUrl = window.gbl_React_App_Service_URL;
     url = `${baseUrl+"api/"}${url}`;

    if (!contentType)
        contentType = "application/json";

    return axios.delete(url, {
        headers: { 'Content-Type': contentType }, //, Authorization: `Bearer ${token}
        params: params
    }).then(function (response: any) {
        return response.data;
    }).catch((error:any) => {
        console.log(error);

            if (error?.response?.status === 401) {
                // sessionStorage.removeItem("ptrui_userToken");
                // authentication.setIsAuth(false);
                // authentication.clearToken();
                // authentication.clearUser();
            }
        });
}

export default deleteApiData;