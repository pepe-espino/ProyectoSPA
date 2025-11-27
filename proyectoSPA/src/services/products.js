import {supabase} from './supabase.js';

export async function getProducts(){
    const {data, error} = await supabase.from('products').select('*').order('name', {ascending:true});
    if(error){
        throw error;
    }
    return data;
}

export async function getProductById(id){
    const {data, error} = await supabase.from('products').select('*').eq('id', id).single();
    if(error){
        console.error(`Error with the product with id:${id}`, error.message);
    }
    return data;
}

export async function deleteById(id){
    const {data, error} = await supabase.from('products').delete().eq('id', id);

    if(error){
        console.log('Error al borrar producto:', error.message);
        return false;
    }

    return true;
}