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
    var MusicPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MusicPipe = (function () {
                function MusicPipe() {
                }
                MusicPipe.prototype.transform = function (value, _a) {
                    var term = _a[0];
                    if (value == null) {
                        return null;
                    }
                    return value.filter(function (item) { return item.artistname.includes(term); });
                };
                MusicPipe = __decorate([
                    core_1.Pipe({
                        name: 'music'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MusicPipe);
                return MusicPipe;
            }());
            exports_1("MusicPipe", MusicPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11c2ljLXBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQTtnQkFPQSxDQUFDO2dCQU5BLDZCQUFTLEdBQVQsVUFBVSxLQUFLLEVBQUUsRUFBTTt3QkFBTCxZQUFJO29CQUNyQixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQzt3QkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDYixDQUFDO29CQUNELE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkFURjtvQkFBQyxXQUFJLENBQUM7d0JBQ0osSUFBSSxFQUFFLE9BQU87cUJBQ2QsQ0FBQzs7NkJBQUE7Z0JBUUYsZ0JBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELGlDQU9DLENBQUEiLCJmaWxlIjoibXVzaWMtcGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ211c2ljJ1xufSlcbmV4cG9ydCBjbGFzcyBNdXNpY1BpcGUge1xuXHR0cmFuc2Zvcm0odmFsdWUsIFt0ZXJtXSl7XG5cdFx0aWYgKHZhbHVlID09IG51bGwpe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZS5maWx0ZXIoKGl0ZW0pPT4gaXRlbS5hcnRpc3RuYW1lLmluY2x1ZGVzKHRlcm0pKTtcblx0fVx0XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
