import React, { useEffect, useState } from "react";
import axios from 'axios';

const Data = () =>
{
    const[post,setPost]=useState([]);

    const postdata =
    {
        id:2,
        title:'book 78',
    };
    
    useEffect(() =>
    {
        const api = 'http://localhost:3001/name';

        axios.put(`${api}/${postdata.id}`,postdata)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error:',error);
        });
        
        // axios.post(api,postdata)
        // .then(response => {
        //     setPost(response.data);
        // })
        // .catch(error => {
        //     console.error('Error:',error);
        // });

        axios.delete(`${api}/${postdata.id}`)
        .then(response => {
            setPost(response.data);
        })
        .catch(error => {
            console.error('Error:',error);
        });
        
        // axios.get(`${api}/${postdata.id}`)
        // .then(response => {
        //     setPost(response.data);
        // })
        // .catch(error => {
        //     console.error('Error:',error);
        // });

        

        axios.get(api)
        .then(response => {
            setPost(response.data);
        })
        .catch(error => {
            console.error('Error:',error);
        });


    },[]);
    return(
        <div>
            <h1>Ports</h1>
            {/* <p>{post.title}</p> */}
            <ul>
                {post.map(pos =>(
                        <li key={pos.id}>{pos.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Data;