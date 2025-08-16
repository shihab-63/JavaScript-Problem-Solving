/**
 * সমস্যা ১৩: চূড়ান্ত অতিথি তালিকা
 * প্রস্তাবিত ফাংশনের নাম: getUniqueGuests()
 *
 * সমস্যা: দুইজন বন্ধু একটি পার্টির জন্য দুটি আলাদা অতিথি তালিকা তৈরি করেছে। কিছু নাম উভয় তালিকাতেই রয়েছে। একটি ফাংশন লিখুন যা তালিকা দুটিকে একত্রিত করে একটি চূড়ান্ত তালিকা তৈরি করবে যেখানে কোনো নামের পুনরাবৃত্তি থাকবে না।
 * চ্যালেঞ্জ: যদি তালিকাগুলোর মধ্যে একটি খালিও থাকে, ফাংশনটি সঠিকভাবে কাজ করা উচিত।
 *
 * নমুনা ইনপুট                                -> নমুনা আউটপুট
 * ['Alice', 'Bob'], ['Charlie', 'Alice']    -> ['Alice', 'Bob', 'Charlie']
 * ['Rina', 'Tina'], ['Mina']                -> ['Rina', 'Tina', 'Mina']
 * ['Sagor'], []                             -> ['Sagor']
 */

function getUniqueGuests(guestList1, guestList2) {
    const combined = [...guestList1, ...guestList2];

    const uniqueGuests = [...new Set(combined)];
    return uniqueGuests;
}
const result = getUniqueGuests(['Sagor'], []);
console.log(result);