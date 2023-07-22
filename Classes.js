"use strict";
class User {
    constructor(
    // private로 설정하면 외부에서 접근 불가. property 뿐만 아니라 method에도 적용.
    firstName, lastName, nickname) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
} // TypeScript에서 추상 클래스의 직접적인 인스턴스는 만들 수 없다.
// const niyamallo = new User 이런식으로 사용 불가.
// 추상 클래스는 오직 다른 곳에서 상속받을 수만 있는 클래스.
class Player extends User {
}
const niyamallo = new Player("niya", "mallo", "teemo");
console.log(niyamallo.nickname);
console.log(niyamallo.getFullName());
