import React from 'react';
import { useState } from 'react';
import AdminPage from "../pages/AdminPage";
import UserPage from "../pages/UserPage";
import PageNotFound from "../pages/PageNotFound";


export default function RolePage() {
   const [role, setRole] = useState("");

   return (
      <div
         style={{
            textAlign: "center"
         }}
      >
         <button onClick={() => setRole("Admin")}>Admin</button>
         <button onClick={() => setRole("User")}>User</button>
         <button onClick={() => setRole("")}>PageNotFound</button>

         {role === "Admin" && <AdminPage />} 
         {role === "User" && <UserPage />}
         {role !== "Admin" && role !== "User" && <PageNotFound />}
         
      </div>
   )
}
