/**
 * সমস্যা ০৪: বৈধ প্রস্তাব
 * প্রস্তাবিত ফাংশনের নাম: isValidProposal()
 *
 * সমস্যা: একটি ম্যাট্রিমনি ওয়েবসাইটের জন্য, এমন একটি ফাংশন লিখুন যা দুটি বায়োডাটা বিশ্লেষণ করে তাদের মধ্যে বিয়ে সম্ভব কিনা তা নির্ধারণ করবে।
 * শর্তাবলী: তাদের লিঙ্গ ভিন্ন হতে হবে এবং তাদের বয়সের পার্থক্য ৭ বছরের বেশি হওয়া যাবে না।
 * চ্যালেঞ্জ: যদি দুটি ইনপুট অবজেক্ট না হয়, তবে "Invalid" রিটার্ন করুন।
 *
 * নমুনা ইনপুট                                                                    -> নমুনা আউটপুট
 * { name: "Rahul", gender: "male", age: 28 }, { name: "Joya", gender: "female", age: 21 } -> true
 * { name: "Shuvo", gender: "male", age: 20 }, { name: "Joy", gender: "male", age: 25 }     -> false (একই লিঙ্গ)
 * { name: "Tomal", gender: "male", age: 30 }, { name: "Sima", gender: "female", age: 22 } -> false (বয়সের পার্থক্য ৮)
 * { name: "Rina", gender: "female", age: 25 }, { name: "Karim", gender: "male", age: 32 } -> true (বয়সের পার্থক্য ৭)
 */

function isValidProposal(person1, person2) {
  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return "Invalid";
  }

  if (
    person1.gender !== person2.gender &&
    Math.abs(person1.age - person2.age) <= 7
  ) {
    return true;
  } else {
    return false;
  }
}
const person1 = { name: "Tomal", gender: "male", age: 30 };
const person2 = { name: "Sima", gender: "female", age: 22 };
const result = isValidProposal(person1, person2);
console.log(result);