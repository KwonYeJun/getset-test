function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age는 현재 날짜와 생일을 기준으로 계산됩니다.
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date());

console.log( john.birthday ); // birthday를 사용할 수 있습니다.
console.log( john.age );      // age 역시 사용할 수 있습니다.