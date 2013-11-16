/**
 * Created by SerjNarbut on 17.11.13.
 */

var Deferred = (function(){

    function deferClass(){
        this.goodVal = null;
        this.badVal = null;
        this.updateVal = null;
        this.sucFunct = [];
        this.errFunct = [];
    };

    deferClass.prototype.good = function(value){
        this.goodVal = value;
    };

    deferClass.prototype.bad = function(value){
        this.badVal = value;
    };

    deferClass.prototype.update = function(value){
        this.updateVal = value;
    };

    return{
        defer:function(){
            return new deferClass();
        }
    };
})();