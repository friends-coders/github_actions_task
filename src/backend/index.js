// A simple function to test +1 +2 (by branch)
function calculateDiscount(price, discount) {
    if (price < 0 || discount < 0) {
        return 0;
    }
    return price - (price * discount);
}

module.exports = calculateDiscount;
