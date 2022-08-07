import instance from "./instance";


export const getAll = () => {
    const url = "/products?_expand=categories"
    return instance.get(url)
}
export const getAllCate = () => {
    const url = `/products/?_expand=category`;
    return instance.get(url);
}

export const createProduct = (data:any) => {
    const url = "/products"
    return instance.post(url, data)
}
export const getProductId:any = (id:any) => {
    const url = `/products/${id}?_expand=categories`;
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
export const getProducCate:any = (id:number) => {
    const url = `/products?categoriesId=${id}`;
    return instance.get(url);
}
export const Money = (currency: number) => currency.toLocaleString("it-IT", { style: "currency", currency: "VND" });
