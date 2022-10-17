export const getStoredItem=()=>{
  return localStorage.getItem("transaction");
}
export const storeItem=(params)=>{
  localStorage.setItem("transaction",JSON.stringify(params));
}