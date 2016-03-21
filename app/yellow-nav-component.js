System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var YellowNavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            YellowNavComponent = (function () {
                function YellowNavComponent() {
                    this.playing = "Now Playing";
                    this.rate = "Rate Songs";
                }
                YellowNavComponent.prototype.clickMe = function (item) {
                    console.log(item);
                };
                YellowNavComponent = __decorate([
                    core_1.Component({
                        selector: 'yellow-nav',
                        template: "\n    \t<div class=\"buttons\">\n    \t\t<div class=\"playing\" (click)=\"clickMe(playing)\">{{playing}}</div>\n        \t<div class=\"rate\" (click)=\"clickMe(rate)\">{{rate}}</div>\n    \t</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], YellowNavComponent);
                return YellowNavComponent;
            }());
            exports_1("YellowNavComponent", YellowNavComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInllbGxvdy1uYXYtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQUE7b0JBQ0ksWUFBTyxHQUFHLGFBQWEsQ0FBQztvQkFDeEIsU0FBSSxHQUFHLFlBQVksQ0FBQztnQkFLeEIsQ0FBQztnQkFIQSxvQ0FBTyxHQUFQLFVBQVEsSUFBSTtvQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQixDQUFDO2dCQWZGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSw0TUFLVDtxQkFDSixDQUFDOztzQ0FBQTtnQkFRRix5QkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQsbURBT0MsQ0FBQSIsImZpbGUiOiJ5ZWxsb3ctbmF2LWNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd5ZWxsb3ctbmF2JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFx0PGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICBcdFx0PGRpdiBjbGFzcz1cInBsYXlpbmdcIiAoY2xpY2spPVwiY2xpY2tNZShwbGF5aW5nKVwiPnt7cGxheWluZ319PC9kaXY+XG4gICAgICAgIFx0PGRpdiBjbGFzcz1cInJhdGVcIiAoY2xpY2spPVwiY2xpY2tNZShyYXRlKVwiPnt7cmF0ZX19PC9kaXY+XG4gICAgXHQ8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFllbGxvd05hdkNvbXBvbmVudCB7XG4gICAgcGxheWluZyA9IFwiTm93IFBsYXlpbmdcIjtcbiAgICByYXRlID0gXCJSYXRlIFNvbmdzXCI7XG4gICAgXG5cdGNsaWNrTWUoaXRlbSkge1xuXHRcdGNvbnNvbGUubG9nKGl0ZW0pO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
