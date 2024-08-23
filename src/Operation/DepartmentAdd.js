import { doc, setDoc } from "firebase/firestore";
import { db } from "firebase/database";

const addDepartment = async (depId, name, location, price, bedrooms, bathrooms, size, modelId) => {
  await setDoc(doc(db, "departments", depId), {
    name,
    location,
    price,
    bedrooms,
    bathrooms,
    size,
    model_id: modelId
  });
};
