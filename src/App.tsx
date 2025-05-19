// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import './App.css'
// import Register from './pages/Register';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import store, {persistor } from './state/store';
// import ProtectedRoute from './components/features/Auth/ProtectedRoute';
// import BankManager from './pages/BankManager';
// import SuperAdminDashboard from './pages/SuperAdminDashboard';
// import UserDashboard from './pages/UserDashboard';

// const App =() => {
//   return (
//     <Provider store={store} >
//       <PersistGate loading={null} persistor={persistor}>  
//       {/* Ensures that the persisted state is restored before rendering the app, preventing UI from rendering before the state is available. */}
//       {/* The loading={null} prop can be replaced with a spinner or some loading indicator while the state is being restored. */}
//    <Router>
//     <Routes>
//       <Route path='/' element={<Register/>} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/dashboard' element={<Dashboard />} />
//       <Route path='/bankmanager' element={ 
//         <ProtectedRoute role={'bankManager'}>
//            <BankManager />
//           </ProtectedRoute> } />    
//       <Route path='/superadmin' element={ 
//         <ProtectedRoute role={'superAdmin'}>
//            <SuperAdminDashboard/>
//           </ProtectedRoute> } />
//       <Route path='/user' element={ 
//         <ProtectedRoute role={'user'}>
//            <UserDashboard/>
//           </ProtectedRoute> } />
//     </Routes>    
//    </Router>
//    </PersistGate>
//    </Provider>
//   )
// }

// export default App
import './App.css'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, {persistor } from './store/store';
import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}> 
      {/* Ensures that the persisted state is restored before rendering the app, preventing UI from rendering before the state is available. */}
      {/* The loading={null} prop can be replaced with a spinner or some loading indicator while the state is being restored. */}
      <Router>
          {/* {isAuthenticated && <NavBar />} */}
          <div className="p-4">
            <AppRoutes />
          </div>
        </Router>
   </PersistGate>
   </Provider>
  )
}

export default App
