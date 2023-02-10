import React from "react";
import { Route, Routes} from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Register from "../Register/Register";
import Login from "../Login/Login";
import FormEmailRequest from "../FormEmailRequest/FormEmailRequest";
import FormPasswordRequest from "../FormPasswordRequest/FormPasswordRequest";
import PasswordUpdate from "../PasswordUpdate/PasswordUpdate";
import RecoveryPassword from "../RecoveryPassword/RecoveryPassword";
import PopupTooltip from "../PopupTooltip/PopupTooltip";


function App() {

// const[isInfoTooltip, setIsInfoTooltip] = useState(false);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/emailform" element={<FormEmailRequest />}/>
        <Route path="/passwordform" element={<FormPasswordRequest />}/>
        <Route path="/updatepassword" element={<PasswordUpdate />}/>
        <Route path="/recoverypassword" element={<RecoveryPassword/>}/>
        <Route path="/info" element={<PopupTooltip/>}/>
      </Routes>
    </div>
  );
}

export default App;
