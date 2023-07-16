import axios from "axios";

export const produitApi=axios.create({
  baseURL:'http://localhost:9000'
})
export const getProduits = (keyword="",page=1,size=2)=>{
  return produitApi.get(`/produits?name_like=${keyword}&_page=${page}&_limit=${size}`)
}
export const deleteProduit = (id)=>{
  return produitApi.delete(`/produits/${id}`)
}
export const getProduit = (id)=>{
  return produitApi.get(`/produits/${id}`)
}
export const checkProduit = (produit)=>{
  return produitApi.patch(`/produits/${produit.id}`,{checked:!produit.checked})
}
export const saveProduit = (produit)=>{
  return produitApi.post(`/produits`,produit)
}
export const updateProduit = (produit)=>{
  return produitApi.patch(`/produits/${produit.id}`,produit)
}