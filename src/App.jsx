import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Header from './components/custom/Header';

function App() {
  // Clerk hook to access user information and auth status
  const {user,isLoaded,isSignedIn}=useUser();

  // If the user is not signed in but Clerk has finished loading, redirect to sign-in page
  if(!isSignedIn&&isLoaded)
  {
    return <Navigate to={'/auth/sign-in'} />
  }

  // Render the main layout of the app once the user is authenticated
  return (
    <div >
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App