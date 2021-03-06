import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Page/About/About';
import Appointment from './Page/Appointment/Appointment';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import RequireAuth from './Page/Login/RequireAuth';
import SignUp from './Page/Login/SignUp';
import Navbar from './Page/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Page/Dashboard/Dashboard';
import MyAppointments from './Page/Dashboard/MyAppointments';
import MyReview from './Page/Dashboard/MyReview';
import MyHistory from './Page/Dashboard/MyHistory';
import Users from './Page/Dashboard/Users';
import AddDoctor from './Page/Dashboard/AddDoctor';
import RequireAuthAdmin from './Page/Login/RerquireAuthAdmin';
import ManageDoctors from './Page/Dashboard/ManageDoctors';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-6'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='users' element={<RequireAuthAdmin><Users></Users></RequireAuthAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAuthAdmin><AddDoctor></AddDoctor></RequireAuthAdmin>}></Route>
          <Route path='manageDoctors' element={<RequireAuthAdmin><ManageDoctors></ManageDoctors></RequireAuthAdmin>}></Route>
        </Route>

        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
