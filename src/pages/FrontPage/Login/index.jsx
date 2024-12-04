import { useState, useEffect , useContext } from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import login_image_2 from '../../../assets/images/login_image_2.png';
import FrontLayout from '../../../layout/Frontpage';
import { useAuth } from '../../../provider/AuthContext';
import Button from '../../../themes/pharmacy/Button';

function Login() {
    const { authState } = useAuth();
    const [username, setUsername] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState('cityslicka');
    const [selectedRole, setSelectedRole] = useState('Staff');
    const [showPassword, setShowPassword] = useState(false);
  
    const [error, setError] = useState({value: "" , isShow : false});
    const navigate = useNavigate();

    const loginValidation = async (event) => {
        event.preventDefault();
        
        await authState.login(  username, password); 
    };


    useEffect(() => {
        //import( './Login.css');
    }, []);


    return (
      
        <FrontLayout navmenu={false} footer={true}>
        <div className='d-flex align-items-center justify-content-center custom-login'>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center custom-col">
            <div className="header-title">
                <h1>Welcome to Revive <br/> Pharmacy Portal</h1>
                <br />

            </div>
            <div className='bg-image'>
                <img className='img-fluid login_image' src={login_image_2} alt="Login" />
            </div>
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="card p-4 login-form-wrap" style={{ width: '450px' }}>
                <h2 className="text-left mb-4">{selectedRole === 'Staff' ? 'Staff Login' : 'Admin Login'}</h2>
                {(error.value !== "" && error.isShow === true) && <div className="alert alert-danger">{error.value}<div className={"close-quick-alert"} onClick={()=>setError({...error , isShow:false})}></div></div>}
                <form onSubmit={loginValidation}>

                    <label htmlFor="username">Username</label><br />
                    <div className="form-group mb-3 ">
                        <input
                            type="text"
                            id="username"
                            className="form-control-lg w-100 mb-2"
                            value={username}
                            // placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        
                    </div>
                    <label htmlFor="password">Password</label><br />
                    <div className="form-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="form-control-lg w-100"
                            value={password}
                            // placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group group-field-password">
                        <input
                            type="checkbox"
                            id="showPassword"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        /> &nbsp; 
                        <label htmlFor="showPassword">Show Password</label>
                        <a style={{cursor: "pointer"}} className='float-end' onClick={()=>navigate("/forgot-password")}>Forgot Password?</a>
                    </div>
                    <div className='d-flex'>
                        {/* <div className="d-flex mb-3 mr-3">
                            <h6>
                                <select
                                    id="branch"
                                    className="form-control-sm"
                                    value={selectedBranch}
                                    onChange={(e) => setSelectedBranch(e.target.value)}
                                >
                                    <option value="">Branch</option>
                                    {branches.map((branch) => (
                                        <option key={branch.id} value={branch.branch_name}>
                                            {branch.branch_name}
                                        </option>
                                    ))}
                                </select>
                            </h6>
                        </div> */}
                        <div className="d-flex">
                            <h6>
                                <select
                                    id="role"
                                    className="form-control-sm"
                                    value={selectedRole}
                                    onChange={(e) => setSelectedRole(e.target.value)}
                                >

                                    <option value="Staff">Staff</option>
                                    <option value="Admin">Admin</option>

                                </select>
                            </h6>
                        </div>
                    </div>
                    <div className='d-flex justify-content-left mt-1'>
                        <Button type="submit" variant="primary">Login</Button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </FrontLayout>
    );
}

export default Login;
