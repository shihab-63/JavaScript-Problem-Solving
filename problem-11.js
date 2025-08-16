/**
 * সমস্যা ১১: বিজয়ী খুঁজুন
 * প্রস্তাবিত ফাংশনের নাম: findMaxScore()
 *
 * সমস্যা: তিনজন বন্ধু একটি প্রতিযোগিতায় অংশ নিয়েছিল। একটি ফাংশন লিখুন যা তাদের স্কোর তুলনা করে এবং সর্বোচ্চ স্কোরটি রিটার্ন করে।
 * চ্যালেঞ্জ: যদি কোনো স্কোর প্রদান করা না হয় বা সংখ্যা না হয়, তবে একটি সতর্কবার্তা রিটার্ন করুন।
 *
 * নমুনা ইনপুট          -> নমুনা আউটপুট
 * (85, 92, 78)          -> 92
 * (10, 5, 15)           -> 15
 * (100, 100, 100)       -> 100
 * (99, 88, 'abc')       -> "Warning: Invalid score provided"
 */

function findMaxScore(frnd1, frnd2, frnd3) {
    if (typeof frnd1 !== 'number' || typeof frnd2 !== 'number' || typeof frnd3 !== 'number') {
        return "Warning: Invalid score provided";
    }

    const maxNumber = Math.max(frnd1, frnd2, frnd3);
    return maxNumber;
}
const result = findMaxScore(99, 88, 'abc');
console.log(result);