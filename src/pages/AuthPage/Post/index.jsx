import { useState, useEffect , useContext } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import AdminLayout from '../../../layout/Admin';
import { useData } from '../../../provider/DataService';
import Button from '../../../themes/nerothemes/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClose } from '@fortawesome/free-solid-svg-icons'
import api from '../../../api/apiClient';

function Post() {
    const { property } = useData();

    const addPropertyAction = async () =>{
        let r = (Math.random() + 1).toString(36).substring(7);
        let id = Math.random().toString().slice(2, 8).padStart(6, '0')
        const response = await api.post('/users' ,{
            "name": r ,
            "job": "leader"
        } );
        if(response.data.name){
            property.addProperty({first_name:response.data.name , id :parseInt(id) });
        }
    }
    const removeItem = async (id) =>{
        await api.delete('/api/users/2');

        property.removeProperty(id);
    }


    const getLlisting = async () =>{
        const response = await api.get('/users').then(res=>res.data);
        property.renderDataProperty(response.data);
    }
    
    useEffect(()=>{
        
        if(property['list'].length === 0){
            getLlisting();
        }else{
            console.log("No data")
        }
       
        
    },[])
    return (
        <AdminLayout>
   
            All List

            {property['list'].map((item , index) =>(
                <div><FontAwesomeIcon onClick={()=>removeItem(item.id)} icon={faClose} color='red' style={{marginRight:"12px"}}/>{item?.first_name}</div>
            ))}

        <Button variant="primary"  size="small" onClick={addPropertyAction}>Generate Item</Button>
        </AdminLayout>
    );
}

export default Post;
