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
    var FooterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FooterComponent = (function () {
                function FooterComponent() {
                    this.disclaimer = "2011 The Hangar Interactive. All rights reserved";
                    this.menu = "Privacy Policy | Terms of Use | Contact Us";
                }
                FooterComponent = __decorate([
                    core_1.Component({
                        selector: 'footer',
                        template: "\n        <div class=\"footer-wrapper\">\n            <div class=\"legal\">\n               {{disclaimer}}\n            </div>\n            <div class=\"menu\">\n                {{menu}}\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FooterComponent);
                return FooterComponent;
            }());
            exports_1("FooterComponent", FooterComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFBQTtvQkFDSSxlQUFVLEdBQUcsa0RBQWtELENBQUM7b0JBQ2hFLFNBQUksR0FBRyw0Q0FBNEMsQ0FBQztnQkFDeEQsQ0FBQztnQkFoQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHNPQVNUO3FCQUNKLENBQUM7O21DQUFBO2dCQUlGLHNCQUFDO1lBQUQsQ0FIQSxBQUdDLElBQUE7WUFIRCw2Q0FHQyxDQUFBIiwiZmlsZSI6ImZvb3Rlci1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZm9vdGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWdhbFwiPlxuICAgICAgICAgICAgICAge3tkaXNjbGFpbWVyfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICB7e21lbnV9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IHtcbiAgICBkaXNjbGFpbWVyID0gXCIyMDExIFRoZSBIYW5nYXIgSW50ZXJhY3RpdmUuIEFsbCByaWdodHMgcmVzZXJ2ZWRcIjtcbiAgICBtZW51ID0gXCJQcml2YWN5IFBvbGljeSB8IFRlcm1zIG9mIFVzZSB8IENvbnRhY3QgVXNcIjtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
