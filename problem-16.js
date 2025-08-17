/**
 * সমস্যা ১৬: সবচেয়ে সস্তা ফোনটি খুঁজুন
 * প্রস্তাবিত ফাংশনের নাম: findCheapestPhone()
 *
 * সমস্যা: আপনার কাছে ফোনের একটি তালিকা আছে। এই তালিকা থেকে সবচেয়ে সস্তা ফোনটি খুঁজে বের করার জন্য একটি ফাংশন লিখুন।
 * চ্যালেঞ্জ: যদি ইনপুটটি একটি অ্যারে না হয়, তবে "Invalid input" রিটার্ন করুন।
 *
 * নমুনা ইনপুট                                                                       -> নমুনা আউটপুট
 * [{ name: 'Samsung', price: 20000 }, { name: 'Xiaomi', price: 18000 }]             -> { name: 'Xiaomi', price: 18000 }
 * [{ name: 'iPhone', price: 120000 }, { name: 'OnePlus', price: 45000 }]            -> { name: 'OnePlus', price: 45000 }
 * [{ name: 'Nokia', price: 15000 }]                                                 -> { name: 'Nokia', price: 15000 }
 * "phone list"                                                                     -> "Invalid input"
 */

function findCheapestPhone(phone) {
    if (!Array.isArray(phone)) {
        return "Invalid input";
    }

    let cheapestPhone = phone[0];
    for (const item of phone) {
        if (item.price < cheapestPhone.price) {
            cheapestPhone = item;
        }
    }
    return cheapestPhone;
}
const phones = [{ name: 'Nokia', price: 15000 }];
const result = findCheapestPhone(phones);
console.log(result);