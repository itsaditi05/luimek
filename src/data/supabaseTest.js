// We use '../' to go up one folder to find the client file
import supabase from "../supabaseClient"; 

export const addTestProduct = async () => {
  const { data, error } = await supabase
    .from('products') // Ensure your table name in Supabase is exactly 'products'
    .insert([
      { name: 'Test Product', price: 100, description: 'This is a test' }
    ]);

  if (error) {
    console.error("Error inserting data:", error);
  } else {
    console.log("Data inserted successfully:", data);
  }
};

export default addTestProduct;