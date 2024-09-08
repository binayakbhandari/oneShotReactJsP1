import { useParams } from "react-router-dom";
import Form from "../../components/Form";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

function EditProduct(){
    const {id} = useParams()
    // const [product,setProduct] = useState({})
    // const fetchProduct = async ()=>{
    //     const response = await axios.get("https://66dc946947d749b72acbfa21.mockapi.io/products/" + id)
    //     if(response.status == 200){
    //         setProduct(response.data)
    //     }
    // }

    // useEffect(()=>{
    //     fetchProduct()
    // },[])

    return (
        <>
            <Navbar />
            <Form type='edit' id={id} />
        </>
    )
}

export default EditProduct