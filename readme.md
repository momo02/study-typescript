# TypeScript

- [TypeScript](#typescript)
  - [1. TypeScript란?](#1-typescript란)
    - [타입스크립트의 특징](#타입스크립트의-특징)
  - [2. TypeScript 설치](#2-typescript-설치)
  - [3. 타입 추론 (Type Inference)](#3-타입-추론-type-inference)
  - [4. 타입 명시 (Type Annotations)](#4-타입-명시-type-annotations)
  - [5. 타입 인터페이스(Type Interface)](#5-타입-인터페이스type-interface)
  - [6. 열거형(Enum)과 리터럴 타입](#6-열거형enum과-리터럴-타입)
  - [7. Any Type, Union Type, Type Aliases & Type Guards](#7-any-type-union-type-type-aliases--type-guards)

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

[example code](01_type_inference.ts)

---

## 4. 타입 명시 (Type Annotations)

- 변수를 선언할 때, 변수 값의 타입을 명시함으로써 변수 값의 데이터 타입을 지정.

[example code](02_type_annotations.ts)

---

## 5. 타입 인터페이스(Type Interface)

- 타입스크립트에서는 자주 사용되는 객체의 구조를 인터페이스로 작성할 수 있고, 작성한 인터페이스는 string 이나 number 처럼 타입으로써 사용 가능.

[example code](03_type_interface.ts)

---

## 6. 열거형(Enum)과 리터럴 타입

- 특정 프로퍼티에 들어갈 수 있는 값을 제한하고 싶을 때 크게 2가지 방식을 사용. ex) gender 타입의 값을 male/female/genderNeutral 등으로 제한하고 싶을 경우.
  - 1. Enum (열거형) 사용 : [example code](04-1_enum.ts)
  - 2. Literal Type 사용 (enum보다 더 심플한 방법): [example code](04-2_literal_type.ts)

---

## 7. Any Type, Union Type, Type Aliases & Type Guards

- Any Type : 말그대로 어떠한 타입의 값이든 할당 가능한 타입. 타입 체크를 하지 않는다.
  - But ! 최대한 any타입은 쓰지않는게 좋다.
    타입스크립트에서는 타입에 관한 더 많은 정보를 명시할 수록 더 좋다.
    타입에러를 컴파일 시에 잡아내는것이 코드 유지보수에 용이.
  - [example code](05_any_type.ts)
- Union Type : 제한된 타입들을 동시에 지정하고 싶을 때 사용. ex) number,string 타입 둘다 허용하고 싶을 경우.
  - [example code](06_union_type.ts)
- Type Aliases : 동일한 Union Type을 가지는 변수나 함수가 코드 내에 반복 될 경우, 같은 코드를 반복하는 것 보다는 코드를 타입으로 지정하고 재활용하는 것이 좋은데 이럴때 Type Aliases 를 사용 -> 코드의 재사용성 및 가독성 향상!
  - [example code](07_type_aliases.ts)
- Type Guard : Union Type을 사용할 때 typeof Operator 등을 사용하여 코드 검증을 수행하는 것.
  - [example code](08_type_guard.ts)
  - 이 외에도 또다른 Type guard의 방식이 몇가지 더 있다. 참고 사이트 : https://www.typescriptlang.org/docs/handbook/advanced-types.html
