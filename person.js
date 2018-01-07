// person.js

module.exports = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
    this.nameWithSalution = function (salution) {
        return salution + ' ' + this.lastName;
    }
}
