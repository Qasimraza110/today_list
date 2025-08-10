import React from 'react'
//import Navbar from '../components/Navbar';


function About() {
  return (
   <>
   {/* <div>
    <Navbar/>
   </div> */}
    <div className="mx-auto my-10 max-w-3xl p-8 bg-gradient-to-br from-violet-200 to-purple-300 shadow-xl rounded-3xl">
      <h1 className="text-3xl font-extrabold text-violet-900 mb-4">
        About Daily Task
      </h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Daily Task</strong> is a modern and responsive task management app.It helps you
        organize your daily activities by allowing you to create, edit, delete,
        and mark tasks as completed.
      </p>
      
      <h2 className="text-2xl font-bold text-violet-800 mt-6 mb-3">
        Features
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Add, edit, and delete tasks</li>
        <li>Mark tasks as completed</li>
        <li>Toggle to show/hide completed tasks</li>
        
      </ul>
    </div>
   </>
  )
}

export default About
