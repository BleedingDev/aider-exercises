function UserProfile(name) {
  this.name = name;
  this.permissions = this.permissions || ["read"];
}

UserProfile.prototype.addPermission = function (permission) {
  this.permissions.push(permission);
};

UserProfile.prototype.removePermission = function (permission) {
  const index = this.permissions.indexOf(permission);
  if (index > -1) {
    this.permissions.splice(index, 1);
  }
};

const user1 = new UserProfile("Alice");
const user2 = new UserProfile("Bob");

user1.addPermission("write");

console.log(user1.permissions);
console.log(user2.permissions);
