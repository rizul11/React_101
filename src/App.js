// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";

// function App() {
//   return (
//     <div className="App">
//       <center>
//         <h1>Register a new account</h1>
//         <Formik>
//           {({ isSubmitting }) => (
//             <Form>
//               <Field
//                 type="text"
//                 name="fullname"
//                 placeholder="Enter your fullname"
//               />
//               <ErrorMessage name="fullname" component="div" />
//               <Field
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email address"
//               />
//               <ErrorMessage name="email" component="div" />
//               <Field
//                 type="password"
//                 name="password"
//                 placeholder="password"
//                 component="div"
//               />
//               <ErrorMessage name="password" component="div" />
//               <button type="submit" disabled={isSubmitting}>
//                 Submit
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </center>
//     </div>
//   );
// }

// export default App; 


import React from 'react'
import { useState } from 'react'

function App() {
  const [name, setName] =useState();
  const [email, setEmail] =useState();
  const handleName = (e) => {
     let name = e.target.value;
     if(name.length < 3){

     }
  }
return (
    <div>
      <div>
        <h1>Form validation</h1>
        <form>
          <label htmlFor="">Enter Name:</label>
          <input type='text' name='name' onChange={handleName} value={name} required/>
          <br /><br />
          <label htmlFor=''>Enter your Email:</label>
          <input type='text' name='email' value={email} required />
          <input type='submit' value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default App

