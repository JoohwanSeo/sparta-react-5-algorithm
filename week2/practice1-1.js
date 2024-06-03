// 문제 정의:
// 주어진 두 문자열에서 첫 번째 문자열이 두 번째 문자열에 포함되는지 여부를 확인하시오. 포함된다면 true, 포함되지 않는다면 false를 반환하시오.
// 단, 'include' 함수는 사용하지 마시오.

// 예시:
// 입력: "abc", "aabcc"
// 출력: true
// 입력: "abc", "def"
// 출력: false

function isSubstring(s1, s2) {
  // s1,s2 두 문자열의 길이를 변수 선언을 해준다
  //s1의 길이가 s2보다 긴 경우, 포함될 수 없으므로 false를 반환해준다
  // 반복문을 사용하여 s2의 문자열이s1과 일치하는지 확인해주고 서로 비교 해준다
  // if문을 통해 s2와s1의 문자열이 부분적으로 일치한다면 true로 반환해준다
  const subString1 = s1.length;
  const subString2 = s2.length;

  if (subString1 > subString2) {
    return false;
  }

  for (let i = 0; i <= subString2 - subString1; i++) {
    if (s2.substring(i, i + subString1) === s1) {
      return true;
    }
  }


}

// 테스트 코드
function testIsSubstring() {
  const testCases = [
    { input: ["abc", "aabcc"], expected: true },
    { input: ["abc", "def"], expected: false },
    { input: ["hello", "hello world"], expected: true },
    { input: ["test", "testing"], expected: true },
    { input: ["apple", "pineapple"], expected: true },
    { input: ["", "anystring"], expected: true }, // 빈 문자열은 항상 포함됨
    { input: ["anystring", ""], expected: false }, // 어떤 문자열도 빈 문자열에 포함되지 않음
    { input: ["a", "a"], expected: true }, // 동일한 한 글자 문자열
    { input: ["longerstring", "short"], expected: false }, // 첫 번째 문자열이 더 긴 경우
    { input: ["abc", "ababc"], expected: true }, // 첫 번째 문자열이 두 번째 문자열의 중간에 포함되는 경우
    { input: ["abc", "abcabcabc"], expected: true }, // 첫 번째 문자열이 두 번째 문자열에 여러 번 포함되는 경우
    { input: ["hello", "ohelloohello"], expected: true }, // 첫 번째 문자열이 두 번째 문자열의 끝과 시작에 걸쳐 있는 경우
    { input: ["abc", "xyzxyz"], expected: false }, // 완전히 다른 문자열
    { input: ["repeat", "repeatrepeatrepeat"], expected: true }, // 첫 번째 문자열이 두 번째 문자열에 반복되는 경우
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = isSubstring(input[0], input[1]);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출
testIsSubstring();
