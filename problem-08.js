/**
 * সমস্যা ০৮: সাধারণ পাসওয়ার্ড যাচাইকরণ
 * প্রস্তাবিত ফাংশনের নাম: isPasswordValid()
 *
 * সমস্যা: একটি পাসওয়ার্ড যাচাই করার জন্য একটি ফাংশন লিখুন। একমাত্র শর্ত হলো পাসওয়ার্ডটি ৮ অক্ষরের বেশি দীর্ঘ হতে হবে।
 * চ্যালেঞ্জ: যদি ইনপুটটি স্ট্রিং না হয়, তবে "Invalid" রিটার্ন করুন।
 *
 * নমুনা ইনপুট      -> নমুনা আউটপুট
 * "password123" -> true
 * "pass"        -> false
 * "12345678"    -> false (৮ অক্ষরের সমান, বেশি নয়)
 * "123456789"   -> true
 * 123456789     -> "Invalid"
 */

function isPasswordValid(str) {
  if (typeof str !== 'string') {
    return "Invalid";
  }

  if (str.length > 8) {
    return true;
  }else {
    return false;
  }
}
const password = 123456789;
const result = isPasswordValid(password);
console.log(result);