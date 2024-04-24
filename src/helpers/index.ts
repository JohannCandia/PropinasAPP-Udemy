export function formatCurrency(quantity: number){
    return new Intl.NumberFormat('en-US', {currency : 'USD', style: 'currency'}).format(quantity)
}