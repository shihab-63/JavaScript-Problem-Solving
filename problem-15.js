
/**
 * সমস্যা ১৫: শপিং কার্টের মোট মূল্য গণনা
 * প্রস্তাবিত ফাংশনের নাম: getCartTotal()
 *
 * সমস্যা: একজন গ্রাহক তার শপিং কার্টে কিছু জিনিস যোগ করেছেন। প্রতিটি জিনিসের একটি মূল্য এবং পরিমাণ আছে। কার্টে থাকা সমস্ত জিনিসের মোট খরচ গণনা করার জন্য একটি ফাংশন লিখুন।
 * চ্যালেঞ্জ: যদি কার্টটি খালি থাকে, ফাংশনটি 0 রিটার্ন করা উচিত।
 *
 * নমুনা ইনপুট                                                                                    -> নমুনা আউটপুট
 * [{ name: "Laptop", price: 50000, quantity: 1 }, { name: "Mouse", price: 500, quantity: 2 }] -> 51000
 * [{ name: "Pen", price: 10, quantity: 5 }, { name: "Book", price: 150, quantity: 3 }]      -> 500
 * []                                                                                       -> 0
 */

function getCartTotal(products) {
    let totalCount = 0;
    for (const product of products) {
        const total = product.price * product.quantity;
        totalCount += total;
    }
    return totalCount;
}
const product = [{ name: "Pen", price: 10, quantity: 5 }, { name: "Book", price: 150, quantity: 3 }];
const result = getCartTotal(product);
console.log(result);
