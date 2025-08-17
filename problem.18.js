/**
 * সমস্যা ১৮: উন্নত পাসওয়ার্ড যাচাইকরণ
 * প্রস্তাবিত ফাংশনের নাম: isStrongPassword()
 *
 * সমস্যা: একটি শক্তিশালী পাসওয়ার্ড যাচাই করার জন্য একটি ফাংশন লিখুন।
 * শর্তাবলী: অবশ্যই কমপক্ষে ৮ অক্ষর দীর্ঘ হতে হবে এবং কমপক্ষে একটি বড় হাতের অক্ষর, একটি ছোট হাতের অক্ষর এবং একটি সংখ্যা থাকতে হবে।
 * চ্যালেঞ্জ: যদি ইনপুটটি একটি স্ট্রিং না হয়, তবে false রিটার্ন করুন।
 *
 * নমুনা ইনপুট       -> নমুনা আউটপুট
 * "P@ssw0rd"      -> true
 * "password"      -> false (বড় হাতের অক্ষর ও সংখ্যা নেই)
 * "PASSWORD123"   -> false (ছোট হাতের অক্ষর নেই)
 * "Pass123"       -> false (৮ অক্ষরের কম)
 * "GoodPassword1" -> true
 */

function isStrongPassword(str) {
    if (str.length < 8) {
        return false;
    }

    const hasCapital = /[A-Z]/.test(str);
    const hasSmall = /[a-z]/.test(str);
    const hasNumber = /[0-9]/.test(str);

    return hasCapital && hasSmall && hasNumber;
}
const pass = "P@ssw0rd";
const result = isStrongPassword (pass);
console.log(result);