const Wrapper = props => {
    return props.children;
};

export default Wrapper;









// export const fetchProfile = async (id) => {
//     try {
//         const response = await axios(
//             {
//                 method: 'GET',
//                 url: "https://strapi-internship-hr-app.onrender.com/api/profiles?filters[user][id][$eq]=${object.id}&populate=*"
//             }
//         )
//                 // .get(`https://strapi-internship-hr-app.onrender.com/api/profiles?filters[user][id][$eq]=489&populate=user`);
//         console.log(response);
//         return response;
//     } catch (error) {
//         return error;
//     }
// };





