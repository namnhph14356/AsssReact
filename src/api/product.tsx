import instance from "./instance";


export const getAll = () => {
    const url = "/products"
    return instance.get(url)
}

export const createProduct = (data:any) => {
    const url = "/products"
    return instance.post(url, data)
}
export const getProductId:any = (id:any) => {
    const url = `/products/${id}`;
    return instance.get(url);
}

export const editProduct:any = (product:any) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
}   

export const removeProduct:any = (id:any) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}   