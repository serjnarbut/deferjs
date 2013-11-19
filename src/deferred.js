/**
 * Created by SerjNarbut on 17.11.13.
 */

var Deferred = (function(){


    var isPromise = function(value){
        return value && typeof  value === 'function';
    }

    function deferClass(){
        this.goodVal = null;
        this.badVal = null;
        this.sucFunct = [];
        this.errFunct = [];

        var self = this;
        this.promise = {
            then:function(){

                if(arguments.length > 0){
                    if(isPromise(arguments[0])){
                        if(self.sucFunct){
                            self.sucFunct.push(arguments[0]);
                        }else{
                            arguments[0](self.goodVal);
                        }
                    }
                    if(arguments.length > 1){
                        if(isPromise(arguments[1])){
                            self.errFunct.push(arguments[1]);
                        }
                    }
                }
                return self.promise;
            }
        };
    };

    deferClass.prototype.good = function(value){
        this.goodVal = value;
        this.sucFunct.map(function(fnct){
            fnct(value);
        });

        this.sucFunct = undefined;
    };

    deferClass.prototype.bad = function(value){
        this.badVal = value;
        this.errFunct.map(function(fnct){
            fnct(value);
        });

        this.errFunct = undefined;
    };

    return{
        defer:function(){
            return new deferClass();
        }
    };
})();