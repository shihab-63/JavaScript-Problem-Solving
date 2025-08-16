/**
 * সমস্যা ০১: ক্যাশ-আউট চার্জ গণনা করুন
 * প্রস্তাবিত ফাংশনের নাম: calculateCashOutCharge()
 *
 * সমস্যা: একজন ছোট ব্যবসায়ীকে প্রায়ই টাকা ক্যাশ-আউট করতে হয়। যেকোনো পরিমাণ টাকার জন্য ক্যাশ-আউট চার্জ গণনা করার জন্য একটি ফাংশন লিখুন। ক্যাশ-আউট চার্জ ১.৭৫%।
 * চ্যালেঞ্জ: যদি ইনপুটটি সংখ্যা না হয় বা একটি ঋণাত্মক সংখ্যা হয়, তবে "Invalid" স্ট্রিংটি রিটার্ন করুন।
 *
 * নমুনা ইনপুট -> নমুনা আউটপুট
 * 2000         -> 35
 * 10000        -> 175
 * -350         -> "Invalid"
 * "abc"        -> "Invalid"
 * 0            -> 0
 */

function calculateCashOutCharge(amount) {
  if (typeof amount !== "number" || amount <= 0) {
    return "Invalid"
  }

  const cashOutCharge = (amount * 1.75) / 100;
  return cashOutCharge;
}
const money = calculateCashOutCharge(10000);
console.log(money);