import axios from 'axios';

let postApiData = (url: string, authentication: any, data?: any, contentType?: string, header?: string): any => {
    // const token = sessionStorage.getItem("ptrui_userToken");
    const baseUrl = "https://localhost:44303/";//window.gbl_React_App_Service_URL;
    url = `${baseUrl+"api/"}${url}`;
    let headers;

    if (!header)
        headers = {'Content-Type': contentType} //, Authorization: `Bearer ${token}`
    else
        headers = { 'Content-Type': contentType,UserName:data.UserName, Password:data.Password }

    if (!contentType)
        contentType = "application/json";

    return axios({
        method: 'POST',
        url: url,
        data: data,
        headers: headers,
    }).then(function (response: any) {
        return response.data;
    }).catch((error) => {
        console.log(error);

            if (error?.response?.status === 401) {
                // sessionStorage.removeItem("ptrui_userToken");
                // authentication.setIsAuth(false);
                // authentication.clearToken();
                // authentication.clearUser();
            }
        });
}

export default postApiData;
