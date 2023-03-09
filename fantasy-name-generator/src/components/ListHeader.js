import Modal from "../../../../react todo Kubow tutorial/todo-tutorial/client/src/components/Modal";
import { useState } from "react";
import { useCookies } from "react-cookie";

export default function ListHeader() {
    
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const userEmail = cookies.Email


    
    
    return (
      <div className="list-header">
      <h1>Welcome back, {userEmail}</h1>
      <div className="button-container">
      </div>
      </div>
    );
  }