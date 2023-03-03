import React from 'react'
import AdminNavbar from './adminnavbar/adminNavbar'
import AdminMovies from './adminMovies/adminMovies'
import './style.css'
import AdminAction from './adminactions/adminAction'


const AdminPanel = () => {

  return (
    <>
    <AdminNavbar/>
    <AdminAction/>
    <AdminMovies/>
    </>
    
  );
}

export default AdminPanel