function getShippingCost(country) {
    const country1 = 'China';
    const country2 = 'Chile';
    const country3 = 'Australia';
    const country4 = 'Jamaica';
    const price1 = 100;
    const price2 = 250;
    const price3 = 170;
    const price4 = 120;
    
    if (country == country1) {
        return `Shipping to ${country} will cost ${price1} credits`;
    } else if (country == country2) {
        return `Shipping to ${country} will cost ${price2} credits`;
    } else if (country == country3) {
        return `Shipping to ${country} will cost ${price3} credits`;
    } else if (country == country4) {
        return `Shipping to ${country} will cost ${price4} credits`;
    } else {
        return 'Sorry, there is no delivery to your country';
    }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
