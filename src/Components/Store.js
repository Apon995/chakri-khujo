import { SlControlStart } from "react-icons/sl";

const getStoreValue = () => {
  let storedValue = localStorage.getItem("Apply-id");
  if (storedValue) {
    return JSON.parse(storedValue);
  }
  return [];
};

const SaveToLocalStoroge = (saved) => {
  let string = JSON.stringify(saved);

  localStorage.setItem("Apply-id", string);
};

const SaveTostorage = (id) => {
  let saved = getStoreValue();
  
  saved.push(id);

  SaveToLocalStoroge(saved);
};

const DeleteTostograge=(id)=>{
 
  let saveditem = getStoreValue();

  let deleted = saveditem.filter(elementID => elementID != id );
  SaveToLocalStoroge(deleted)
}

export { getStoreValue, SaveTostorage , DeleteTostograge};
