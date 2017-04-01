"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var games_service_1 = require('../../services/games.service');
var GamesComponent = (function () {
    function GamesComponent(_gamesService) {
        var _this = this;
        this._gamesService = _gamesService;
        this._gamesService.getGames().subscribe(function (res) {
            _this.list = res;
        });
    }
    GamesComponent.prototype.searchGames = function () {
        var _this = this;
        this._gamesService.search(this.searchstr)
            .subscribe(function (res) {
            _this.searchRes = res;
        });
    };
    GamesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'games',
            templateUrl: 'games.component.html'
        }), 
        __metadata('design:paramtypes', [games_service_1.GamesService])
    ], GamesComponent);
    return GamesComponent;
}());
exports.GamesComponent = GamesComponent;
//# sourceMappingURL=games.component.js.map