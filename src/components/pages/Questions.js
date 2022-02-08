import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import HeaderLog from '../layout/HeaderLog';
import LeftBar from '../layout/LeftBar';
import '../pages/Questions.css'

function Questions() {
    const [questions , setQuestions] = useState ([
        {title: 'Prvo pitanje' , body: 'Da li si jeo govna kad si bio mali?' , id: 1},
        {title: 'Drugo pitanje' , body: 'Da li si jeo govna kad si bio mali?' , id: 2},
        {title: 'Trece pitanje' , body: 'Da li si jeo govna kad si bio mali?' , id: 3}
    ])
    
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
                        {/* <button className="add-questions"> + Add new questions</button> */}
                    </div>
                    {questions.map((quest) => (
                        <div className="questions-place" key={quest.id}>
                            <div className="questions-place-left">
                                <h3 className="questions-title">{quest.title}</h3>
                                <p className="questions-p">{quest.body}</p>   
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

export default Questions
