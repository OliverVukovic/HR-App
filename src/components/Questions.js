import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import HeaderLog from './HeaderLog';
import LeftBar from './LeftBar';
import './Questions.css'

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
                            <button className="add-questions"> + Add new questions</button>
                        </Link>
                        {/* <button className="add-questions"> + Add new questions</button> */}
                    </div>
                    {questions.map((quest) => (
                        <div className="questions-place">
                            <div className="questions-place-left" key={quest.id}>
                                <h3 className="questions-title">{quest.title}</h3>
                                <p className="questions-p">{quest.body}</p>   
                            </div>
                            <div className="questions-place-right">
                                <button className="btn-edit btn">Edit</button>
                                <button className="btn-delete btn">Delete</button>
                            </div>

                        </div>
                    
                    ))}
                </div>  
            </div>
    </div>
  )
}

export default Questions
