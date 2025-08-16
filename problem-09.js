/**
 * সমস্যা ০৯: ব্যবহারকারীর স্লাগ তৈরি করুন
 * প্রস্তাবিত ফাংশনের নাম: generateUrlSlug()
 *
 * সমস্যা: একটি ব্লগ পোস্টের শিরোনাম থেকে একটি "স্লাগ" তৈরি করুন, যা URL-এ ব্যবহারের জন্য উপযুক্ত। স্লাগটি সম্পূর্ণ ছোট হাতের অক্ষরে হবে এবং স্পেসগুলো হাইফেন দ্বারা প্রতিস্থাপিত হবে।
 * চ্যালেঞ্জ: যদি শিরোনামের শেষে স্পেস থাকে, তবে স্লাগ তৈরির আগে সেগুলো সরিয়ে ফেলতে হবে।
 *
 * নমুনা ইনপুট                       -> নমুনা আউটপুট
 * "My Awesome Blog Post"             -> "my-awesome-blog-post"
 * " JavaScript is Fun "              -> "javascript-is-fun"
 * "Learn JS"                         -> "learn-js"
 */

function generateUrlSlug(str) {
  const finalOutput = str.trim().toLowerCase().split(' ').join('-');
  return finalOutput;
}
const data = "Learn JS";
const result = generateUrlSlug(data);
console.log(result);