// 문자열에서 가장 많이 등장한 문자 찾기

// 문제 정의:
// 주어진 문자열에서 가장 많이 등장하는 문자를 반환하라. 만약 여러 개라면 그 중 아무거나 반환하라.

// 조건:
// 대소문자를 구분한다.
// 공백도 하나의 문자로 간주한다.

// 예시:
// 입력: "banana"
// 출력: 'a' (혹은 'n')
function mostFrequentChar(s) {
  // 문자와 해당 문자의 등장 횟수를 저장할 빈 객체 선언
  // 가장 빈번하게 등장하는 문자의 등장 횟수를 저장할 변수 0 초기화
  // 가장 빈번하게 등장하는 문자를 저장할 변수 빈 문자열 초기화
  const obj = {};
  let mostCount = 0;
  let mostFrequent = "";

  // s를 반복문으로 순회
  // obj[char] 이 존재하면 1을 증가, 그렇지 않으면 1로 초기화
  for (let char of s) {
    obj[char] ? obj[char]++ : (obj[char] = 1);
  }
  // obj 객체를 순회
  // char에 대해 obj[char]의 값이 현재 mostCount보다 크다면
  // mostCount를 해당 값으로 업데이트하고 mostFrequent를 char로 업데이트
  for (let char in obj) {
    if (obj[char] > mostCount) {
      mostCount = obj[char];
      mostFrequent = char;
    }
  }
  return mostFrequent;
}

// 테스트 코드
function testMostFrequentChar() {
  const testCases = [
    { input: "banana", expected: ["a", "n"] },
    { input: "apple", expected: ["p"] },
    { input: "mississippi", expected: ["i", "s"] },
    { input: "aabbcc", expected: ["a", "b", "c"] },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = mostFrequentChar(input);
      if (!expected.includes(result))
        throw new Error(`Expected one of ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출 : 터미널에 node practice2-1.js 실행
testMostFrequentChar();
