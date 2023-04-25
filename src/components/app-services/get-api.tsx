import axios from 'axios';

const getApiData = (url: string, authentication: any, params?: any, contentType?: string): any => {
    // const token = sessionStorage.getItem("ptrui_userToken");
    const baseUrl = "https://localhost:44303/";
    url = `${baseUrl+"api/"}${url}`;

    if (!contentType)
        contentType = "application/json";

    return axios.get(
        url, {
        headers: { 'Content-Type': contentType }, //, Authorization: `Bearer ${token}`
        params: params
    })
        .then(function (response: any) {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            
            if (error?.response?.status === 401) {
                // sessionStorage.removeItem("ptrui_userToken");
                // authentication.setIsAuth(false);
                // authentication.clearToken();
                // authentication.clearUser();
            }
        });
}

export default getApiData;