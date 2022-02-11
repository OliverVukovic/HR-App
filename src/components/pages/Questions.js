import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import HeaderLog from '../layout/HeaderLog';
import LeftBar from '../layout/LeftBar';
import '../pages/Questions.css'
import  {Spinner} from '../Spiner';


function Questions() {
    
    let i = 1;
    const [posts, setPosts] = useState([])
    const [spiner, setSpiner] = useState(false)
    useEffect(() => {
        axios.get('https://strapi-internship-hr-app.onrender.com/api/questions?populate=*')
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [posts])
    const handleClick = (id) => {
        setSpiner(true)
        axios.delete(`https://strapi-internship-hr-app.onrender.com/api/questions/${id}` , {
            data: {...posts}
    
        }).then((res) => {
            setSpiner(false)
        })
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
                    {spiner && <div className='spinner-questions'><Spinner /></div>}
                    {posts.data?.map((quest) => (

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
                                <button className="btn-delete btn button" onClick={()=>handleClick(quest.id)}>Delete</button>
                            </div>

                        </div>
                    ))}
                </div>  
            </div>
    </div>
  )
}

export default Questions