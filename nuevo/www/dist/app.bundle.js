webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(19);
	var platform_browser_1 = __webpack_require__(20);
	var platform_browser_dynamic_1 = __webpack_require__(21);
	var http_1 = __webpack_require__(23);
	var router_1 = __webpack_require__(24);
	var angular2_onsenui_1 = __webpack_require__(56);
	var app_routing_1 = __webpack_require__(73);
	var kitchen_sink_1 = __webpack_require__(83);
	var tabbar_1 = __webpack_require__(84);
	var home_1 = __webpack_require__(74);
	var pull_hook_1 = __webpack_require__(75);
	var lazy_repeat_1 = __webpack_require__(76);
	var splitter_1 = __webpack_require__(77);
	var fab_1 = __webpack_require__(78);
	var speed_dial_1 = __webpack_require__(79);
	var animations_1 = __webpack_require__(80);
	var forms_1 = __webpack_require__(81);
	var dialogs_1 = __webpack_require__(82);
	// enableProdMode()
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            angular2_onsenui_1.OnsenModule,
	            http_1.HttpModule,
	            router_1.RouterModule,
	            app_routing_1.routing,
	        ],
	        declarations: [
	            kitchen_sink_1.KitchenSink,
	            tabbar_1.Tabbar,
	            home_1.Home,
	            pull_hook_1.PullHook,
	            lazy_repeat_1.LazyRepeat,
	            splitter_1.Splitter,
	            fab_1.Fab,
	            speed_dial_1.SpeedDial,
	            animations_1.Animations,
	            animations_1.TempPage,
	            forms_1.Forms,
	            dialogs_1.Dialogs,
	            dialogs_1.TempDialog,
	            dialogs_1.TempPopover,
	        ],
	        entryComponents: [
	            pull_hook_1.PullHook,
	            lazy_repeat_1.LazyRepeat,
	            splitter_1.Splitter,
	            fab_1.Fab,
	            speed_dial_1.SpeedDial,
	            animations_1.TempPage,
	            dialogs_1.TempDialog,
	            dialogs_1.TempPopover,
	        ],
	        providers: [
	            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
	            app_routing_1.appRoutingProviders,
	        ],
	        bootstrap: [
	            kitchen_sink_1.KitchenSink,
	        ],
	        schemas: [
	            core_1.CUSTOM_ELEMENTS_SCHEMA,
	        ],
	    })
	], AppModule);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule)
	    .catch(function (err) { return console.error(err); });
	

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../dist/onsenui.d.ts" />
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(1));
	__export(__webpack_require__(57));
	__export(__webpack_require__(59));
	__export(__webpack_require__(60));
	__export(__webpack_require__(61));
	__export(__webpack_require__(62));
	__export(__webpack_require__(63));
	__export(__webpack_require__(64));
	__export(__webpack_require__(65));
	__export(__webpack_require__(66));
	__export(__webpack_require__(67));
	__export(__webpack_require__(68));
	__export(__webpack_require__(70));
	__export(__webpack_require__(71));
	__export(__webpack_require__(72));
	__export(__webpack_require__(58));
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(19);
	var platform_browser_1 = __webpack_require__(20);
	var ons_navigator_1 = __webpack_require__(57);
	var ons_tabbar_1 = __webpack_require__(59);
	var ons_switch_1 = __webpack_require__(60);
	var ons_range_1 = __webpack_require__(61);
	var ons_input_1 = __webpack_require__(62);
	var ons_pull_hook_1 = __webpack_require__(63);
	var ons_lazy_repeat_1 = __webpack_require__(64);
	var ons_splitter_1 = __webpack_require__(65);
	var alert_dialog_factory_1 = __webpack_require__(68);
	var popover_factory_1 = __webpack_require__(70);
	var dialog_factory_1 = __webpack_require__(71);
	var modal_factory_1 = __webpack_require__(72);
	var component_loader_1 = __webpack_require__(69);
	var directives = [
	    ons_navigator_1.OnsNavigator,
	    ons_tabbar_1.OnsTab,
	    ons_switch_1.OnsSwitch,
	    ons_range_1.OnsRange,
	    ons_input_1.OnsInput,
	    ons_pull_hook_1.OnsPullHook,
	    ons_lazy_repeat_1.OnsLazyRepeat,
	    ons_splitter_1.OnsSplitterSide,
	    ons_splitter_1.OnsSplitterContent
	];
	var OnsenModule = (function () {
	    function OnsenModule() {
	    }
	    return OnsenModule;
	}());
	OnsenModule = __decorate([
	    core_1.NgModule({
	        imports: [platform_browser_1.BrowserModule, common_1.CommonModule],
	        declarations: [directives],
	        exports: [
	            directives,
	            platform_browser_1.BrowserModule
	        ],
	        providers: [
	            alert_dialog_factory_1.AlertDialogFactory,
	            popover_factory_1.PopoverFactory,
	            dialog_factory_1.DialogFactory,
	            modal_factory_1.ModalFactory,
	            component_loader_1.ComponentLoader
	        ]
	    })
	], OnsenModule);
	exports.OnsenModule = OnsenModule;
	

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var params_1 = __webpack_require__(58);
	var NavigatorPage = (function () {
	    function NavigatorPage(elementRef, destroy, animator, params) {
	        if (elementRef === void 0) { elementRef = null; }
	        if (destroy === void 0) { destroy = function () { }; }
	        if (animator === void 0) { animator = null; }
	        if (params === void 0) { params = new params_1.Params(); }
	        this.elementRef = elementRef;
	        this.destroy = destroy;
	        this.animator = animator;
	        this.params = params;
	    }
	    return NavigatorPage;
	}());
	exports.NavigatorPage = NavigatorPage;
	/**
	 * @element ons-navigator
	 * @directive OnsNavigator
	 * @selector ons-navigator
	 * @codpen KgvAvx
	 * @description
	 *   [en]Angular 2 directive for `<ons-navigator>` component.[/en]
	 *   [ja]`<ons-navigator>`要素のAngular 2ディレクティブです。[/ja]
	 * @example
	 *   @Component({
	 *     selector: 'ons-page',
	 *     template: `
	 *       <ons-toolbar>
	 *         <div class="center">Page</div>
	 *       </ons-toolbar>
	 *       <div class="content">...</div>
	 *     `
	 *   })
	 *   class DefaultPageComponent { }
	 *
	 *   @Component({
	 *     selector: 'navigator-app',
	 *     template: `
	 *     <ons-navigator [page]="page"></ons-navigator>
	 *     `
	 *   })
	 *   export class AppComponent {
	 *     page = DefaultPageComponent
	 *   }
	 */
	var OnsNavigator = OnsNavigator_1 = (function () {
	    function OnsNavigator(_elementRef, _resolver, _viewContainer, _injector) {
	        this._elementRef = _elementRef;
	        this._resolver = _resolver;
	        this._viewContainer = _viewContainer;
	        this._injector = _injector;
	        this._lastPageLoader = this.element.pageLoader;
	        this.element.pageLoader = this._createPageLoader();
	    }
	    Object.defineProperty(OnsNavigator.prototype, "pageComponentType", {
	        /**
	         * @input page
	         * @type {Type<any>}
	         * @desc
	         *   [en]Type of the page component.[/en]
	         *   [ja]ページコンポーネントのクラスを指定します。[/ja]
	         */
	        set: function (page) {
	            if (this.element.pages.length == 0) {
	                this.element.pushPage(page);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(OnsNavigator.prototype, "element", {
	        get: function () {
	            return this._elementRef.nativeElement;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsNavigator.prototype._createPageLoader = function () {
	        var _this = this;
	        var componentRefMap = new WeakMap();
	        return new ons.PageLoader(function (_a, done) {
	            var page = _a.page, parent = _a.parent, params = _a.params;
	            var pageParams = new params_1.Params(params || {});
	            var injector = core_1.ReflectiveInjector.resolveAndCreate([
	                { provide: params_1.Params, useValue: pageParams },
	                { provide: OnsNavigator_1, useValue: _this }
	            ], _this._injector);
	            var factory = _this._resolver.resolveComponentFactory(page);
	            var selector = 'ons-navigator';
	            var pageComponentRef = factory.create(injector, null);
	            _this._viewContainer.insert(pageComponentRef.hostView);
	            var pageElement = pageComponentRef.location.nativeElement;
	            componentRefMap.set(pageElement, pageComponentRef);
	            _this.element.appendChild(pageElement); // dirty fix to insert in correct position
	            done(pageElement);
	        }, function (element) {
	            if (componentRefMap.has(element)) {
	                componentRefMap.get(element).destroy();
	                componentRefMap.delete(element);
	            }
	        });
	    };
	    OnsNavigator.prototype.ngOnDestroy = function () {
	        this.element.pageLoader = this._lastPageLoader;
	    };
	    return OnsNavigator;
	}());
	__decorate([
	    core_1.Input('page'),
	    __metadata("design:type", core_1.Type),
	    __metadata("design:paramtypes", [core_1.Type])
	], OnsNavigator.prototype, "pageComponentType", null);
	OnsNavigator = OnsNavigator_1 = __decorate([
	    core_1.Directive({
	        selector: 'ons-navigator'
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef,
	        core_1.ComponentFactoryResolver,
	        core_1.ViewContainerRef,
	        core_1.Injector])
	], OnsNavigator);
	exports.OnsNavigator = OnsNavigator;
	var OnsNavigator_1;


/***/ },
/* 58 */
/***/ function(module, exports) {

	"use strict";
	var Params = (function () {
	    function Params(_data) {
	        if (_data === void 0) { _data = {}; }
	        this._data = _data;
	    }
	    Params.prototype.at = function (key) {
	        return this._data[key];
	    };
	    Object.defineProperty(Params.prototype, "data", {
	        get: function () {
	            return this._data;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Params;
	}());
	exports.Params = Params;
	

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	/**
	 * @element ons-tab
	 * @directive OnsTab
	 * @selector ons-tab
	 * @description
	 *   [en]Angular 2 directive for `<ons-tab>` component.[/en]
	 *   [ja]`<ons-tab>`要素のためのディレクティブです。[/ja]
	 * @example
	 *   @Component({
	 *     selector: 'ons-page',
	 *     template: `
	 *       <ons-toolbar>
	 *         <div class="center">Page</div>
	 *       </ons-toolbar>
	 *       <div class="content">...</div>
	 *     `
	 *   })
	 *   class PageComponent {
	 *   }
	 *
	 *   @Component({
	 *     selector: 'app',
	 *     template: `
	 *     <ons-tabbar>
	 *       <div class="tab-bar__content"></div>
	 *       <div class="tab-bar">
	 *         <ons-tab label="Page1" icon="ion-home" [page]="page" active></ons-tab>
	 *         <ons-tab label="Page2" icon="ion-help" [page]="page"></ons-tab>
	 *         <ons-tab label="Page3" icon="ion-stop" [page]="page"></ons-tab>
	 *       </div>
	 *     </ons-tabbar>
	 *     `
	 *   })
	 *   export class AppComponent {
	 *     page = PageComponent
	 *   }
	 */
	var OnsTab = (function () {
	    function OnsTab(_elementRef, _viewContainer, _resolver) {
	        var _this = this;
	        this._elementRef = _elementRef;
	        this._viewContainer = _viewContainer;
	        this._resolver = _resolver;
	        this._pageComponent = null;
	        // set up ons-tab's page loader
	        this._elementRef.nativeElement.pageLoader = new ons.PageLoader(// FIXME
	        function (_a, done) {
	            var page = _a.page, parent = _a.parent;
	            var factory = _this._resolver.resolveComponentFactory(page);
	            var pageComponentRef = _this._viewContainer.createComponent(factory, 0);
	            if (_this._pageComponent) {
	                _this._pageComponent.destroy();
	            }
	            _this._pageComponent = pageComponentRef;
	            var pageElement = pageComponentRef.location.nativeElement;
	            parent.appendChild(pageElement); // dirty fix to insert in correct position
	            done(pageElement);
	        }, function () {
	            if (_this.hasOwnProperty('_pageComponent')) {
	                _this._pageComponent.destroy();
	            }
	        });
	    }
	    Object.defineProperty(OnsTab.prototype, "page", {
	        /**
	         * @input page
	         * @type {Type<any>}
	         * @desc
	         *   [en]Specify the page component that is displayed when the tab is active.[/en]
	         *   [ja]読み込むページコンポーネントを指定します。[/ja]
	         */
	        set: function (pageComponentType) {
	            this._elementRef.nativeElement.page = pageComponentType;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsTab.prototype.ngOnDestroy = function () {
	        if (this._pageComponent) {
	            this._pageComponent.destroy();
	        }
	    };
	    return OnsTab;
	}());
	__decorate([
	    core_1.Input('page'),
	    __metadata("design:type", core_1.Type),
	    __metadata("design:paramtypes", [core_1.Type])
	], OnsTab.prototype, "page", null);
	OnsTab = __decorate([
	    core_1.Directive({
	        selector: 'ons-tab'
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef,
	        core_1.ViewContainerRef,
	        core_1.ComponentFactoryResolver])
	], OnsTab);
	exports.OnsTab = OnsTab;
	

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	/**
	 * @element ons-switch
	 * @directive OnsSwitch
	 * @selector ons-switch
	 * @description
	 *   [en]Angular 2 directive for `<ons-switch>` component.[/en]
	 *   [ja]`<ons-switch>`要素のAngular 2ディレクティブです。[/ja]
	 * @example
	 *   <ons-switch [(value)]="target"></ons-switch>
	 */
	var OnsSwitch = (function () {
	    function OnsSwitch(_elementRef) {
	        this._elementRef = _elementRef;
	        /**
	         * @output valueChange
	         * @type {string}
	         * @desc
	         *   [en]Triggers when the value is changed.[/en]
	         *   [ja]値が変更された時に発火します。[/ja]
	         */
	        this._valueChange = new core_1.EventEmitter();
	        this._boundOnChange = this._onChange.bind(this);
	        this._element = _elementRef.nativeElement;
	        this._element.addEventListener('change', this._boundOnChange);
	    }
	    Object.defineProperty(OnsSwitch.prototype, "value", {
	        /**
	         * @input value
	         * @type {boolean}
	         * @desc
	         *   [en]Specify the value of the `<ons-switch>` component.[/en]
	         *   [ja]`ons-switch`コンポーネントに設定する値を指定します。[/ja]
	         */
	        set: function (target) {
	            this._element.checked = !!target;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsSwitch.prototype._onChange = function (event) {
	        this._valueChange.emit(this._element.checked);
	    };
	    OnsSwitch.prototype.ngOnChanges = function (changeRecord) {
	        var value = !!changeRecord.value.currentValue;
	        this._element.checked = value;
	    };
	    Object.defineProperty(OnsSwitch.prototype, "element", {
	        get: function () {
	            return this._element;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsSwitch.prototype.ngOnDestroy = function () {
	        this._element.removeEventListener('change', this._boundOnChange);
	        this._element = null;
	    };
	    return OnsSwitch;
	}());
	__decorate([
	    core_1.Input('value'),
	    __metadata("design:type", Boolean),
	    __metadata("design:paramtypes", [Boolean])
	], OnsSwitch.prototype, "value", null);
	__decorate([
	    core_1.Output('valueChange'),
	    __metadata("design:type", core_1.EventEmitter)
	], OnsSwitch.prototype, "_valueChange", void 0);
	OnsSwitch = __decorate([
	    core_1.Directive({
	        selector: 'ons-switch'
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], OnsSwitch);
	exports.OnsSwitch = OnsSwitch;
	

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	/**
	 * @element ons-range
	 * @directive OnsRange
	 * @selector ons-range
	 * @description
	 *   [en]Angular 2 directive for `<ons-range>` component.[/en]
	 *   [ja]`<ons-range>`要素のAngular 2ディレクティブです。[/en]
	 * @example
	 *   <ons-range [(value)]="foo"></ons-range><br>
	 *
	 *   <!-- Add (input) to change immediately on dragging range component -->
	 *   <ons-range [(value)]="bar" (input)="bar = $event.target.value"></ons-range>
	 */
	var OnsRange = (function () {
	    function OnsRange(_elementRef) {
	        this._elementRef = _elementRef;
	        /**
	         * @output valueChange
	         * @type {string}
	         * @desc
	         *   [en]Triggers when the value is changed.[/en]
	         *   [ja]値が変更された時に発火します。[/ja]
	         */
	        this._valueChange = new core_1.EventEmitter();
	        this._boundOnChange = this._onChange.bind(this);
	        this._element = _elementRef.nativeElement;
	        this._element.addEventListener('change', this._boundOnChange);
	    }
	    OnsRange.prototype._onChange = function (event) {
	        this._valueChange.emit(this._element.value);
	    };
	    OnsRange.prototype.ngOnChanges = function (changeRecord) {
	        var value = changeRecord['_value'].currentValue;
	        this._element.value = value;
	    };
	    Object.defineProperty(OnsRange.prototype, "element", {
	        get: function () {
	            return this._element;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsRange.prototype.ngOnDestroy = function () {
	        this._element.removeEventListener('change', this._boundOnChange);
	        this._element = null;
	    };
	    return OnsRange;
	}());
	__decorate([
	    core_1.Input('value'),
	    __metadata("design:type", String)
	], OnsRange.prototype, "_value", void 0);
	__decorate([
	    core_1.Output('valueChange'),
	    __metadata("design:type", core_1.EventEmitter)
	], OnsRange.prototype, "_valueChange", void 0);
	OnsRange = __decorate([
	    core_1.Directive({
	        selector: 'ons-range'
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], OnsRange);
	exports.OnsRange = OnsRange;
	

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	/**
	 * @element ons-input
	 * @directive OnsInput
	 * @selector ons-input
	 * @description
	 *   [en]Angular 2 directive for `<ons-input>` component.[/en]
	 *   [ja]`<ons-input>`要素のAngular 2ディレクティブです。[/ja]
	 * @example
	 *   <ons-input [(value)]="value"></ons-input>
	 */
	var OnsInput = (function () {
	    function OnsInput(_elementRef) {
	        this._elementRef = _elementRef;
	        /**
	         * @output valueChange
	         * @type {string}
	         * @desc
	         *   [en]Triggers when the value is changed.[/en]
	         *   [ja]内部の`input`要素の値が変更された時に発火します。[/ja]
	         */
	        this._valueChange = new core_1.EventEmitter();
	        this._boundOnChange = this._onChange.bind(this);
	        this._element = _elementRef.nativeElement;
	        this._element.addEventListener('input', this._boundOnChange);
	    }
	    OnsInput.prototype._onChange = function (event) {
	        this._valueChange.emit(this._element.value);
	    };
	    OnsInput.prototype.ngOnChanges = function (changeRecord) {
	        var value = changeRecord['_value'].currentValue;
	        this._element.value = value;
	    };
	    Object.defineProperty(OnsInput.prototype, "element", {
	        get: function () {
	            return this._element;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsInput.prototype.ngOnDestroy = function () {
	        this._element.removeEventListener('change', this._boundOnChange);
	        this._element = null;
	    };
	    return OnsInput;
	}());
	__decorate([
	    core_1.Input('value'),
	    __metadata("design:type", String)
	], OnsInput.prototype, "_value", void 0);
	__decorate([
	    core_1.Output('valueChange'),
	    __metadata("design:type", core_1.EventEmitter)
	], OnsInput.prototype, "_valueChange", void 0);
	OnsInput = __decorate([
	    core_1.Directive({
	        selector: 'ons-input'
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], OnsInput);
	exports.OnsInput = OnsInput;
	

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	/**
	 * @element ons-pull-hook
	 * @directive OnsPullHook
	 * @selector ons-pull-hook
	 * @description
	 *   [en]Angular 2 directive for `<ons-pull-hook>` component.[/en]
	 *   [ja]`<ons-pull-hook>`要素のためのAngular2ディレクティブです。[/ja]
	 * @example
	 *   @Component({
	 *     selector: 'app',
	 *     template: `
	 *     <ons-page>
	 *       <ons-toolbar>
	 *         <div class="center">Pull Hook</div>
	 *       </ons-toolbar>
	 *       <div class="content">
	 *         <ons-pull-hook height="64px" threshold-height="128px"
	 *           (changestate)="onChangeState($event)" (action)="onAction($event)">
	 *           {{message}}
	 *         </ons-pull-hook>
	 *       </div>
	 *     </ons-page>
	 *     `
	 *   })
	 *   export class AppComponent {
	 *     message: string = 'Pull down to refresh';
	 *
	 *     onAction($event) {
	 *       setTimeout(() => {
	 *         $event.done();
	 *       }, 1000);
	 *     }
	 *
	 *     onChangeState($event) {
	 *       switch ($event.state) {
	 *         case 'initial':
	 *           this.message = 'Pull down to refresh';
	 *           break;
	 *         case 'preaction':
	 *           this.message = 'Release to refresh';
	 *           break;
	 *         case 'action':
	 *           this.message = 'Loading data...';
	 *           break;
	 *       }
	 *     }
	 *   }
	 */
	var OnsPullHook = (function () {
	    /**
	     * @output changestate
	     * @param {Object} $event
	     * @param {String} $event.state
	     * @desc
	     *   [en][/en]
	     *   [ja]`ons-pull-hook`要素の状態が変わった時に呼び出されます。[/ja]
	     */
	    function OnsPullHook(_elementRef) {
	        var _this = this;
	        this._elementRef = _elementRef;
	        /**
	         * @output action
	         * @param {Object} $event
	         * @param {Function} $event.done
	         * @desc
	         *   [en]Action to trigger.[/en]
	         *   [ja]`ons-pull-hook`要素のアクションが必要なときに呼び出されます。[/ja]
	         */
	        this.action = new core_1.EventEmitter();
	        this._element = _elementRef.nativeElement;
	        this._element.onAction = function (done) { return _this.action.emit({ done: done }); };
	    }
	    OnsPullHook.prototype.ngOnDestroy = function () {
	        this._element.onAction = null;
	        this._element = null;
	    };
	    return OnsPullHook;
	}());
	__decorate([
	    core_1.Output('action'),
	    __metadata("design:type", Object)
	], OnsPullHook.prototype, "action", void 0);
	OnsPullHook = __decorate([
	    core_1.Directive({
	        selector: 'ons-pull-hook'
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], OnsPullHook);
	exports.OnsPullHook = OnsPullHook;
	

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var ItemContext = (function () {
	    function ItemContext($implicit, index, count) {
	        this.$implicit = $implicit;
	        this.index = index;
	        this.count = count;
	    }
	    return ItemContext;
	}());
	exports.ItemContext = ItemContext;
	/**
	 * @element ons-lazy-repeat
	 * @directive OnsLazyRepeat
	 * @selector [ons-lazy-repeat]
	 * @description
	 *   [en]Angular 2 directive for `<ons-lazy-repeat>` component.[/en]
	 *   [en]`<ons-lazy-repeat>`要素と同じ機能を提供するAngular 2ディレクティブです。[/en]
	 * @example
	 *   <ons-list>
	 *     <ons-list-item *onsLazyRepeat="let item of items; let i = index">
	 *       #{{i}} {{item.msg}}
	 *     </ons-list-item>
	 *   </ons-list>
	 */
	var OnsLazyRepeat = (function () {
	    function OnsLazyRepeat(_elementRef, _templateRef, _viewContainer) {
	        this._elementRef = _elementRef;
	        this._templateRef = _templateRef;
	        this._viewContainer = _viewContainer;
	    }
	    Object.defineProperty(OnsLazyRepeat.prototype, "onsLazyRepeatOf", {
	        /**
	         * @input onsLazyRepeat
	         * @desc
	         *   [en]Render infinite lists with "let of" syntax in Angular 2.[/en]
	         *   [ja]let of式を指定します。[/ja]
	         * @example
	         *  <ons-list>
	         *    <ons-list-item *onsLazyRepeat="let message of messages">
	         *      {{message}}
	         *    </ons-list-item>
	         *  </ons-list>
	         */
	        set: function (value) {
	            var _this = this;
	            this._onsLazyRepeatOf = value;
	            this._provider = new ons._internal.LazyRepeatProvider(this._elementRef.nativeElement.parentElement, new ons._internal.LazyRepeatDelegate({
	                loadItemElement: function (index, parent, done) {
	                    _this._loadItemTemplate(index, parent, done);
	                },
	                countItems: function () {
	                    return _this._onsLazyRepeatOf.length;
	                }
	            }));
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsLazyRepeat.prototype._loadItemTemplate = function (index, parent, done) {
	        var context = new ItemContext(this._onsLazyRepeatOf[index], index, this._onsLazyRepeatOf.length);
	        var view = this._viewContainer.createEmbeddedView(this._templateRef, context);
	        // dirty fix on createEmbeddedView() does not insert DOM element randomly.
	        parent.appendChild(view.rootNodes[0]);
	        done(view.rootNodes[0]);
	    };
	    OnsLazyRepeat.prototype.refresh = function () {
	        if (this._provider) {
	            this._viewContainer.clear();
	            this._provider.refresh();
	        }
	    };
	    OnsLazyRepeat.prototype.ngOnDestroy = function () {
	        if (this._provider) {
	            this._provider.destroy();
	        }
	        this._viewContainer.clear();
	        this._provider = null;
	    };
	    return OnsLazyRepeat;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object),
	    __metadata("design:paramtypes", [Object])
	], OnsLazyRepeat.prototype, "onsLazyRepeatOf", null);
	OnsLazyRepeat = __decorate([
	    core_1.Directive({
	        selector: '[onsLazyRepeat]'
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef,
	        core_1.TemplateRef,
	        core_1.ViewContainerRef])
	], OnsLazyRepeat);
	exports.OnsLazyRepeat = OnsLazyRepeat;
	

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var params_1 = __webpack_require__(58);
	/**
	 * @element ons-splitter-side
	 * @directive OnsSplitterSide
	 * @selector ons-splitter-side
	 * @description
	 *   [ja]`<ons-splitter-side>`要素のAngular 2ディレクティブです。[/ja]
	 *   [en]Angular 2 directive for `<ons-splitter-side>` component.[/en]
	 * @example
	 *   @Component({
	 *     selector: 'ons-page',
	 *     template: `
	 *       <ons-toolbar>
	 *         <div class="center">Left Page</div>
	 *       </ons-toolbar>
	 *       <div class="background"></div>
	 *       <div class="content">
	 *         Left
	 *       </div>
	 *     `
	 *   })
	 *   class SidePageComponent { }
	 *
	 *   @Component({
	 *     selector: 'app',
	 *     template: `
	 *     <ons-splitter>
	 *       <ons-splitter-side [page]="sidePage" side="left" width="200px">
	 *       </ons-splitter-side>
	 *       <ons-splitter-content>...</ons-splitter-content>
	 *     </ons-splitter>
	 *     `
	 *   })
	 *   export class AppComponent {
	 *     sidePage = SidePageComponent;
	 *   }
	 */
	var OnsSplitterSide = OnsSplitterSide_1 = (function () {
	    function OnsSplitterSide(_elementRef, _viewContainer, _resolver, _injector) {
	        this._elementRef = _elementRef;
	        this._viewContainer = _viewContainer;
	        this._resolver = _resolver;
	        this._injector = _injector;
	        this.element.pageLoader = this._createPageLoader();
	    }
	    Object.defineProperty(OnsSplitterSide.prototype, "page", {
	        /**
	         * @input page
	         * @type {Type<any>}
	         * @desc
	         *   [en]Page content.[/en]
	         *   [ja]表示するページコンポーネントのクラスを指定します。[/en]
	         */
	        set: function (page) {
	            this.element.page = page;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(OnsSplitterSide.prototype, "element", {
	        get: function () {
	            return this._elementRef.nativeElement;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsSplitterSide.prototype._createPageLoader = function () {
	        var _this = this;
	        var componentRefMap = new WeakMap();
	        return new ons.PageLoader(function (_a, done) {
	            var page = _a.page, parent = _a.parent, params = _a.params;
	            var injector = core_1.ReflectiveInjector.resolveAndCreate([
	                { provide: params_1.Params, useValue: new params_1.Params(params || {}) },
	                { provide: OnsSplitterSide_1, useValue: _this }
	            ], _this._injector);
	            var factory = _this._resolver.resolveComponentFactory(page);
	            var pageComponentRef = _this._viewContainer.createComponent(factory, 0, injector);
	            var pageElement = pageComponentRef.location.nativeElement;
	            componentRefMap.set(pageElement, pageComponentRef);
	            _this.element.appendChild(pageElement); // dirty fix to insert in correct position
	            done(pageElement);
	        }, function (element) {
	            if (componentRefMap.has(element)) {
	                componentRefMap.get(element).destroy();
	                componentRefMap.delete(element);
	            }
	        });
	    };
	    return OnsSplitterSide;
	}());
	__decorate([
	    core_1.Input('page'),
	    __metadata("design:type", core_1.Type),
	    __metadata("design:paramtypes", [core_1.Type])
	], OnsSplitterSide.prototype, "page", null);
	OnsSplitterSide = OnsSplitterSide_1 = __decorate([
	    core_1.Directive({
	        selector: 'ons-splitter-side'
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef,
	        core_1.ViewContainerRef,
	        core_1.ComponentFactoryResolver,
	        core_1.Injector])
	], OnsSplitterSide);
	exports.OnsSplitterSide = OnsSplitterSide;
	/**
	 * @element ons-splitter-content
	 * @directive OnsSplitterContent
	 * @selector ons-splitter-content
	 * @description
	 *    [ja]`<ons-splitter-content>`要素のためのAngular2 ディレクティブです。[/ja]
	 *    [en]Angular 2 directive for `<ons-splitter-content>` component.[/en]
	 */
	var OnsSplitterContent = OnsSplitterContent_1 = (function () {
	    function OnsSplitterContent(_elementRef, _viewContainer, _resolver, _injector) {
	        this._elementRef = _elementRef;
	        this._viewContainer = _viewContainer;
	        this._resolver = _resolver;
	        this._injector = _injector;
	        this.element.pageLoader = this._createPageLoader();
	    }
	    Object.defineProperty(OnsSplitterContent.prototype, "page", {
	        /**
	         * @input page
	         * @type {Type<any>}
	         * @desc
	         *   [en]Specify the page component.[/en]
	         *   [ja]表示するページコンポーネントのクラスを指定します。[/en]
	         */
	        set: function (page) {
	            this.element.page = page;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(OnsSplitterContent.prototype, "element", {
	        get: function () {
	            return this._elementRef.nativeElement;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsSplitterContent.prototype._createPageLoader = function () {
	        var _this = this;
	        var componentRefMap = new WeakMap();
	        return new ons.PageLoader(function (_a, done) {
	            var page = _a.page, parent = _a.parent, params = _a.params;
	            var injector = core_1.ReflectiveInjector.resolveAndCreate([
	                { provide: params_1.Params, useValue: new params_1.Params(params || {}) },
	                { provide: OnsSplitterContent_1, useValue: _this }
	            ], _this._injector);
	            var factory = _this._resolver.resolveComponentFactory(page);
	            var pageComponentRef = _this._viewContainer.createComponent(factory, 0, injector);
	            var pageElement = pageComponentRef.location.nativeElement;
	            componentRefMap.set(pageElement, pageComponentRef);
	            _this.element.appendChild(pageElement); // dirty fix to insert in correct position
	            done(pageElement);
	        }, function (element) {
	            if (componentRefMap.has(element)) {
	                componentRefMap.get(element).destroy();
	                componentRefMap.delete(element);
	            }
	        });
	    };
	    return OnsSplitterContent;
	}());
	__decorate([
	    core_1.Input('page'),
	    __metadata("design:type", core_1.Type),
	    __metadata("design:paramtypes", [core_1.Type])
	], OnsSplitterContent.prototype, "page", null);
	OnsSplitterContent = OnsSplitterContent_1 = __decorate([
	    core_1.Directive({
	        selector: 'ons-splitter-content'
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef,
	        core_1.ViewContainerRef,
	        core_1.ComponentFactoryResolver,
	        core_1.Injector])
	], OnsSplitterContent);
	exports.OnsSplitterContent = OnsSplitterContent;
	var OnsSplitterSide_1, OnsSplitterContent_1;


/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * @object onsNotification
	 */
	exports.onsNotification = ons.notification;
	

/***/ },
/* 67 */
/***/ function(module, exports) {

	"use strict";
	exports.onsPlatform = ons.platform;
	

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var params_1 = __webpack_require__(58);
	var component_loader_1 = __webpack_require__(69);
	/**
	 * @object AlertDialogFactory
	 */
	var AlertDialogFactory = (function () {
	    function AlertDialogFactory(_injector, _resolver, _appRef, _componentLoader) {
	        this._injector = _injector;
	        this._resolver = _resolver;
	        this._appRef = _appRef;
	        this._componentLoader = _componentLoader;
	    }
	    AlertDialogFactory.prototype.createAlertDialog = function (componentType, params) {
	        var _this = this;
	        if (params === void 0) { params = {}; }
	        return new Promise(function (resolve) {
	            setImmediate(function () {
	                var factory = _this._resolver.resolveComponentFactory(componentType);
	                var injector = core_1.ReflectiveInjector.resolveAndCreate([
	                    { provide: params_1.Params, useValue: new params_1.Params(params) }
	                ], _this._injector);
	                var componentRef = factory.create(injector);
	                var rootElement = componentRef.location.nativeElement;
	                _this._componentLoader.load(componentRef);
	                var element = rootElement.children[0];
	                var alertDialogElement = element.tagName === 'ONS-ALERT-DIALOG' ? element : element.querySelector('ons-alert-dialog');
	                if (!alertDialogElement) {
	                    throw Error('<ons-alert-dialog> element is not found in component\'s template.');
	                }
	                resolve({ alertDialog: alertDialogElement, destroy: function () { return componentRef.destroy(); } });
	            });
	        });
	    };
	    return AlertDialogFactory;
	}());
	AlertDialogFactory = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [core_1.Injector,
	        core_1.ComponentFactoryResolver,
	        core_1.ApplicationRef,
	        component_loader_1.ComponentLoader])
	], AlertDialogFactory);
	exports.AlertDialogFactory = AlertDialogFactory;
	

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var ComponentLoader = (function () {
	    function ComponentLoader(appRef) {
	        this.appRef = appRef;
	    }
	    // Load an instance of ComponentRef in app view.
	    ComponentLoader.prototype.load = function (componentRef) {
	        var _this = this;
	        var rootElement = componentRef.location.nativeElement;
	        if (this.appRef['attachView']) {
	            // angular2.3.x has `attachView` and `detachView` methods.
	            this.appRef['attachView'](componentRef.hostView);
	            componentRef.onDestroy(function () {
	                _this.appRef['detachView'](componentRef.hostView);
	                if (rootElement.parentNode) {
	                    rootElement.parentNode.removeChild(rootElement);
	                }
	            });
	        }
	        else {
	            if (this.appRef['registerChangeDetector']) {
	                this.appRef['registerChangeDetector'](componentRef.changeDetectorRef);
	            }
	            componentRef.onDestroy(function () {
	                if (_this.appRef['unregisterChangeDetector']) {
	                    _this.appRef['unregisterChangeDetector'](componentRef.changeDetectorRef);
	                }
	                if (rootElement.parentNode) {
	                    rootElement.parentNode.removeChild(rootElement);
	                }
	            });
	        }
	        var rootContainer = this.appRef['_rootComponents'][0].location.nativeElement;
	        rootContainer.appendChild(rootElement);
	    };
	    return ComponentLoader;
	}());
	ComponentLoader = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [core_1.ApplicationRef])
	], ComponentLoader);
	exports.ComponentLoader = ComponentLoader;
	

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var params_1 = __webpack_require__(58);
	var component_loader_1 = __webpack_require__(69);
	/**
	 * @object PopoverFactory
	 */
	var PopoverFactory = (function () {
	    function PopoverFactory(_injector, _resolver, _appRef, _componentLoader) {
	        this._injector = _injector;
	        this._resolver = _resolver;
	        this._appRef = _appRef;
	        this._componentLoader = _componentLoader;
	    }
	    PopoverFactory.prototype.createPopover = function (componentType, params) {
	        var _this = this;
	        if (params === void 0) { params = {}; }
	        return new Promise(function (resolve) {
	            setImmediate(function () {
	                var factory = _this._resolver.resolveComponentFactory(componentType);
	                var injector = core_1.ReflectiveInjector.resolveAndCreate([
	                    { provide: params_1.Params, useValue: new params_1.Params(params) }
	                ], _this._injector);
	                var componentRef = factory.create(injector);
	                var rootElement = componentRef.location.nativeElement;
	                _this._componentLoader.load(componentRef);
	                var element = rootElement.children[0];
	                var popoverElement = element.tagName === 'ONS-POPOVER' ? element : element.querySelector('ons-popover');
	                if (!popoverElement) {
	                    throw Error('<ons-popover> element is not found in component\'s template.');
	                }
	                resolve({ popover: popoverElement, destroy: function () { return componentRef.destroy(); } });
	            });
	        });
	    };
	    return PopoverFactory;
	}());
	PopoverFactory = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [core_1.Injector,
	        core_1.ComponentFactoryResolver,
	        core_1.ApplicationRef,
	        component_loader_1.ComponentLoader])
	], PopoverFactory);
	exports.PopoverFactory = PopoverFactory;
	

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var params_1 = __webpack_require__(58);
	var component_loader_1 = __webpack_require__(69);
	/**
	 * @object DialogFactory
	 */
	var DialogFactory = (function () {
	    function DialogFactory(_injector, _resolver, _appRef, _componentLoader) {
	        this._injector = _injector;
	        this._resolver = _resolver;
	        this._appRef = _appRef;
	        this._componentLoader = _componentLoader;
	    }
	    DialogFactory.prototype.createDialog = function (componentType, params) {
	        var _this = this;
	        if (params === void 0) { params = {}; }
	        return new Promise(function (resolve) {
	            setImmediate(function () {
	                var factory = _this._resolver.resolveComponentFactory(componentType);
	                var injector = core_1.ReflectiveInjector.resolveAndCreate([
	                    { provide: params_1.Params, useValue: new params_1.Params(params) }
	                ], _this._injector);
	                var componentRef = factory.create(injector);
	                var rootElement = componentRef.location.nativeElement;
	                _this._componentLoader.load(componentRef);
	                var element = rootElement.children[0];
	                var dialogElement = element.tagName === 'ONS-DIALOG' ? element : element.querySelector('ons-dialog');
	                if (!dialogElement) {
	                    throw Error('<ons-dialog> element is not found in component\'s template.');
	                }
	                resolve({ dialog: dialogElement, destroy: function () { return componentRef.destroy(); } });
	            });
	        });
	    };
	    return DialogFactory;
	}());
	DialogFactory = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [core_1.Injector,
	        core_1.ComponentFactoryResolver,
	        core_1.ApplicationRef,
	        component_loader_1.ComponentLoader])
	], DialogFactory);
	exports.DialogFactory = DialogFactory;
	

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var params_1 = __webpack_require__(58);
	var component_loader_1 = __webpack_require__(69);
	/**
	 * @object ModalFactory
	 */
	var ModalFactory = (function () {
	    function ModalFactory(_injector, _resolver, _appRef, _componentLoader) {
	        this._injector = _injector;
	        this._resolver = _resolver;
	        this._appRef = _appRef;
	        this._componentLoader = _componentLoader;
	    }
	    ModalFactory.prototype.createModal = function (componentType, params) {
	        var _this = this;
	        if (params === void 0) { params = {}; }
	        return new Promise(function (resolve) {
	            setImmediate(function () {
	                var factory = _this._resolver.resolveComponentFactory(componentType);
	                var injector = core_1.ReflectiveInjector.resolveAndCreate([
	                    { provide: params_1.Params, useValue: new params_1.Params(params) }
	                ], _this._injector);
	                var componentRef = factory.create(injector);
	                var rootElement = componentRef.location.nativeElement;
	                _this._componentLoader.load(componentRef);
	                var element = rootElement.children[0];
	                var modalElement = element.tagName === 'ONS-MODAL' ? element : element.querySelector('ons-modal');
	                if (!modalElement) {
	                    throw Error('<ons-modal> element is not found in component\'s template.');
	                }
	                resolve({ modal: modalElement, destroy: function () { return componentRef.destroy(); } });
	            });
	        });
	    };
	    return ModalFactory;
	}());
	ModalFactory = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [core_1.Injector,
	        core_1.ComponentFactoryResolver,
	        core_1.ApplicationRef,
	        component_loader_1.ComponentLoader])
	], ModalFactory);
	exports.ModalFactory = ModalFactory;
	

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(24);
	var home_1 = __webpack_require__(74);
	var animations_1 = __webpack_require__(80);
	var forms_1 = __webpack_require__(81);
	var dialogs_1 = __webpack_require__(82);
	var appRoutes = [
	    { path: 'home', component: home_1.Home, },
	    { path: 'forms', component: forms_1.Forms, },
	    { path: 'dialogs', component: dialogs_1.Dialogs, },
	    { path: 'animations', component: animations_1.Animations, },
	    { path: '', component: home_1.Home, },
	    { path: '**', component: home_1.Home, },
	];
	exports.appRoutingProviders = [];
	exports.routing = router_1.RouterModule.forRoot(appRoutes);
	

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var angular2_onsenui_1 = __webpack_require__(56);
	var pull_hook_1 = __webpack_require__(75);
	var lazy_repeat_1 = __webpack_require__(76);
	var splitter_1 = __webpack_require__(77);
	var fab_1 = __webpack_require__(78);
	var speed_dial_1 = __webpack_require__(79);
	var Home = (function () {
	    function Home(_navigator) {
	        this._navigator = _navigator;
	    }
	    Home.prototype.log = function () {
	        console.log(this._navigator);
	    };
	    Home.prototype.push = function (page) {
	        var component = { PullHook: pull_hook_1.PullHook, LazyRepeat: lazy_repeat_1.LazyRepeat, Splitter: splitter_1.Splitter, Fab: fab_1.Fab, SpeedDial: speed_dial_1.SpeedDial }[page];
	        this._navigator.element.pushPage(component, { animation: 'fade ' }, {});
	    };
	    Home.prototype.ngOnInit = function () {
	    };
	    return Home;
	}());
	Home = __decorate([
	    core_1.Component({
	        selector: 'home',
	        templateUrl: 'app/components/home/home.html',
	    }),
	    __metadata("design:paramtypes", [angular2_onsenui_1.OnsNavigator])
	], Home);
	exports.Home = Home;
	

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(1);
	var PullHook = (function () {
	    function PullHook() {
	        this.data = [];
	        this.timeout = 0;
	        this.message = 'Arrastra hacia abajo';
	        this.messages = {
	            initial: 'Arrastra hacia abajo',
	            preaction: 'Suelta',
	            action: 'Cargando...'
	        };
	    }
	    PullHook.prototype.getRandomName = function () {
	        var names = ['Oscar', 'Max', 'Tiger', 'Sam', 'Misty', 'Simba', 'Coco', 'Chloe', 'Lucy', 'Missy'];
	        return names[Math.floor(Math.random() * names.length)];
	    };
	    PullHook.prototype.getRandomUrl = function () {
	        var width = 40 + Math.floor(20 * Math.random());
	        var height = 40 + Math.floor(20 * Math.random());
	        return "https://placekitten.com/g/" + width + "/" + height;
	    };
	    PullHook.prototype.getRandomKitten = function () {
	        return {
	            name: this.getRandomName(),
	            url: this.getRandomUrl()
	        };
	    };
	    PullHook.prototype.updateData = function () {
	        this.data = [];
	        for (var i = 0; i < 20; i++) {
	            this.data.push(this.getRandomKitten());
	        }
	    };
	    PullHook.prototype.ngOnInit = function () {
	        this.updateData();
	    };
	    PullHook.prototype.onAction = function ($event) {
	        var _this = this;
	        if (this.timeout) {
	            clearTimeout(this.timeout);
	        }
	        this.timeout = setTimeout(function () {
	            _this.updateData();
	            $event.done();
	        }, 1000);
	    };
	    PullHook.prototype.onChangeState = function ($event) {
	        this.message = this.messages[$event.state];
	    };
	    return PullHook;
	}());
	PullHook = __decorate([
	    core_1.Component({
	        selector: 'ons-page[pull-hook]',
	        template: "\n  <ons-toolbar>\n  <div class=\"left\"><ons-back-button>Atr\u00E1s</ons-back-button></div>\n  <div class=\"center\"> Arrastrar y soltar (lazy repeat)</div>\n</ons-toolbar>\n\n  <div class=\"page__background\"></div>\n  <div class=\"page__content\">\n    <div class=\"scroll\">\n      <ons-pull-hook height=\"64px\" threshold-height=\"128px\" (changestate)=\"onChangeState($event)\" (action)=\"onAction($event)\">\n        {{message}}\n      </ons-pull-hook>\n\n      <ons-list>\n        <ons-list-item *ngFor=\"let item of data\">\n          <div class=\"left\"><img class=\"list__item__thumbnail\" [src]=\"item.url\"></div>\n          <div class=\"center\">{{item.name}}</div>\n        </ons-list-item>\n      </ons-list>\n    </div>\n  </div>\n  ",
	    })
	], PullHook);
	exports.PullHook = PullHook;
	

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(1);
	var LazyRepeat = (function () {
	    function LazyRepeat() {
	        this.items = [];
	    }
	    LazyRepeat.prototype.ngOnInit = function () {
	        for (var i = 0; i < 1000; ++i) {
	            this.items.push(i);
	        }
	    };
	    return LazyRepeat;
	}());
	LazyRepeat = __decorate([
	    core_1.Component({
	        selector: 'ons-page[lazy-repeat]',
	        template: "\n  <ons-toolbar>\n    <div class=\"left\"><ons-back-button>Atr\u00E1s</ons-back-button></div>\n    <div class=\"center\"> Scroll Interminable (lazy repeat)</div>\n  </ons-toolbar>\n\n  <div class=\"page__background\"></div>\n  <div class=\"page__content\">\n    <ons-list>\n      <ons-list-item *onsLazyRepeat=\"let item of items; let i = index\">\n        Item {{i}}\n      </ons-list-item>\n    </ons-list>\n  </div>\n  ",
	    })
	], LazyRepeat);
	exports.LazyRepeat = LazyRepeat;
	

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(1);
	var Splitter = (function () {
	    function Splitter() {
	    }
	    return Splitter;
	}());
	Splitter = __decorate([
	    core_1.Component({
	        selector: 'ons-page[splitter]',
	        template: "\n  <div class=\"page__background\"></div>\n  <div class=\"page__content\">\n    <ons-splitter>\n      <ons-splitter-side side=\"right\" width=\"240px\" swipeable collapse #menu>\n        <ons-page>\n          <ons-list>\n            <ons-list-header>Menu</ons-list-header>\n            <ons-list-item modifier=\"longdivider\" tappable *ngFor=\"let i of [1, 2, 3, 4]\">\n              Menu item #{{i}}\n            </ons-list-item>\n          </ons-list>\n        </ons-page>\n      </ons-splitter-side>\n\n      <ons-splitter-content>\n        <ons-page>\n          <ons-toolbar>\n            <div class=\"left\"><ons-back-button>Back</ons-back-button></div>\n            <div class=\"center\">Sliding menu</div>\n            <div class=\"right\" (click)=\"menu.open()\">\n              <ons-toolbar-button>=</ons-toolbar-button>\n            </div>\n          </ons-toolbar>\n          <p>Swipe left to open menu!</p>\n        </ons-page>\n      </ons-splitter-content>\n    </ons-splitter>\n  </div>\n  ",
	    })
	], Splitter);
	exports.Splitter = Splitter;
	

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(1);
	var Fab = (function () {
	    function Fab() {
	    }
	    return Fab;
	}());
	Fab = __decorate([
	    core_1.Component({
	        selector: 'ons-page[fab]',
	        template: "\n  <ons-toolbar>\n    <div class=\"left\"><ons-back-button>Back</ons-back-button></div>\n    <div class=\"center\">Floating Action Button</div>\n  </ons-toolbar>\n\n  <div class=\"page__background\"></div>\n  <div class=\"page__content\">\n    <ons-fab position=\"bottom right\" ripple>+</ons-fab>\n  </div>\n  ",
	    })
	], Fab);
	exports.Fab = Fab;
	

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(1);
	var SpeedDial = (function () {
	    function SpeedDial() {
	    }
	    return SpeedDial;
	}());
	SpeedDial = __decorate([
	    core_1.Component({
	        selector: 'ons-page[speed-dial]',
	        template: "\n  <ons-toolbar>\n    <div class=\"left\"><ons-back-button>Atr\u00E1s</ons-back-button></div>\n    <div class=\"center\"> Boton que hace aparecer cosas</div>\n  </ons-toolbar>\n\n  <div class=\"page__background\"></div>\n  <div class=\"page__content\">\n    <p>Al apretar el boton flotante aparecen objetos como en un menu.</p>\n    <ons-speed-dial position=\"bottom right\">\n      <ons-fab>+</ons-fab>\n      <ons-speed-dial-item>a</ons-speed-dial-item>\n      <ons-speed-dial-item>b</ons-speed-dial-item>\n      <ons-speed-dial-item>c</ons-speed-dial-item>\n    </ons-speed-dial>\n  </div>\n  ",
	    })
	], SpeedDial);
	exports.SpeedDial = SpeedDial;
	

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var angular2_onsenui_1 = __webpack_require__(56);
	var TempPage = (function () {
	    function TempPage(_navigator) {
	        this._navigator = _navigator;
	        this.animations = ['none', 'fade', 'slide', 'lift'];
	    }
	    TempPage.prototype.ngOnInit = function () {
	    };
	    return TempPage;
	}());
	TempPage = __decorate([
	    core_1.Component({
	        selector: 'ons-page[temp]',
	        template: "\n    <div class=\"waiting\">Please wait...</div>\n   ",
	        styles: ["\n    .waiting {\n      text-align: center;\n      font-size: 24px;\n      margin: 100px auto 0;\n    }\n  "],
	    }),
	    __metadata("design:paramtypes", [angular2_onsenui_1.OnsNavigator])
	], TempPage);
	exports.TempPage = TempPage;
	var Animations = (function () {
	    function Animations(_navigator) {
	        this._navigator = _navigator;
	        this.animations = ['none', 'fade', 'slide', 'lift'];
	    }
	    Animations.prototype.push = function (animation) {
	        var _this = this;
	        this._navigator.element.pushPage(TempPage, { animation: animation });
	        setTimeout(function () { return _this._navigator.element.popPage(); }, 1500);
	    };
	    Animations.prototype.ngOnInit = function () {
	    };
	    return Animations;
	}());
	Animations = __decorate([
	    core_1.Component({
	        selector: 'animations',
	        templateUrl: 'app/components/animations/animations.html',
	    }),
	    __metadata("design:paramtypes", [angular2_onsenui_1.OnsNavigator])
	], Animations);
	exports.Animations = Animations;
	

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var Forms = (function () {
	    function Forms() {
	        this.target = true;
	        this.switchEnabled = true;
	        this.vegetables = [
	            'Tomato',
	            'Cabbage',
	            'Cucumber'
	        ];
	        this.selectedVegetable = 'Cabbage';
	        this.colors = [
	            'Red',
	            'Blue',
	            'Green',
	            'Yellow'
	        ];
	        this.name = 'Argelius';
	    }
	    Forms.prototype.ngOnInit = function () {
	    };
	    return Forms;
	}());
	Forms = __decorate([
	    core_1.Component({
	        selector: 'forms',
	        templateUrl: 'app/components/forms/forms.html',
	    }),
	    __metadata("design:paramtypes", [])
	], Forms);
	exports.Forms = Forms;
	

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var angular2_onsenui_1 = __webpack_require__(56);
	var TempDialog = (function () {
	    function TempDialog(params) {
	        this.message = '';
	        this.message = params.at('message');
	    }
	    return TempDialog;
	}());
	TempDialog = __decorate([
	    core_1.Component({
	        template: "\n    <ons-dialog #dialog animation=\"default\" cancelable>\n      <div class=\"dialog-mask\"></div>\n      <div class=\"dialog\">\n        <div class=\"dialog-container\" style=\"height: 220px;\">\n          <ons-page>\n            <ons-toolbar>\n              <div class=\"center\">Name</div>\n            </ons-toolbar>\n            <div class=\"content\">\n              <div style=\"text-align: center\">\n                <p>{{message}}</p>\n                <br>\n                <ons-button (click)=\"dialog.hide()\">Close</ons-button>\n              </div>\n            </div>\n          </ons-page>\n        </div>\n      </div>\n    </ons-dialog>\n  "
	    }),
	    __metadata("design:paramtypes", [angular2_onsenui_1.Params])
	], TempDialog);
	exports.TempDialog = TempDialog;
	var TempPopover = (function () {
	    function TempPopover(params) {
	        this.message = '';
	        this.message = params.at('msg');
	    }
	    TempPopover.prototype.onPreHide = function (event) {
	        // event.cancel(); // cancel hiding popover
	    };
	    return TempPopover;
	}());
	TempPopover = __decorate([
	    core_1.Component({
	        template: "\n    <ons-popover #popover direction=\"up down\" cancelable (prehide)=\"onPreHide($event)\">\n      <div style=\"text-align: center;\">\n        <p>{{message}}</p>\n        <p><ons-button (click)=\"popover.hide()\">Hide</ons-button></p>\n      </div>\n    </ons-popover>\n  "
	    }),
	    __metadata("design:paramtypes", [angular2_onsenui_1.Params])
	], TempPopover);
	exports.TempPopover = TempPopover;
	var Dialogs = (function () {
	    function Dialogs(_dialogFactory, _popoverFactory) {
	        this._dialogFactory = _dialogFactory;
	        this._popoverFactory = _popoverFactory;
	    }
	    Dialogs.prototype.ngOnInit = function () {
	        var _this = this;
	        this._dialogFactory
	            .createDialog(TempDialog, { message: 'This is just an example.' })
	            .then(function (_a) {
	            var dialog = _a.dialog, destroy = _a.destroy;
	            _this._dialog = dialog;
	            _this._destroyDialog = destroy;
	        });
	        this._popoverFactory
	            .createPopover(TempPopover, { msg: 'This is popover.' })
	            .then(function (_a) {
	            var popover = _a.popover, destroy = _a.destroy;
	            _this._popover = popover;
	            _this._destroyPopover = destroy;
	        });
	    };
	    Dialogs.prototype.ngOnDestroy = function () {
	        this._destroyDialog();
	        this._destroyPopover();
	    };
	    Dialogs.prototype.showDialog = function () {
	        if (this._dialog) {
	            this._dialog.show();
	        }
	    };
	    Dialogs.prototype.showPopover = function (event) {
	        if (this._popover) {
	            this._popover.show(event.target);
	        }
	    };
	    Dialogs.prototype.alert = function () {
	        angular2_onsenui_1.onsNotification.alert('Be careful!');
	    };
	    Dialogs.prototype.confirm = function () {
	        angular2_onsenui_1.onsNotification.confirm('This is dangerous. Are you sure?');
	    };
	    Dialogs.prototype.prompt = function () {
	        angular2_onsenui_1.onsNotification.prompt('What\'s 42?');
	    };
	    return Dialogs;
	}());
	Dialogs = __decorate([
	    core_1.Component({
	        selector: 'dialogs',
	        templateUrl: 'app/components/dialogs/dialogs.html',
	    }),
	    __metadata("design:paramtypes", [angular2_onsenui_1.DialogFactory,
	        angular2_onsenui_1.PopoverFactory])
	], Dialogs);
	exports.Dialogs = Dialogs;
	

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var KitchenSink = (function () {
	    function KitchenSink() {
	    }
	    return KitchenSink;
	}());
	KitchenSink = __decorate([
	    core_1.Component({
	        selector: 'kitchen-sink',
	        templateUrl: 'app/kitchen-sink.html',
	    }),
	    __metadata("design:paramtypes", [])
	], KitchenSink);
	exports.KitchenSink = KitchenSink;
	

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var angular2_onsenui_1 = __webpack_require__(56);
	var Tabbar = (function () {
	    function Tabbar() {
	        this.tabs = [
	            { path: 'home', label: 'Principal', },
	            { path: 'forms', label: 'Formularios', },
	            { path: 'dialogs', label: 'Dialogos', },
	            { path: 'animations', label: 'Animaciones', },
	        ];
	        this.material = angular2_onsenui_1.onsPlatform.isAndroid();
	    }
	    Tabbar.prototype.updateStyle = function (platform) {
	        this.material = platform === 'android';
	    };
	    return Tabbar;
	}());
	Tabbar = __decorate([
	    core_1.Component({
	        selector: 'tabbar',
	        templateUrl: 'app/components/tabbar/tabbar.html',
	        styleUrls: ['app/components/tabbar/tabbar.css'],
	    }),
	    __metadata("design:paramtypes", [])
	], Tabbar);
	exports.Tabbar = Tabbar;
	

/***/ }
]);
//# sourceMappingURL=app.map