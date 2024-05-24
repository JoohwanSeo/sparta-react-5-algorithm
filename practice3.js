// 두 단어가 애너그램인지 확인
// 문제 정의:
// 두 단어 A와 B가 주어졌을 때, A의 알파벳 순서를 바꾸어 B를 만들 수 있는지 확인하라. 가능하다면 true, 아니라면 false를 반환하라.

// 조건:

// 대소문자를 구분하지 않는다.
// 공백은 무시한다.
// 두 단어의 길이는 같아야 한다.
// 예시:

// 입력: "listen", "silent"
// 출력: true
// 입력: "hello", "bello"
// 출력: false

function isAnagram(a, b) {
// 두 문자열의 길이를 비교하는 조건을 만들어준다.
// 소문자 또는 대문자로 변환하고 문자 배열을 분리해준다.
// 분리된 문자열을 다시 합쳐주고 정렬 해준다.
// 두 문자열이 동일할 경우 같은 아나그램이므로 true를 리턴하게 해준다
//

  // a와 b의 길이가 다르면 조건이 성립할 수 없기에 false를 리턴한다
  if (a.length !== b.length) {
    return false;
  }
// 소문자로 변환하고 문자 배열을 분리 후 다시 합쳐준다.
  const aArr = a.toLowerCase().split("").sort().join("");
  const bArr = b.toLowerCase().split("").sort().join("");

  return aArr === bArr;
}

// 테스트 코드
function testIsAnagram() {
  const testCases = [
    { input: ["listen", "silent"], expected: true },
    { input: ["hello", "bello"], expected: false },
    { input: ["anagram", "nagaram"], expected: true },
    { input: ["rat", "car"], expected: false },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = isAnagram(input[0], input[1]);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출 : 터미널에 node practice3.js 실행
testIsAnagram();
