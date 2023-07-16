export const produitApi1 = (url, options) => fetch(`http://localhost:9000${url}`, options);

export const getProduits1 = () => {
  return produitApi1('/produits')
}
