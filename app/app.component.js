System.register(['angular2/core', './yellow-nav-component', './search-cloud-component', './music-pipe', './songService'], function(exports_1, context_1) {
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
    var core_1, yellow_nav_component_1, search_cloud_component_1, music_pipe_1, songService_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (yellow_nav_component_1_1) {
                yellow_nav_component_1 = yellow_nav_component_1_1;
            },
            function (search_cloud_component_1_1) {
                search_cloud_component_1 = search_cloud_component_1_1;
            },
            function (music_pipe_1_1) {
                music_pipe_1 = music_pipe_1_1;
            },
            function (songService_1_1) {
                songService_1 = songService_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(songService) {
                    var _this = this;
                    this.search = "Search Music";
                    this.term = "";
                    songService.songs
                        .subscribe(function (songs) { return _this.songs = songs; }, console.error, function () { return console.log('Completed!'); });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        providers: [songService_1.SongService],
                        pipes: [music_pipe_1.MusicPipe],
                        template: "\n        <yellow-nav></yellow-nav>\n        <search-cloud></search-cloud>\n        <div class=\"search\">\n    \t\t<input type=\"search\" placeholder=\"{{search}}\" [(ngModel)]=\"term\"/>\n    \t</div>\n    \t<section class=\"songs\" *ngIf=\"term != ''\">\n\t\t\t<div *ngFor=\"#song of songs | music:term\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<iframe src=\"https://embed.spotify.com/?uri={{song.url}}\" frameborder=\"0\" allowtransparency=\"true\" height=\"80\"></iframe>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</section>\n\t",
                        directives: [yellow_nav_component_1.YellowNavComponent, search_cloud_component_1.SearchCloudComponent]
                    }), 
                    __metadata('design:paramtypes', [songService_1.SongService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkE7Z0JBSUMsc0JBQVksV0FBdUI7b0JBSnBDLGlCQVlDO29CQVhBLFdBQU0sR0FBRyxjQUFjLENBQUM7b0JBQ3hCLFNBQUksR0FBVSxFQUFFLENBQUM7b0JBR2IsV0FBVyxDQUFDLEtBQUs7eUJBQ2YsU0FBUyxDQUNOLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLEVBQzNCLE9BQU8sQ0FBQyxLQUFLLEVBQ2IsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQXpCLENBQXlCLENBQ2xDLENBQUM7Z0JBQ1AsQ0FBQztnQkFsQ0Y7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsU0FBUyxFQUFFLENBQUMseUJBQVcsQ0FBQzt3QkFDeEIsS0FBSyxFQUFFLENBQUMsc0JBQVMsQ0FBQzt3QkFDbEIsUUFBUSxFQUFFLG9pQkFlWjt3QkFDRSxVQUFVLEVBQUUsQ0FBQyx5Q0FBa0IsRUFBRSw2Q0FBb0IsQ0FBQztxQkFFekQsQ0FBQzs7Z0NBQUE7Z0JBYUYsbUJBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELHVDQVlDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7WWVsbG93TmF2Q29tcG9uZW50fSBmcm9tICcuL3llbGxvdy1uYXYtY29tcG9uZW50JztcbmltcG9ydCB7U2VhcmNoQ2xvdWRDb21wb25lbnR9IGZyb20gJy4vc2VhcmNoLWNsb3VkLWNvbXBvbmVudCc7XG5pbXBvcnQge011c2ljUGlwZX0gZnJvbSAnLi9tdXNpYy1waXBlJ1xuaW1wb3J0IHtIdHRwLCBIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtTb25nU2VydmljZX0gZnJvbSAnLi9zb25nU2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICBwcm92aWRlcnM6IFtTb25nU2VydmljZV0sXG4gICAgcGlwZXM6IFtNdXNpY1BpcGVdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDx5ZWxsb3ctbmF2PjwveWVsbG93LW5hdj5cbiAgICAgICAgPHNlYXJjaC1jbG91ZD48L3NlYXJjaC1jbG91ZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaFwiPlxuICAgIFx0XHQ8aW5wdXQgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwie3tzZWFyY2h9fVwiIFsobmdNb2RlbCldPVwidGVybVwiLz5cbiAgICBcdDwvZGl2PlxuICAgIFx0PHNlY3Rpb24gY2xhc3M9XCJzb25nc1wiICpuZ0lmPVwidGVybSAhPSAnJ1wiPlxuXHRcdFx0PGRpdiAqbmdGb3I9XCIjc29uZyBvZiBzb25ncyB8IG11c2ljOnRlcm1cIj5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9lbWJlZC5zcG90aWZ5LmNvbS8/dXJpPXt7c29uZy51cmx9fVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93dHJhbnNwYXJlbmN5PVwidHJ1ZVwiIGhlaWdodD1cIjgwXCI+PC9pZnJhbWU+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvc2VjdGlvbj5cblx0YCxcbiAgICBkaXJlY3RpdmVzOiBbWWVsbG93TmF2Q29tcG9uZW50LCBTZWFyY2hDbG91ZENvbXBvbmVudF1cblxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXHRzZWFyY2ggPSBcIlNlYXJjaCBNdXNpY1wiO1xuXHR0ZXJtOnN0cmluZyA9IFwiXCI7XG5cdFxuXHRjb25zdHJ1Y3Rvcihzb25nU2VydmljZTpTb25nU2VydmljZSkge1xuXHQgICAgc29uZ1NlcnZpY2Uuc29uZ3Ncblx0ICAgIFx0LnN1YnNjcmliZShcblx0XHQgICAgICAgIHNvbmdzID0+IHRoaXMuc29uZ3MgPSBzb25ncyxcblx0XHQgICAgICAgIGNvbnNvbGUuZXJyb3IsXG5cdFx0ICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnQ29tcGxldGVkIScpXG5cdFx0ICAgICk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
