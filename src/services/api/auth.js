import axios from "axios";

export const login = async(payload) => {
    console.log(payload)
    try {
        const response = await axios(
            {
                method: "POST",
                url: "https://strapi-internship-hr-app.onrender.com/api/auth/local",
                data: {
                    "identifier": payload.email,
                    "password": payload.password
                }
            }
        )
        return response.data

    } catch(error) {
        console.log(error)
    }
}

export const register = async(payload) => {
    console.log(payload)
    try {
        const response = await axios(
            {
                method: "POST",
                url: "https://strapi-internship-hr-app.onrender.com/api/auth/local/register",
                data: {
                    "username": payload.username,
                    "identifier": payload.email,
                    "password": payload.password,
                }
            }
        )
        return response.data

    } catch(error) {
        console.log(error)
    }
}

export const uploadPhoto = async(image) => {
    console.log(image)
    try {
        const response = await axios(
            {
                method: "POST",
                url: "https://strapi-internship-hr-app.onrender.com/api/upload",
                data: {
                    "profilePhoto": image.id
                }
            }
        )
        return response.data

    } catch(error) {
        console.log(error)
    }
}

export const createNewProfile = async(payload) => {
    console.log(payload)
    try {
        const response = await axios(
            {
                method: "POST",
                url: "https://strapi-internship-hr-app.onrender.com/api/profiles",
                data: {
                    "username": payload.username,
                    "identifier": payload.email,
                    "password": payload.password,
                    "profilePhoto": '',
                    "company": payload.id 
                }
            }
        )
        return response.data

    } catch(error) {
        console.log(error)
    }
}