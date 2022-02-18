import React, { useEffect, useState } from 'react'
import { useQuery, useMutation, useQueryClient  } from 'react-query'
import { useNavigate, useParams } from 'react-router'
import { useQuestionsData } from '../../hooks/useEditData'
import PageNotFound from '../helpers/PageNotFound'

import LeftBar from '../layout/LeftBar'
import { Spinner } from '../Spiner'
import './EditQuestions.css'
import axios from 'axios'
import HeaderLog from '../layout/HeaderLog'

function EditQuestions() {
  const navigate = useNavigate()
  const [text, setText] = useState()
  const [type, setType] = useState('text')
  const {questionsId} = useParams()
  const {isLoading, data, isError, error} = useQuestionsData(questionsId)

  const queryClient = useQueryClient()
  const addQuestion = useMutation(
  async (questionData) => {
    console.log(questionData)
    await axios({
      method: 'put',
      url: `https://strapi-internship-hr-app.onrender.com/api/questions/${questionsId}`,
      
      data: {
        data:{
        text: questionData.text,
        type: questionData.type,
        // order: lastOrder + 1
        }
      }
    });
  },
  {
    onMutate: (newData) => {
      console.log(newData)
    },
    onSettled: (data) => {
      queryClient.invalidateQueries('questions')
    },
  }
);
const handleSubmit = (e) => {
      e.preventDefault()
      navigate('/questions')
      addQuestion.mutate({
        text,
        type,
}) 

}
  if(isLoading){
    return <Spinner></Spinner>
  }
  if(isError){
    return <PageNotFound></PageNotFound>
  }

  return (
    <div>
      <HeaderLog />
      <div className="left-bar-companyinfo">
      <LeftBar />
      <div className="container-edit">
      <h2 className="title-add-new">Edit Questions</h2>
                  <form className="form-add-new" onSubmit={handleSubmit}>
                        <label className="title-questions-text">Questions text:</label>
                          <input
                          className= "input-add-text" 
                          type="text" 
                          required
                          
                          placeholder={data?.data.data.attributes.text}
                          onChange={(e)=>setText(e.target.value)}
                          />
                          <p className="title-questions-text">Questions type</p>
                        <select 
                        className="section-options"
                        value={data?.data.data.attributes.type}
                        onChange={(e) => setType(e.target.value)}
                        >
                          <option value='text'>Text</option>
                          <option value='long_text'>Long text</option>
                          <option value='image'>Image</option>
                        </select>
                        <div className="btn-save-right">
                        <button className="btn-save-add-new button">Save</button>
                        </div>
                  </form>
      </div>
      </div>
    </div>
  )
}

export default EditQuestions
