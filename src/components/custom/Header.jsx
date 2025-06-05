import React from 'react'
import {Button} from '../ui/button'
import { Link } from 'react-router'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className='p-3 px-5 flex justify-between shadow-md relative'>
      {/* Shadow effect */}
      <div className="absolute inset-0 pointer-events-none shadow-lg shadow-pink-200/40 rounded-lg -z-10"></div>
      <Link to={'/dashboard'}>
        <img src='public/LOGO_ishani.png' className='cursor-pointer' width={80} height={80} />
      </Link>
      {isSignedIn ? (
        <div className='flex gap-2 items-center'>
          <Link to={'/dashboard'}>
            <Button style={{ backgroundColor: '#ec4899', color: 'white' }} variant="outline">
              Dashboard
            </Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={'/auth/sign-in'}>
          <Button style={{ backgroundColor: '#ec4899', color: 'white' }}>
            Get Started
          </Button>
        </Link>
      )}
    </div>
  )
}

export default Header
