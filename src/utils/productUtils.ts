export function calculateDiscountedPrice(price:number, discount:number):string{
 return (price - price *(discount/100) ).toFixed(2)    
}

export function isOutOfStock(stock:number): boolean {
    return stock <=0
} 
