var Vehcile2 = /** @class */ (function () {
    function Vehcile2(color) {
        this.color = color;
    }
    Vehcile2.prototype.drive = function () {
        console.log('i am driving rightn now');
    };
    Vehcile2.prototype.honk = function () {
        console.log('pe pe');
    };
    return Vehcile2;
}());
var item3 = new Vehcile2('agfdasdf');
console.log(item3.color);
// class car2 extends Vehcile2 {
//   useHonk(): void {
//     this.honk();
//   }
// }
// const item2 = new car2();
// item2.useHonk();
