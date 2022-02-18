import { useMutation, useQuery} from "react-query";
import axios from "axios";
import {Link} from 'react-router-dom'
import HeaderLog from "../layout/HeaderLog";
import LeftBar from "../layout/LeftBar";
import { Spinner } from "../Spiner";
import PageNotFound from "../helpers/PageNotFound";


const fetchPostman = () => {
    return axios.get('https://strapi-internship-hr-app.onrender.com/api/questions?populate=*&pagination[pageSize]=1000')
}

const deleteQuestions = async(id) => {
    console.log('delete')
    await axios.delete(`https://strapi-internship-hr-app.onrender.com/api/questions/${id}`)
    
}


export const QuestionsTest = () => {
    let i= 1;
    const {isLoading , data:questions, error, refetch } = useQuery('questions', fetchPostman, {
        // refetchIntervalInBackground: true,
        refetchOnWindowFocus: true
    })
    const {data, isLoading:loading, mutateAsync:deletequestions} = useMutation(async (id) => { 
        await deleteQuestions(id)},
        {
            onSuccess:(data) => {
                console.log(data)
                refetch()
            }
        }
    )
    
    if(isLoading) {
        return <Spinner></Spinner>
    }
    if(error){
        return <div className="error-message">
            <div className="error-place">
        <Link to="*"><PageNotFound/></Link>
            </div>
        </div>
    }
    return (
        <div>
            <HeaderLog />
            <div className="questions-container">
                <LeftBar />
                <div className="questions-right-side">
                    <div className="title-btn">
                        <h2 className="questions-title-big">Questions</h2>
                        <Link  to="/addquestions">
                            <button className="add-questions button"> + Add new questions</button>
                        </Link>    
                    </div>
                    {questions?.data.data.map((quest) => (
                        <div className="questions-place" key={quest.id}>
                            <div className="questions-place-left">
                                <div className="questions-place-start">
                                <h3 className="questions-title">Questions {i++} -</h3>
                                <p className="questions-p"> {quest.attributes?.type}</p>  
                                </div>
                                <div className='sa'>
                                <p className="questions-p">{quest.attributes?.text}</p> 
                                </div> 
                            </div>
                            <div className="questions-place-right">
                                <Link to={`/questions/${quest.id}/edit`}>
                                <button className="btn-edit btn button">Edit</button>
                                </Link>
                                <button onClick={async() => await deletequestions(quest.id)} className="btn-delete btn button">Delete</button>
                            </div>
                        </div>
                    ))}
                </div> 
            </div>
        </div>
    )
}
