import axios from "axios";


axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        // console.log(token)

        if (token) {
            // console.log("usao u sesnaesterac!")
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        console.log(error);
    }
);


// LOGIN
export const login = async (payload) => {
    console.log(payload)
    try {
        const response = await axios({
            method: "POST",
            url: "https://strapi-internship-hr-app.onrender.com/api/auth/local",
            data: {
                "identifier": payload.email,
                "password": payload.password
            }
        });
        return response.data

    } catch (error) {
    }
}

// REGISTER
export const register = async (payload) => {
    console.log(payload)
    try {
        const response = await axios({
            method: "POST",
            url: "https://strapi-internship-hr-app.onrender.com/api/auth/local/register",
            data: {
                "username": payload.username,
                "email": payload.email,
                "password": payload.password,
            }
        })
        return response.data

    } catch (error) {
    }
}
export const uploadPhoto = async (image) => {
    try {
        const response = await axios({
            method: "POST",
            url: "https://strapi-internship-hr-app.onrender.com/api/upload",
            data: image,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        return { payload: response.data }
    } catch (error) {
    }
}

export const createProfile = async (payload) => {
    try {
        console.log("USLI SMO U CREATE NEW PROFILE", payload);

        const response = await axios(
            {
                method: "POST",
                url: "https://strapi-internship-hr-app.onrender.com/api/profiles",
                data: {
                    data: payload
                }
            }
        )
        return response.data

    } catch (error) {
        return error;
    }
}
export const fetchProfile = async (id) => {
    try {
        if(!id) {
            return
        }
        return axios(
            {
                method: 'GET',
                url: `https://strapi-internship-hr-app.onrender.com/api/profiles?filters[user][id][$eq]=${id}&populate=*&pagination[pageSize]=1000`
            }
        )
    } catch (error) {
        return error;
    }
};

export const createNewCompany = async (payload) => {
    try {
        const response = await axios(
            {
                method: 'POST',
                url: `https://strapi-internship-hr-app.onrender.com/api/companies`,
                data: payload
            }
        )
        return response.data;
    }
    catch (error) {
        return error;
    }
}
