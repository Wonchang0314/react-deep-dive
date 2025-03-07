# 🚀 React 파헤치기 (2025/01/27~)  

### 💡 React의 작동 원리를 깊이 이해하기 위해 바닐라 JavaScript로 직접 React를 만들어보고 있습니다
</br>

### ✅ 배운 점 정리  

#### 1. Vite + Babel 설정을 통한 JSX 트랜스파일링  
- Vite를 사용하여 개발 환경을 구축하고, Babel을 통해 JSX를 JavaScript 코드로 변환하도록 설정  
- `vite.config.ts` 파일에서 `jsx` 및 `jsxImportSource` 옵션을 활용하여 JSX 파싱  

#### 2. `createElement` 함수 구현  
- `createElement` 함수를 직접 구현하여 **Virtual DOM 객체를 생성**  
- JSX 코드가 실제로 **어떻게 변환되는지 확인**  

#### 3. JSX 트랜스파일링 과정 분석  
- JSX 문법이 실제 JavaScript 코드로 변환될 때 **내부적으로 `createElement` 함수가 호출됨**  
- 변환된 코드를 통해 **Virtual DOM이 어떻게 구성되는지 학습**  

#### 4. Virtual DOM의 장점 이해  
- Virtual DOM을 활용하면 **불필요한 DOM 업데이트를 방지**하고 성능을 최적화할 수 있음  
- 직접 DOM을 수정하는 방식보다 **더 효율적인 렌더링이 가능함**

#### 5. `render` 함수 구현 
- React 내부의 render 함수는 **Virtual Dom 객체를 입력받아** 실제 DOM 노드를 생성
- **재귀적으로** 트리 구조를 탐색하여 모든 자식 요소를 DOM에 추가

#### 6. `useState` 함수 구현  
- 내부적으로 **클로저**를 활용하여 상태 값과 상태 변경 함수(setState)를 유지
- 상태 변경 함수가 트리거됬을때 내부에서 **rerender함수**를 호출하여 UI 갱신
- rerender 함수는 변경되거나 최신화된 V-DOM 객체와 루트 노드를 인자로 받아 render 함수 실행

---

## 🔗 개인 블로그 포스팅  
👉 [JSX는 어떻게 자바스크립트로 변환될까?](https://andrew0314.tistory.com/93)  
👉 [리액트에서 렌더링이란?](https://andrew0314.tistory.com/94)  



