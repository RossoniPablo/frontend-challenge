

import { useQuery } from "react-query";
import { ProductsFetchResponse } from "../types/products-response";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { mountQuery } from "@/utils/graphql-filter";
import { useDeferredValue } from "react";
;

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(API_URL,{ query })    
}




export function useProducts() {
     const { type, priority, search} = useFilter() 
     const searchDeferred = useDeferredValue(search)
     const query = mountQuery(type, priority)
     const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, priority]
   })

   const products = data?.data?.data?.allProducts
   const filterProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()))

   return {
        data: filterProducts
     

   }
}
