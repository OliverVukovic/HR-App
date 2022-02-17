import axios from "axios";


axios.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
        console.log(token)
    
		if (token) {
            console.log("usao u sansu!")
			config.headers.Authorization = `Bearer ${token}`; 
		}
		return config;
	},
	(error) => {
		console.log(error);
	}
);


// LOGIN
export const login = async(payload) => {
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

    } catch(error) {
        console.log(error)
    }
}

// REGISTER
export const register = async(payload) => {
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
              if (response.data.jwt) {
                const token = response.data.jwt
                localStorage.setItem("token", token) 
              }
        return response.data

    } catch(error) {
        console.log(error)
    }
}



// export const logout = async(payload) => {
//     try {
//         const response = await axios({
//                 method: "POST",
//                 url: "https://strapi-internship-hr-app.onrender.com/api/auth/local/home",
//                 data: {
//                     // "username": payload.username,
//                     // "email": payload.email,
//                     // "password": payload.password,
//                 }
//             })
//               if (response.data.jwt) {
//                 const token = response.data.jwt
//                 localStorage.removeItem("token", token) 
//               }
//         return response.data

//     } catch(error) {
//         console.log(error)
//     }
    
// }




export const uploadPhoto = async (image) => {
    try {
        console.log(image)
        // const response = await axios(
        //     {
        //         method: "POST",
        //         url: "https://strapi-internship-hr-app.onrender.com/api/upload",
        //         data: {
        //             "profilePhoto": image,
        //         },
        //         headers: {
        //             const response = await axios.post(`${process.env.REACT_APP_BASEURL}/api/upload`, image, {
        //                 headers: {
        //                     "Content-Type": "multipart/form-data",
        //                 },
        //             });
        //         } 
                
        //     }
        // )
        const response = await axios({
                method: "POST",
                url: "https://strapi-internship-hr-app.onrender.com/api/upload",
                data: image,
                headers: {
                    "Content-Type": "multipart/form-data"
            }
        })
        // .post("https://strapi-internship-hr-app.onrender.com/api/upload", image, {
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //     },
        // });
        return {payload: response.data}

    } catch(error) {
        console.log(error)
    }
}


// const response = await axios.post(`${process.env.REACT_APP_BASEURL}/api/profiles`, {
//     data: data,
// });



export const createProfile = async (payload) => {
    try {
        console.log("USLI SMO U CREATE NEW PROFILE");
        // const response = await axios(
        //     {
        //         method: "POST",
        //         url: "https://strapi-internship-hr-app.onrender.com/api/profiles",
        //         data: {payload}
        //         // {
        //             // "name": "",
        //             // "company": '',
        //             // "profilePhoto": ''
        //         // }
        //     }
        // )
        const response = await axios.post("https://strapi-internship-hr-app.onrender.com/api/profiles", {data: payload});
        console.log(response)
        return response.data

    } catch(error) {
        console.log("ERRORRR createNewProfile")
        console.log(error)
        return error;
    }
}


export const fetchProfile = async (id) => {
    try {
        const response = await axios(
            {
                method: 'GET',
                // url: "https://strapi-internship-hr-app.onrender.com/api/profiles?filters[user][id][$eq]=430&populate=*"
                url: `https://strapi-internship-hr-app.onrender.com/api/profiles?filters[user][id][$eq]=${id}&populate=*`
            }
        )


        // .get(`https://strapi-internship-hr-app.onrender.com/api/profiles?filters[user][id][$eq]=489&populate=user`);
        console.log(response);
        return response;
    } catch (error) {
        return error;
    }
};

export const createNewCompany = async (payload) => {
    try {
        console.log("Usao sam u createNewCompany");
        console.log(payload);
        const response = await axios(
            {
                method: 'POST',
                url: `https://strapi-internship-hr-app.onrender.com/api/companies`,
                data: payload
            }
        )
        console.log(response);
        return response.data;
    }
    catch(error) {
        console.log(error);
        return error;
    }
}