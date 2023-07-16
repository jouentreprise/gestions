import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { faCheckCircle, faCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import { checkProduit, deleteProduit, getProduits } from "../app/app"
const Products = () => {
  const [state,setState]=useState({
    produits:[],
    currentPage:1,
    pageSize:2,
    keyword:"",totalPages:0
  })
  useEffect(()=>{
    handleGetProduits(state.keyword,state.currentPage,state.pageSize)
  },[])
  const handleGetProduits = (keyword,page,size)=>{
   getProduits(keyword,page,size)
   .then(res=>{
    setState(
      {...state,
        produits:res.data,
        keyword:keyword,
        currentPage:page,
        pageSize:size,
      })
   })
  }
  const handleDeleteProduit = (id)=>{
    deleteProduit(id)
    .then(res=>{
     setState({...state,produits:state.produits.filter(produit=>produit.id!==id)})
    })
  }
  const handleCheckProduit = (produit) => {
    checkProduit(produit)
      .then(res => {
        setState({...state,produits:state.produits.map(p => p.id === produit.id ? { ...p, checked: !p.checked } : p)});
      })
      .catch(error => {
        console.error('checkProduit error:', error);
      });
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Checked</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {
            state.produits.map(produit=>(
              <tr key={produit.id}>
                <td>{produit.id}</td>
                <td>{produit.name}</td>
                <td>{produit.price}</td>
                <td>
                  <button 
                    className="btn btn-outline-success btn-sm"
                    onClick={()=>handleCheckProduit(produit)} 
                    >
                    <FontAwesomeIcon icon={produit.checked?faCheckCircle:faCircle} />
                  </button>
                </td>
                <td>
                  <button onClick={()=>handleDeleteProduit(produit.id)} className="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrash} /></button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Products