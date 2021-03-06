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
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_logging_1 = require("aurelia-logging");
var MdcDrawerPermanent = (function () {
    function MdcDrawerPermanent(element) {
        this.element = element;
        this.log = aurelia_logging_1.getLogger('mdc-drawer-permanent');
    }
    MdcDrawerPermanent.prototype.bind = function () { };
    MdcDrawerPermanent.prototype.attached = function () { };
    MdcDrawerPermanent = __decorate([
        aurelia_framework_1.customElement('mdc-drawer-permanent'),
        aurelia_framework_1.inject(Element),
        __metadata("design:paramtypes", [Element])
    ], MdcDrawerPermanent);
    return MdcDrawerPermanent;
}());
exports.MdcDrawerPermanent = MdcDrawerPermanent;
