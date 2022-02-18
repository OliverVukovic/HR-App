import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchQuestionsData = (questionsId) => {
    // console.log(questionsId)
    return axios.get(`https://strapi-internship-hr-app.onrender.com/api/questions/${questionsId}`)
}
// const editQuestions = (questionsId) => {
//     // console.log(questionsId)
//     return axios.post(`https://strapi-internship-hr-app.onrender.com/api/questions/${questionsId}`)
// }
// export const useQuestionsDataData = (onSuccess, onError) => {
//     return useQuery('questions', fetchQuestionsData, {
//         onSuccess,
//         onError,
//     })
// }
export const useQuestionsData = (questionsId) => {
    const queryClient = useQueryClient()
    return useQuery(['questios', questionsId], () => fetchQuestionsData(questionsId))
}
