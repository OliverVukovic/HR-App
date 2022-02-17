import axios from 'axios';
import React , {useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import HeaderLog from '../layout/HeaderLog';
import LeftBar from '../layout/LeftBar';
import './AddNewQuestions.css';
import { useNavigate } from 'react-router';



function AddNewQuestions() {
  let navigate = useNavigate();
  const queryClient = useQueryClient()
  const [ text , setText] = useState('');
  const [ type , setType] = useState('text');

  const fetchQuestions = () => {
    return axios.get('https://strapi-internship-hr-app.onrender.com/api/questions?sort=order:DESC')
}
  const addQuestionsData = (quest) => {
    return axios.post('https://strapi-internship-hr-app.onrender.com/api/questions', quest)
  }
  const {data, isLoading, isError, error} = useQuery('questions', fetchQuestions)
  // console.log(data);
  const lastOrder = data?.data.data[0]?.attributes.order
  // console.log(lastOrder)
  const addQuestion = useMutation(
    async (questionData) => {
      await axios({
        method: 'post',
        url: `https://strapi-internship-hr-app.onrender.com/api/questions`,
        
        data: {
          data:{
          text: questionData.text,
          type: questionData.type,
          order: lastOrder + 1
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
  const {data: questionData, mutate:quest} = useMutation(addQuestionsData)
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/questions')
    // console.log({text, type})
    // const questions = {data:{text,type, }}
    // quest(questions)
    // console.log('dodato')
    // navigate('/questions')
  addQuestion.mutate({
          text,
          type, 
  })
  }
  return (
    <div>
      <HeaderLog />
            <div className="questions-add">
                <LeftBar />
                <div className="create">
                  <h2 className="title-add-new">Add new Questions</h2>
                  <form className="form-add-new" onSubmit={handleSubmit}>
                        <label className="title-questions-text">Questions text:</label>
                          <input
                          className= "input-add-text" 
                          type="text" 
                          required
                          value={text}
                          onChange={(e)=>setText(e.target.value)}
                          />
                          <p className="title-questions-text">Questions type</p>
                        <select 
                        className="section-options"
                        value={type}
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

export default AddNewQuestions
