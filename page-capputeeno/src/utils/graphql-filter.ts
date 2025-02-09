import { FilterType } from "@/app/types/filter-types";
import { PriorityTypes } from "@/app/types/priority-types";

export function getCategotyByType(type: FilterType) {
    if(type === FilterType.MUG) return "mugs"
    if(type === FilterType.SHIRT) return "t-shirts"
    return ""
}

export function getFieldByPriority(priority: PriorityTypes){
    if(priority === PriorityTypes.NEWS) return {field: "created_at", order: "ASC"}
    if(priority === PriorityTypes.BIGGEST_PRICE)  return {field: "price_in_cents", order: "ASC"}
    if(priority === PriorityTypes.MINOR_PRICE) return {field: "price_in_cents", order: "ASC"}
    return {field: "sales", order: "DSC"}
}

export const  mountQuery = (type: FilterType, priority: PriorityTypes) =>{
    if(type === FilterType.ALL && priority === PriorityTypes.POPULARITY ) return `query {
         allProducts(sortField: "SALES", sortOrder: "DSC") {
              id
              name
              price_in_cents
              image_url
         }
    }
    `
    const sortSettings = getFieldByPriority(priority)
    const categotyFilter = getCategotyByType(type)
    return `
    query{
         allProducts(sortField: 
         "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categotyFilter ? `filter: {category: "${categotyFilter}"}`: ''}) {
              id
              name
              price_in_cents
              image_url
              category
         }
       }
       
    `
}