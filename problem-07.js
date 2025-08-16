/**
 * সমস্যা ০৭: পাস করা শিক্ষার্থীদের খুঁজুন
 * প্রস্তাবিত ফাংশনের নাম: getPassingStudentNames()
 *
 * সমস্যা: আপনাকে শিক্ষার্থীদের অবজেক্টের একটি তালিকা দেওয়া হয়েছে। পাস মার্ক ৬০। যে শিক্ষার্থীরা পাস করেছে তাদের নামের একটি অ্যারে রিটার্ন করুন।
 * চ্যালেঞ্জ: যদি কোনো শিক্ষার্থীর স্কোর সংখ্যা না হয়, তবে তাকে গণনা থেকে বাদ দেওয়া উচিত।
 *
 * নমুনা ইনপুট                                                                     -> নমুনা আউটপুট
 * [{ name: "Alice", score: 85 }, { name: "Bob", score: 59 }]                   -> ["Alice"]
 * [{ name: "Rina", score: 45 }, { name: "Mina", score: 55 }]                   -> []
 * [{ name: "Karim", score: 60 }, { name: "Rahim", score: 90 }, { name: "Jodu", score: '65' }] -> ["Karim", "Rahim"]
 */

function getPassingStudentNames(students) {
  let passingname = [];
  for (const student of students) {
    if (typeof student.score === "number" && student.score >= 60) {
      passingname.push(student.name);
    }
  }
  return passingname;
}
const array = getPassingStudentNames([
  { name: "Alice", score: 85 },
  { name: "Bob", score: 59 },
]);
console.log(array);