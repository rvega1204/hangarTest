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
    var SongSectionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SongSectionComponent = (function () {
                function SongSectionComponent() {
                    this.title = "Hangar O'clock Songs";
                    this.search = "Search Music";
                }
                SongSectionComponent = __decorate([
                    core_1.Component({
                        selector: 'song-section',
                        inputs: ['songname'],
                        template: "\n        <section class=\"songs\">\n\t\t\t<div>\n\t\t\t\t<p>{{songname.songname}}</p>\n                <p>{{songname.artistname}}</p>\n\t\t\t</div>\n\t\t</section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SongSectionComponent);
                return SongSectionComponent;
            }());
            exports_1("SongSectionComponent", SongSectionComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvbmctc2VjdGlvbi1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFBQTtvQkFDQyxVQUFLLEdBQUcsc0JBQXNCLENBQUM7b0JBQzVCLFdBQU0sR0FBRyxjQUFjLENBQUM7Z0JBQzVCLENBQUM7Z0JBZkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO3dCQUNwQixRQUFRLEVBQUUsNEtBT1Q7cUJBQ0osQ0FBQzs7d0NBQUE7Z0JBSUYsMkJBQUM7WUFBRCxDQUhBLEFBR0MsSUFBQTtZQUhELHVEQUdDLENBQUEiLCJmaWxlIjoic29uZy1zZWN0aW9uLWNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzb25nLXNlY3Rpb24nLFxuICAgIGlucHV0czogWydzb25nbmFtZSddLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic29uZ3NcIj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxwPnt7c29uZ25hbWUuc29uZ25hbWV9fTwvcD5cbiAgICAgICAgICAgICAgICA8cD57e3NvbmduYW1lLmFydGlzdG5hbWV9fTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvc2VjdGlvbj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFNvbmdTZWN0aW9uQ29tcG9uZW50IHtcblx0dGl0bGUgPSBcIkhhbmdhciBPJ2Nsb2NrIFNvbmdzXCI7XG4gICAgc2VhcmNoID0gXCJTZWFyY2ggTXVzaWNcIjtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
