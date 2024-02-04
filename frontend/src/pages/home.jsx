import axios from "axios";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';

export function Home() {

    const navigate = useNavigate();
    try {
        const token =  localStorage.getItem("token");
        if (!token) {
            useEffect(()=>{
                navigate('/signin');
            }, []);
            return;
        }

        axios.get("http://localhost:3000/api/v1/user/", {
            headers: {
              Authorization: "Bearer " + token,
            },
          }).then((response)=>{
            
            navigate(`/dashboard?amount=${response.data.intialAmount}&firstName=${response.data.username[0].toUpperCase()}`);
          });

    } catch (error) {
        navigate(`/signin`);
    }

}
