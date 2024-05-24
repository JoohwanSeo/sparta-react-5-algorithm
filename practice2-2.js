// 두 문자열의 교집합 문자 집합 구하기

// 문제 정의:
// 두 문자열이 주어졌을 때, 두 문자열에 모두 등장하는 문자를 집합으로 반환하라.

// 조건:

// 대소문자를 구분하지 않는다.
// 결과는 집합(Set) 형태로 반환한다.
// 예시:

// 입력: "apple", "pineapple"
// 출력: new Set(['p', 'l', 'e'])

function commonCharacters(s1, s2) {
  // new Set을 사용하여 s1을 소문자로 변환하고 Set을 사용하여 중복을 제거
  // first와 second라는 변수를 각각 선언하고 s1과 s2를 소문자로 변환하는 데이터를 넣어준다
  // Set을 통해 문자열의 문자를 저장해준다
  const first = new Set(s1.toLowerCase());
  const second = new Set(s2.toLowerCase());

  // intersecter라는 변수를 선언하여 교집합을 사용하여 데이터를 넣어준다.
  //  각 배열을 펼쳐주고 filter를 사용하여 문자열을 필터링을 해준다
  const intersecter = [...first].filter((data) => second.has(data));

  // new Set을 사용하여 intersecter를 반환한다.
  return new Set(intersecter);
}

// 테스트 코드
function testCommonCharacters() {
  const testCases = [
    { input: ["apple", "pineapple"], expected: new Set(["a", "p", "l", "e"]) },
    { input: ["hello", "world"], expected: new Set(["o", "l"]) },
    { input: ["abc", "def"], expected: new Set() },
    {
      input: ["abcdef", "fedcba"],
      expected: new Set(["a", "b", "c", "d", "e", "f"]),
    },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = new Set(commonCharacters(input[0], input[1]));
      const isEqual =
        expected.size === result.size &&
        [...expected].every((value) => result.has(value));
      if (!isEqual)
        throw new Error(`Expected ${[...expected]}, but got ${[...result]}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출 터미널에 node practice2-2.js 실행
testCommonCharacters();
