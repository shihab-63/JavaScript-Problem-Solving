/**
 * সমস্যা ০৩: ভর্তিতে সাফল্য
 * প্রস্তাবিত ফাংশনের নাম: willSucceed()
 *
 * সমস্যা: রাফি বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার জন্য প্রস্তুতি নিচ্ছে। তার মক টেস্টের স্কোরগুলোর একটি তালিকা দেওয়া আছে, এর উপর ভিত্তি করে নির্ধারণ করুন সে সফল হবে কিনা। সে সফল হবে যদি পাস করা পরীক্ষার সংখ্যা ফেল করা পরীক্ষার সংখ্যার চেয়ে বেশি হয়। পাস মার্ক ৫০।
 * চ্যালেঞ্জ: যদি ইনপুটটি একটি অ্যারে না হয়, তবে "Invalid" রিটার্ন করুন।
 *
 * নমুনা ইনপুট              -> নমুনা আউটপুট
 * [60, 70, 80, 40, 30]    -> true   (৩ পাস, ২ ফেল)
 * [48, 48, 92, 100]       -> false  (২ পাস, ২ ফেল)
 * [90, 85, 70]            -> true   (সবগুলো পাস)
 * [40, 30, 45]            -> false  (সবগুলো ফেল)
 * []                      -> false  (খালি অ্যারে)
 */

function willSucceed(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid";
  }

  let passCount = 0;
  let failCount = 0;
  for (const score of arr) {
    if (score >= 50) {
      passCount++;
    }else {
      failCount++;
    }
  }
  if (passCount > failCount) {
    return true;
  }else {
    return false;
  }

}
const number = [90, 85, 70];
const result = willSucceed(number);
console.log(result);