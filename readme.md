# TypeScript

- [TypeScript](#typescript)
  - [1. TypeScript란?](#1-typescript란)
    - [타입스크립트의 특징](#타입스크립트의-특징)
  - [2. TypeScript 설치](#2-typescript-설치)
  - [3. 타입 추론 (Type Inference)](#3-타입-추론-type-inference)
  - [4. 타입 명시 (Type Annotations)](#4-타입-명시-type-annotations)
  - [5. 타입 인터페이스(Type Interface)](#5-타입-인터페이스type-interface)

---

## 1. TypeScript란?

- TypeScript is Superset of JavaScript.
- 자바스크립트로 기반으로 한 타입스크립트는 자바스크립트의 모든 기능을 포함하며 추가적으로 자바스크립트에 포함되지 않는 새로운 기능을 제공한다.
- 자바스크립트를 기반으로 한 언어이기에 자바스크립트에서 유효한 코드는 타입스크립트에서도 유효하다.

### 타입스크립트의 특징

- 타입 표기 : 변수 값에 데이터 타입 지정 가능.
- 객체지향적 : class, interface, custructor, public/private 같은 access modifier 같은 객체지향의 프로그래밍
  특성을 지원.
- 컴파일 타임 오류 체크 : 컴파일 시점에 오류를 잡을 수 있다.
- 타입스크립트는 자바스크립트 환경에서 실행 불가. 자바스크립트가 실행될 수 있는 브라우저가 타입스크립트 코드를 이해할 수 없기 때문 -> 따라서 타입스크립트로 작성된 코드는 자바스크립트로 다시 컴파일(어떤 언어의 코드를 다른 언어로 바꿔주는 변환 과정) 되어야 함.
- TypeScript --(컴파일)--> JavaScript --> 브라우저 실행
- 즉, TypeScript는 프로그래밍 언어인 동시에 타입스크립트를 자바스트립트로 변환해주는 Compiler(컴파일러) 이기도하다.

---

## 2. TypeScript 설치

- npm을 이용해 타입스크립트 설치

```
npm install -g typescript
```

- 타입스크립트 설정 파일인 tsconfig.json 생성

```
tsc --init
```

- tsc(=typescript compiler) 명령어를 사용해 타입스크립트 파일(app.ts)을 자바스트립트 파일(app.js)로 변환

```
tsc app.ts
```

- ts 파일을 수정할때마다 매번 tsc 명령어를 이용해 컴파일 하는 것이 번거로움.
  tsc -w (w = watch 감시하다.) 명령어를 이용하면, 타입스크립트 컴파일러가 변경사항을 감지하고 변경내용을 자동으로 컴파일한다.

---

## 3. 타입 추론 (Type Inference)

- 타입스크립트에서는 타입 표기가 없는 경우 코드를 읽고 분석하여 타입을 유추하는 데 이를 타입 추론이라 함.
- 초기 할당된 값을 바탕으로 타입을 추론.

[example code](../typescript_practice/01_type_inference.ts)

---

## 4. 타입 명시 (Type Annotations)

- 변수를 선언할 때, 변수 값의 타입을 명시함으로써 변수 값의 데이터 타입을 지정.

[example code](../typescript_practice/02_type_annotations.ts)

---

## 5. 타입 인터페이스(Type Interface)

- 타입스크립트에서는 자주 사용되는 객체의 구조를 인터페이스로 작성할 수 있고, 작성한 인터페이스는 string 이나 number 처럼 타입으로써 사용 가능.

[example code](../typescript_practice/03_interface.ts)

---
