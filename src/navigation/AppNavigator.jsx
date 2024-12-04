import React, { Suspense, lazy, useEffect } from 'react';
import { useAuth } from '../provider/AuthContext';
import {BrowserRouter, Routes, Route, useLocation, Navigate  } from 'react-router-dom';
import { Loader2 } from 'lucide-react'

const Login = lazy(() => import('../pages/FrontPage/Login'))
const Post = lazy(() => import('../pages/AuthPage/Post'))
const Dashboard = lazy(() => import('../pages/AuthPage/Dashboard'))


// Loading component
const LoadingFallback = () => (
    <div className="flex items-center justify-center h-screen">
      <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
    </div>
  )

  

function AuthUser() {

    const { authState } = useAuth();
    useEffect(()=>{
     
       authState.is_admin_page(true);
    }, [])
    return (
        <Suspense fallback={<LoadingFallback />}>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/post" element={<Post/>} />
            </Routes>
        </Suspense>
    );
}
      


function GuestUser() {
    const { authState } = useAuth();
    useEffect(()=>{
       
    //    authState.is_admin_page(false);
    }, [])
    return (
        <Suspense fallback={<LoadingFallback />}>
            <Routes>
            <Route path="/" element={<Login/>}  />
            </Routes>
        </Suspense>
    );
}



export default function Navigation() {
    const { authState } = useAuth();


    if(authState.isLoading) return <LoadingFallback />
    
    return (
        <>
            {authState.isAuthenticated && !authState.isLoading ? < AuthUser/> : <GuestUser />}
        </>
    );
}
     

    