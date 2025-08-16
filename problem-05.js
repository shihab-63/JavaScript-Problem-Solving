/**
 * সমস্যা ০৫: মোট ঘুমের সময় গণনা করুন
 * প্রস্তাবিত ফাংশনের নাম: formatSleepTime()
 *
 * সমস্যা: অফিসে রাকিবের ঘুমের সময়ের (সেকেন্ডে) একটি তালিকা দেওয়া আছে। তার মোট ঘুমের সময়কে ঘণ্টা, মিনিট এবং সেকেন্ডে রূপান্তর করে একটি অবজেক্ট হিসেবে রিটার্ন করুন।
 * চ্যালেঞ্জ: যদি অ্যারের কোনো উপাদান সংখ্যা না হয়, তবে "Invalid" রিটার্ন করুন।
 *
 * নমুনা ইনপুট        -> নমুনা আউটপুট
 * [1000, 2000, 725] -> { hour: 1, minute: 2, second: 5 }
 * [3600, 60, 1]     -> { hour: 1, minute: 1, second: 1 }
 * [100, 3800, "90"] -> "Invalid"
 * [7200]            -> { hour: 2, minute: 0, second: 0 }
 */

function formatSleepTime (arr) {
  for (const item of arr) {
    if (typeof item !== 'number') {
      return "Invalid";
    }
  }

  let totalSecont = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSecont += arr[i]
  }

  const hour = Math.floor(totalSecont / 3600);
  let remaning = Math.floor(totalSecont % 3600)

  const minute = Math.floor(remaning / 60);
  const second = remaning % 60;

  const result = {hour, minute, second};
  return result;
}
const array = [7200] ;
const result = formatSleepTime(array);
console.log(result);