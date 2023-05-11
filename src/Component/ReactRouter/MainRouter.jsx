import React from 'react'
import { Route,Routes} from 'react-router-dom'
import { Home } from '../../Pages/Home/Home'
import Login from '../Login/Login'
import Register from '../Registration/Register'
import Admnhome from '../../Pages/Home/Admnhome'
import Stdhome from '../../Pages/Home/Stdhome'
import Compnyhom from '../../Pages/Home/Compnyhom'
import Update from '../../Pages/Student/Update'
import View_Company from '../../Pages/Student/View_Company'
import View_Ntfcn from '../../Pages/Student/View_Ntfcn'
import Apply_Exam from '../../Pages/Student/Apply_Exam'
import View_Result from '../../Pages/Student/View_Result'
import Upload_Exam from '../../Pages/Company/Upload_Exam'
import Notifications from '../../Pages/Company/Notifications'
import Abt from '../Abt'
import Std_reg from '../Registration/Std_reg'
import Upload_Result from '../../Pages/Company/Upload_Result'
import Post_upload from '../../Pages/Company/Post_upload'
import Std_update from '../../Pages/Std_update'
import Upstcmp from '../Upstcmp'
import Intrvw from '../../Pages/Company/Intrvw'
const MainRouter = () => {
  return (
    <>
        <Routes>
           
            < Route path='/' element={<Home/>}/>
            < Route path='/aboutus' element={<Abt/>}/>

            < Route path='/login' element={<Login/>}/>
            < Route path='/stdregistration' element={<Std_reg/>}/>
            < Route path='/registration' element={<Register/>}/>

            < Route path='/Admin' element={<Admnhome/>}/>
            < Route path='/postupload' element={<Post_upload/>}/>

            
            < Route path='/Student' element={<Stdhome/>}/>
            < Route path='/Updateprfl' element={<Update/>}/>
            < Route path='/ViewNotification' element={<View_Ntfcn/>}/>
            < Route path='/applyforexam' element={<Apply_Exam/>}/>
            < Route path='/viewResult' element={<View_Result/>}/>
            < Route path='/ViewCompany' element={<View_Company/>}/>
            < Route path='/Company' element={<Compnyhom/>}/>
            < Route path='/uploadexam' element={<Upload_Exam/>}/>
            < Route path='/Int' element={<Intrvw/>}/>

            < Route path='/ntfcn' element={<Notifications/>}/>
            < Route path='/uploadrslt' element={<Upload_Result/>}/>
            < Route path='/abc' element={<Std_update/>}/>
            < Route path='/posupload' element={<Upstcmp/>}/>
            







       
        </Routes>
     </>
  )
}

export default MainRouter