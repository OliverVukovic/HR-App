import { useQuery } from "react-query";
import axios from "axios";
import {Link} from 'react-router-dom'
import HeaderLog from "../layout/HeaderLog";
import LeftBar from "../layout/LeftBar";
import { Spinner } from "../Spiner";


const fetchPostman = () => {
    return axios.get('https://strapi-internship-hr-app.onrender.com/api/questions?populate=*&pagination[pageSize]=1000')
}
let i= 1;
export const QuestionsTest = () => {
    const {isLoading , data:questions, error } = useQuery('questions', fetchPostman
    )
    if(isLoading) {
        return <Spinner></Spinner>
    }
    if(error){
        return <div className="error-message">
            <div className="error-place">
        <h2>Doslo je do greske prilikom ucitavanja podatka</h2>
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
                                <button className="btn-edit btn button">Edit</button>
                                <button className="btn-delete btn button">Delete</button>
                            </div>
                        </div>
                    ))}
                </div> 
           
            </div>
        </div>
    )
}
