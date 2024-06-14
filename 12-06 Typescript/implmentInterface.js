var Mister = /** @class */ (function () {
    function Mister() {
    }
    Mister.prototype.display = function () {
        console.log("Hello");
    };
    return Mister;
}());
var obj = new Mister();
obj.display();
