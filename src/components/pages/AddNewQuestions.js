import React , {useState} from 'react'
import HeaderLog from '../layout/HeaderLog';
import LeftBar from '../layout/LeftBar';
import './AddNewQuestions.css';

function AddNewQuestions() {
  const [ title , setTitle] = useState('');
  const [ body , setBody] = useState('');
  const  [ id, setId ] = useState('');

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
                    key={id}
                    value={title}
                    onChange={(e)=>
                      setTitle(e.target.value)}
                  />

                  <p className="title-questions-text">Questions type</p>
                  
                  <select 
                    className="section-options"
                    value={body}
                    onChange={(e) => 
                      setBody(e.target.value)}
                  >
                    <option value='Text'>Text</option>
                    <option value='Long text'>Long text</option>
                    <option value='Image'>Image</option>
                  </select>

                <div className="btn-save-right">
                  <button className="btn-save-add-new">
                    Save
                  </button>
                </div>
            </form>
          </div> 
        </div>
    </div>
  )
}

export default AddNewQuestions









































// import React from 'react';
// import './Questions.css';

// function QuestionsItem() {
//   return (
//   <div className='questions-field'>
//       <div className='arrows'>
//           <img className='arr-up'>

//           </img>
//           <img className='arr-down'>
              
//           </img>
//       </div>

//       <div className='text'>
//         <p>Question 1 - Text</p> {/* ovde treba uraditi set za promenu broja pitanja i set za promenu naziva texta  */}
//         <h3>Do You have any pets</h3>  {/* ovde treba uraditi set za edit texta  */}
//       </div>

//       <div className='buttons'>
//           <button>
//             Edit
//           </button>
//           <button>
//             Delete
//           </button>
//       </div>
//   </div>
// )}

// export default QuestionsItem;
