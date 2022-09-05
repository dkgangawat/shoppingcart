import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from "./card"
import { Container } from '@mui/system';
import Loading from './loading';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveAll, SetProduct  } from './../state/action/productAction';
const Categories = () => {
  const dispatch = useDispatch()
  const products = useSelector((state)=>state.allproducts.products);
    const {category} = useParams()
    const fetchData= async()=>{
      const responce= await axios.get(`https://fakestoreapi.com/products/category/${category}`).catch((err)=>{
         console.log("err",err);
     })
     dispatch(SetProduct(responce.data))
  }
  useEffect(()=>{
    fetchData()
    if(products.length>0){
      dispatch(RemoveAll());
    }
   },[category])
   const renderProductList = products.map((categoryItem,index)=>{
    const {id,title,image,price,category} = categoryItem;
    return(
      <Card key={index} id={id} title={title} image={image} price={price} category={category}/>
    )
  })
  return (
    <>
    {
      (products.length===0)?<Loading/>:
       <Container sx={{display:"flex",flexWrap:"wrap",marginTop:"16px"}}>
      <h3 style={{paddingBottom:'8px', display:"block",width:"100%"}}>Add some items to cart</h3>
      {renderProductList}
    </Container>
    }
    </>
   
  )
}

export default Categories