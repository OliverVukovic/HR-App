import React, { useState, useEffect } from "react";
import './Login.css';
import Header from "./layout/Header";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../redux/action/ActionCreators";



const Register = () => {

    // const newUser = useSelector((state) => state.newUser);
    // const error = useSelector((state) => state.error); 
    // const [ newFile, setNewFile ] = useState("Choose File")

    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');
    const [ photo, setPhoto ] = useState(null);
    const [ role, setRole ] = useState("company_user");

    const [formIsValid, setFormIsValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState(true);
   
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const statusCode = props.state.registerReducer.response === undefined ? 0 : props.state.registerReducer.response.status;

    
    useEffect(()=>{
        setFormIsValid(
            username.trim().length > 3
            && email.includes('@') 
            && password.trim().length > 5
        );
        // console.log(username, email, password)
        }, [ username, email, password ]);

    // useEffect(() => {
    //     if (newUser && newUser.id) {
    //         navigate('/home');
    //         setUsername('');
    //         setEmail('');
    //         setPassword('')
    //     }
    // }, [newUser]);



    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleRole = (event) => {
        setRole(event.target.value)
    }






    const [ company, setCompany] = useState('');
    const [ modal, setModal] = useState(false);
    // const  [ id, setId ] = useState('');

    // const handleComp = (event) => {
    //     event.preventDefault();
    // }



    
    
    const [badFormat, setBadFormat] = useState(false);

        // const [loading, setLoading] = useState(false);
    const handlePhoto = (event) => {
        const uploadPhoto = event.target.files[0];
        console.log(uploadPhoto);

        const photoType = [ "image/jpeg", "image/png", "image/gif" ];
        if (!photoType.some((type) =>
        uploadPhoto.type === type)
        && uploadPhoto !== null) {
            return setBadFormat(true);
        }
        setBadFormat(false);

        const photoData = new FormData();
        photoData.append("files", uploadPhoto);
        setPhoto(photoData)
    }
   
    const onRegister = (event) => {
        event.preventDefault()
        if (username.trim().length === 0 || !email.includes('@') || password.trim().length < 5) {
            console.log("Greska prilikom registrovanja")
            return errorMessage;
        } else {
        dispatch(actionCreators.registerUser({
            username,
            email,
            password,
            photo,
            company,
            role
        }));
        // if (statusCode === 200)

        navigate("/home")
        setUsername('');
        setEmail('');
        setPassword('');
        }
    };


    return (
        <div className="login-form">
            <Header />
            <main>
                <section>
                    <h2>
                        uTeam - Register
                    </h2>

                    <form className="form">
                        <div className="login-page">
                            <label className="title-email-pass">Username</label>
                            <input 
                                type='text' 
                                placeholder="Username"
                                value={username}
                                onChange={handleUsername}
                            />
                        </div>

                        <div className="login-page">
                            <label className="title-email-pass">Email</label>
                            <input 
                                type='email' 
                                placeholder="Email"
                                required
                                value={email}
                                onChange={handleEmail}
                            />
                        </div>

                        <div className="login-page">
                            <label className="title-email-pass">Password</label>
                            <input 
                                type='password' 
                                placeholder="Password"
                                required
                                value={password}
                                onChange={handlePassword}
                            />
                        </div>

                        <div className="login-page">
                            <label className="title-email-pass">Profile Photo</label>
                            <input className="choose-file"
                                type="file"
                                name="file"
                                // accept="image/*"
                                placeholder="Upload photo"
                                onChange={event => handlePhoto(event)}
                            />
                        </div>




                        <div className="login-page">
                            <label className="title-email-pass">Company</label>

                            <div className="company-flex">

                                <select 
                                    className="section-options"
                                    value={company}
                                    onChange={(event) => 
                                    setCompany(event.target.value)}
                                >
                                    <option value='Company 1'>Company 1</option>
                                    <option value='Company 2'>Company 2</option>
                                    <option value='Company 3'>Company 3</option>
                                </select>

                                <button className="button-company" 
                                onClick={() => setModal(true)}
                                >
                                    Add company
                                </button>

                            </div>

                            <div className="company-modal" style={{display : modal ? "flex" : "none"}}>
                                <label>Add new company name</label>
                                <input 
                                type="text"
                                placeholder="Enter company name"

                                />
                                
                                <label>Add slug</label>
                                <input 
                                type="text"
                                placeholder="Enter slug"
                                
                                />
                                <button className="button button-modal" 
                                onClick={() => setModal(false)}>Confirm</button>
                            </div>

                        </div>




                        <div className="login-page">
                            <p className="select-role">Select your role:</p>
                            <div className="radio-btn">
                                <div className="role">
                                    <input 
                                        type="radio" 
                                        value={"company_user"}
                                        name="role"
                                        onChange={handleRole}
                                    />
                                    <label className="admin-user">User</label>
                                </div>
                                <div className="role">
                                    <input 
                                        type="radio"
                                        value={"company_admin"}
                                        name="role"
                                        onChange={handleRole}
                                    />
                                    <label className="admin-user">Admin</label>
                                </div>
                            </div>
                        </div>

                        <div className="login-page__actions">  
                            <Link className="acc-text" to="/">
                                Already have an account?
                            </Link>
                            <button className="button" type="submit"
                                    onClick={onRegister}
                            >
                                Register
                            </button>

                        </div>
                        {!errorMessage && <div className="error-message">Check Your Data!</div>}

                        {/* {loading ? (
                            <h3>Loading...</h3>
                        ) : (
                            <img src="{image}"/>
                        )} */}
                    </form>
                </section>
            </main>
        </div>
    );
}

export default Register; 

// import React, { useState, useEffect } from "react";
// import './Login.css';
// import Header from "./layout/Header";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import * as actionCreators from "../redux/action/ActionCreators";




// const Register = () => {
//     // const newUser = useSelector((state) => 
//     //     state.newUser)
//     const [ username, setUsername ] = useState('');
//     const [ email, setEmail ] = useState('');
//     const [ password, setPassword] = useState('');
//     const [ photo, setPhoto ] = useState('');
//     const [ role, setRole ] = useState();
//     const [errorMessage, setErrorMessage] = useState(true)

//     // const error = useSelector((state) => state.error);
 
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

    

//     const onRegister = (event) => {
//         event.preventDefault()
        
//         if (username.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0) {
//             setErrorMessage(false)
//             return errorMessage
//         }
//         else{
//             dispatch(actionCreators.registerUser({
//                 username,
//                 email,
//                 password,
//                 photo,
//                 role
//             }));
            
//             navigate("/home")
//             setUsername ('');
//             setEmail ('');
//             setPassword('');
//         }
        
//     };

//     // useEffect(()=>{
//     //     console.log(username, email, password)
//     //     })
//     const handleUsername = (event) => {
//         setUsername(event.target.value)
//     }

//     const handleEmail = (event) => {
//         setEmail(event.target.value)
//     }

//     const handlePassword = (event) => {
//         setPassword(event.target.value)
//     }

//     const handlePhoto = (event) => {
//         setPhoto(event.target.value)
//         console.log(event.target.value)
//     }

//     const handleRole = (event) => {
//         setRole(event.target.value)
//     }



//     return (
//         <div className="login-form">
//             <Header />
//             <main>
//                 <section>
//                     <h2>
//                         uTeam - Register
//                     </h2>
//                     <form>
//                         <div className="login-page">
//                             <label className="title-email-pass">Username</label>
//                             <input 
//                                 type='text' 
//                                 placeholder="Username"
//                                 value={username}
//                                 onChange={handleUsername}
//                             />
//                         </div>
//                         <div className="login-page">
//                             <label className="title-email-pass">Email</label>
//                             <input 
//                                 type='email' 
//                                 placeholder="Email"
//                                 required
//                                 value={email}
//                                 onChange={handleEmail}
//                             />
//                         </div>
//                         <div className="login-page">
//                             <label className="title-email-pass">Password</label>
//                             <input 
//                                 type='password' 
//                                 placeholder="Password"
//                                 required
//                                 value={password}
//                                 onChange={handlePassword}
//                             />
//                         </div>
//                         <div className="login-page">
//                             <label className="inp-check-photo">Profile Photo</label>
//                             <input className="choose-file"
//                                 // placeholder={this.props.placeholderText}="Upload file"
//                                 type="file"
//                                 accept="image/*"
//                                 // value={photo}
//                                 onClick={handlePhoto}
//                             />
//                         </div>
//                         <div className="login-page">
//                             <p className="select-role">Select your role:</p>
//                             <div className="radio-btn">
//                                 <div className="role">
//                                     <input 
//                                         type="radio" 
//                                         // checked="cheked"
//                                         name="role"
//                                         onClick={handleRole}
//                                     />
//                                     <label className="admin-user">User</label>
//                                 </div>
//                                 <div className="role">
//                                     <input 
//                                         type="radio"
//                                         name="role"
//                                         onClick={handleRole}
//                                     />
//                                     <label className="admin-user">Admin</label>
//                                 </div>
                                
//                             </div>
//                         </div>
//                         <div className="login-page__actions">
//                             <Link className="acc-text" to="/">Already have an account?</Link>
                            
//                             <button type="submit"
//                                     onClick={onRegister}
//                             >
//                                 Register
//                             </button>
//                         </div>
//                         {/* <img src={photo} alt="slika" /> */}
//                         {/* {error.message && <div className="error-message">{error.message}</div>} */}
//                         {!errorMessage && <p className="error-message">Check Your Data!</p>}
//                     </form>
//                 </section>
//             </main>
//         </div>
//     );
// }

// export default Register; 