// questions.js

// Subject Codes Definition:
// 1 = Mathematics
// 2 = Science
// 3 = Social Science
// 4 = Reasoning

const quizDatabase = {
    1: { title: "Mathematics", tests: [] },
    2: { title: "Science", tests: [] },
    3: { title: "Social Science", tests: [] },
    4: { title: "Reasoning", tests: [] }
};

/**
 * ऑटोमेटिक टेस्ट ऐड करने वाला हेल्पर फ़ंक्शन
 * @param {number} subjectCode - विषय का कोड (1: Math, 2: Science, 3: Social, 4: Reasoning)
 * @param {string} testCode - चैप्टर या टेस्ट का कोड (उदा: "MTH_CH1_T1")
 * @param {string} testTitle - टेस्ट का नाम/टाइटल
 * @param {number} timeMinutes - टेस्ट के लिए टाइमिंग (मिनट में)
 * @param {Array} questionsArray - प्रश्नों का एरे
 */
function addTest(subjectCode, testCode, testTitle, timeMinutes, questionsArray) {
    if (quizDatabase[subjectCode]) {
        quizDatabase[subjectCode].tests.push({
            testId: testCode,
            title: testTitle,
            timeMinutes: timeMinutes,
            questions: questionsArray
        });
    }
}


// =========================================================================
// 👇 आप नीचे बस इस तरह अपना कोड पेस्ट करते जाएं (Paste Your Tests Below)
// =========================================================================
addTest(1, 1, "प्रतिशतता", 30, [
    {
        q: "चावल की कीमत में 60% की वृद्धि हुई है। मूल कीमत को पुनर्स्थापित करने के लिए, नई कीमत को घटाया जाना चाहिए:",
        options: ["\\(33 \\frac{1}{3}\\%\\)", "\\(37 \\frac{1}{2}\\%\\)", "40%", "45%"],
        ans: 1
    },
    {
        q: "40, 50 और 60 छात्रों के तीन सेट एक परीक्षा के लिए उपस्थित हुए और उत्तीर्ण प्रतिशत क्रमशः 100, 90 और 80 था। पूरे सेट का पास प्रतिशत है:",
        options: ["\\(88 \\frac{2}{3}\\%\\)", "\\(84 \\frac{2}{3}\\%\\)", "\\(88 \\frac{1}{3}\\%\\)", "\\(84 \\frac{1}{3}\\%\\)"],
        ans: 0
    },
    {
        q: "एक परीक्षा में A ने B से 25% अधिक अंक प्राप्त किए, B ने C से 10% कम और C ने D से 25% अधिक अंक प्राप्त किए। यदि D को 500 में से 320 अंक मिले, तो A द्वारा प्राप्त अंक थे:",
        options: ["405", "450", "360", "400"],
        ans: 1
    },
    {
        q: "GST के बाद, खुली चीनी का बाजार मूल्य 25% कम हो जाता है, जिसके कारण काव्या अब 30 रुपये में 1 किलो चीनी अधिक खरीद पाती है। प्रति किलोग्राम चीनी की घटी हुई दर ज्ञात कीजिए।",
        options: ["Rs. \\(17 \\frac{1}{2}\\)", "Rs. \\(7 \\frac{1}{2}\\)", "Rs. 10", "Rs. \\(7 \\frac{3}{10}\\)"],
        ans: 1
    }
]);
