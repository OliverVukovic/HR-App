import axios from "axios";


axios.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		if (token) {
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
    console.log(image)
    try {
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
                    "name": "",
                    // "company": '',
                    "profilePhoto": ''
                }
            }
        )
        return response.data

    } catch(error) {
        console.log(error)
    }
}