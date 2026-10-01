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
