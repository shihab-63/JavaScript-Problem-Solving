/**
 * সমস্যা ০২: বাংলাদেশী মোবাইল নম্বর যাচাই করুন
 * প্রস্তাবিত ফাংশনের নাম: isValidBdNumber()
 *
 * সমস্যা: একটি কন্টাক্ট নম্বর বৈধ বাংলাদেশী মোবাইল নম্বর কিনা তা যাচাই করার জন্য একটি ফাংশন তৈরি করুন।
 * শর্তাবলী: অবশ্যই ১১ সংখ্যার হতে হবে, "01" দিয়ে শুরু হতে হবে এবং কোনো স্পেস থাকা যাবে না।
 * চ্যালেঞ্জ: যদি ইনপুটটি স্ট্রিং না হয়, তবে "Invalid" রিটার্ন করুন।
 *
 * নমুনা ইনপুট        -> নমুনা আউটপুট
 * "01819234567"   -> true
 * "01711223344"   -> true
 * "0181923 4567"  -> false
 * "0181923456"    -> false  (১১ সংখ্যার কম)
 * "11819234567"   -> false  ("01" দিয়ে শুরু হয়নি)
 * 1819234567      -> "Invalid" (স্ট্রিং নয়)
 */

function isValidBdNumber(number) {
  if (typeof number !== "string") {
    return "Invalid";
  }

  if (
    number.length === 11 &&
    number.startsWith("01") === true &&
    number.includes(" ") === false
  ) {
    return true;
  } else {
    return false;
  }
}
const input = 1819234567;
const result = isValidBdNumber(input);
console.log(result);
