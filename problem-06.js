/**
 * সমস্যা ০৬: বিক্রয় কর গণনা করুন
 * প্রস্তাবিত ফাংশনের নাম: calculateFinalPrice()
 *
 * সমস্যা: একজন দোকানদার তার পণ্যের মোট মূল্যের সাথে ৫% কর যোগ করতে চান। একটি ফাংশন লিখুন যা ইনপুট হিসাবে মূল্য গ্রহণ করে এবং করসহ মোট মূল্য রিটার্ন করে।
 * চ্যালেঞ্জ: যদি ইনপুটটি সংখ্যা না হয় বা ঋণাত্মক হয়, তবে "Invalid" রিটার্ন করুন।
 *
 * নমুনা ইনপুট -> নমুনা আউটপুট
 * 1000         -> 1050
 * 200          -> 210
 * -500         -> "Invalid"
 * 0            -> 0
 */

function calculateFinalPrice (totalPrice) {
  if (typeof totalPrice !== 'number' || totalPrice < 0) {
    return "Invalid";
  }

  const taxPrice = totalPrice * 5 / 100;
  const finalPrice = totalPrice + taxPrice;
  return finalPrice;
}
const price = -500;
const result = calculateFinalPrice(price);
console.log(result);