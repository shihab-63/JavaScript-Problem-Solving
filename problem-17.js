/**
 * সমস্যা ১৭: স্বরবর্ণ গণনাকারী
 * প্রস্তাবিত ফাংশনের নাম: countVowels()
 *
 * সমস্যা: একটি প্রদত্ত স্ট্রিংয়ে স্বরবর্ণের সংখ্যা গণনা করার জন্য একটি ফাংশন লিখুন।
 * শর্ত: গণনাটি কেস-ইনসেনসিটিভ (case-insensitive) হতে হবে। স্বরবর্ণ: a, e, i, o, u.
 * চ্যালেঞ্জ: যদি ইনপুটটি একটি স্ট্রিং না হয়, তবে "Please provide a string" রিটার্ন করুন।
 *
 * নমুনা ইনপুট       -> নমুনা আউটপুট
 * "JavaScript"    -> 3 (a, a, i)
 * "Hello World"   -> 3 (e, o, o)
 * "AEIOU"         -> 5
 * "Rhythm"        -> 0
 * 12345           -> "Please provide a string"
 */

function countVowels(str) {
    if (typeof str !== 'string') {
        return "Please provide a string";
    }

    let vowels = "aeiou";
    let vowelCount = 0;
    const lowerCase = str.toLowerCase();
    for (const item of lowerCase) {
        if (vowels.includes(item)) {
            vowelCount++;
        }
    }
    return vowelCount;
}
const string = "JavaScript";
const result = countVowels(string);
console.log(result);