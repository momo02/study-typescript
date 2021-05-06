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
  - [8. 함수의 타이핑, 선택적 매개 변수와 기본 매개 변수](#8-함수의-타이핑-선택적-매개-변수와-기본-매개-변수)
  - [9. 타입스크립트의 OOP : Class & Object](#9-타입스크립트의-oop--class--object)
  - [10. 타입스크립트의 OOP : 생성자(Constructor) / 접근 재한자(Access Modifiers) / Getter와 Setter](#10-타입스크립트의-oop--생성자constructor--접근-재한자access-modifiers--getter와-setter)

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

---

## 8. 함수의 타이핑, 선택적 매개 변수와 기본 매개 변수

- [example code](09_function.ts)

---

## 9. 타입스크립트의 OOP : Class & Object

- OOP - 객체 지향 프로그래밍 ?
  - 연관된 변수와 함수들을 한 덩어리로 묶어서 구조화하여 표현하는 프로그래밍 스타일
  - 어플리케이션을 실제 세상에 존재하는 객체와 같은 단위로 쪼개고, 이러한 객체들이 서로 상호 작용함으로써 시스템이 동작.
- Class 와 Object
  - Class는 객체의 뼈대, 설계도, 생산틀이고, 객체들은 Class를 통해서 만들어진다.
  - Class를 바탕으로 한 새로운 객체를 생성하는 것 -> Class의 새로운 instance (=객체)를 만드는 것.
    Class를 통해 붕어빵 틀이 붕어빵을 찍어내듯 여러 독립된 객체들을 만들어 낼 수 있다.
  - [example code](10_class_and_object.ts)

---

## 10. 타입스크립트의 OOP : 생성자(Constructor) / 접근 재한자(Access Modifiers) / Getter와 Setter

- Constructor(생성자)
  - 모든 Class 는 생성자(Constructor)라고 불리는 메소드를 갖는다. 생성자는 클래스로 부터 객체를 생성할 때 호출되며 객체의 초기화를 담당.
  - [example code](11_constructor.ts)
- Access Modifiers(접근 제한자)

  - Access Modifiers는 클래스 속 멤버 변수(Property)와 메소드에 적용될 수 있는 키워드. 클래스 외부로부터의 접근을 통제할 수 있어 버그를 줄이고 코드의 안정성을 향상시킬 수 있다.
  - Public : 클래스 외부에서 접근 가능 / Private : 클래스 내에서만 접근가능(비공개 멤버). 클래스 외부에서 접근 불가 / Protected : 클래스 내부 & 상속받은 자식 클래스에서 접근 가능.
  - Access Modifiers를 명시하지 않으면, default Access Modifiers는 Public 이다.
  - [example code](12_access_modifiers.ts)
  - private 멤버변수는 class 내부에서만 접근 가능. 값을 읽을 수도 없음. 이렇게 비공개로 설정된 private 멤버변수에 접근하여 값을 쓰거나 읽기 위해 타입스크립트에서는 Getter와 Setter라는 컨셉을 제공한다.

- Getter & Setter

  - get , set 키워드를 사용하여 private 멤버변수에 대한 Getter & Setter 함수를 작성할 수 있다.
  - 일반적인 클래스 내의 메소드와 다른점은 public 멤버변수에 접근하는 것과 같은 방법으로 클래스 외부에서 접근가능하다는 것 -> public 멤버변수를 호출할 때 처럼 () 괄호없이 사용가능하다.
  - [example code](13_getter_setter.ts)

- Constructor의 매개변수에 Access Modifiers를 직접 적용하여 코드를 더 간결하게 작성할 수 있다.
  - Constructor의 매개변수 앞에 Access Modifiers를 붙여주면 암묵적으로 Class 의 멤버변수로 선언이 된다ㅌ.
  - 객체가 생성될 때 Constructor의 매개변수로 전달된 값은 Constructor 내부에서 별도로 초기화되는 코드없이 typescript 컴파일러에 의해 객체의 프로퍼티 값으로 초기화되고 할당된다.
  - [example code](14_constructor_with_access_modifiers.ts)
