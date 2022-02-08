import React , {useState} from 'react'
import HeaderLog from '../layout/HeaderLog';
import LeftBar from '../layout/LeftBar';
import './AddNewQuestions.css';

function AddNewQuestions() {
  const [ title , setTitle] = useState('');
  const [ body , setBody] = useState('');
  // const [ author , setAuthor] = useState('mario')
  // const [isPending, setIsPending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
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
                          value={title}
                          onChange={(e)=>setTitle(e.target.value)}
                          />
                          <p className="title-questions-text">Questions type</p>
                        <select 
                        className="section-options"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        >
                          <option value='Text'>Text</option>
                          <option value='Long text'>Long text</option>
                          <option value='Image'>Image</option>
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
