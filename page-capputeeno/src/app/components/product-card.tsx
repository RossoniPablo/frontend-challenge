import { formatPrice } from "@/utils/format-price"
import { styled } from "styled-components"

interface ProductCardProps {
    image: string,
    title: string,
    price: number

}

const Card = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 0px 0px 4px 4px;

    width: 256px;

    img{
        width: 256px;
        height: 300px;
    }

    h3 {
       
        font-size: 16px;
        font-weight: 300;
        line-height: 150%; 
        color: var(--text-dark2);
    }

    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 150%
        color: var(--shapes-dark);
    }

    div {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 4px 0;

        > div {
            width: 228px;
            height: 1px;
            padding: 0px;
            margin: 8px 0;
            background: var(--shapes);
    
        }
           
    }

   

`
export function ProductCard(props : ProductCardProps){
    const price = formatPrice(props.price)

     return(
        <Card>
            <img src={props.image}/>
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{price}</p>
            </div>
        </Card>
    )
}