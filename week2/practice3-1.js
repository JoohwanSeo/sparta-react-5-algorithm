// 문제 정의:
// 주어진 문자열을 반전시키시오. 문자열의 각 단어는 그대로 두고 단어의 순서만 반전시키시오.
// 단, reverse 함수를 사용하면 안된다.

// 예시:
// 입력: "the sky is blue"
// 출력: "blue is sky the"
// 입력: "hello world"
// 출력: "world hello"

function reverseWords(s) {
  // 문자열을 공백으로 분리하여 단어의 배열을 생성해준다
  // 반복문을 사용, 단어 배열을 뒤에서부터 앞으로 순회하며 새 배열에 단어를 추가해준다
  // 반전된 단어 순서를 공백으로 연결하여 최종 문자열을 생성하고 반환해준다
  const words = s.split(" ");
  let reversedOrder = [];

  for (let i = words.length - 1; i >= 0; i--) {
    reversedOrder.push(words[i]);
  }

  return reversedOrder.join(" ");
}

// 테스트 코드
function testReverseWords() {
  const testCases = [
    { input: "the sky is blue", expected: "blue is sky the" },
    { input: "hello world", expected: "world hello" },
    { input: "a b c d", expected: "d c b a" },
    { input: "Palindrome", expected: "Palindrome" },
    { input: "I love coding", expected: "coding love I" },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = reverseWords(input);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출
testReverseWords();
