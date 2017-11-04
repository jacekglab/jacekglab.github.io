webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const iconMap = {
    113: "wi wi-day-sunny",
    116: "wi wi-day-cloudy",
    119: "wi wi-cloud",
    122: "wi wi-cloudy",
    143: "wi wi-fog",
    176: "wi wi-day-rain",
    179: "wi wi-wi wi-day-snow",
    182: "wi wi-sleet",
    185: "wi wi-fog",
    200: "wi wi-thunderstorm",
    227: "wi wi-snow-wind",
    230: "wi wi-snow-wind",
    248: "wi wi-fog",
    260: "wi wi-fog",
    263: "wi wi-sprinkle",
    266: "wi wi-sprinkle",
    281: "wi wi-rain",
    284: "wi wi-rain",
    293: "wi wi-day-rain",
    296: "wi wi-sprinkle",
    299: "wi wi-day-rain",
    302: "wi wi-rain",
    305: "wi wi-day-rain",
    308: "wi wi-rain",
    311: "wi wi-rain",
    314: "wi wi-rain",
    317: "wi wi-rain-mix",
    320: "wi wi-day-sleet",
    323: "wi wi-day-snow",
    326: "wi wi-snow",
    329: "wi wi-day-snow",
    332: "wi wi-snow",
    335: "wi wi-day-snow",
    338: "wi wi-snow",
    350: "wi wi-snow",
    353: "wi wi-day-rain",
    356: "wi wi-day-rain",
    359: "wi wi-rain",
    362: "wi wi-sleet",
    365: "wi wi-sleet",
    368: "wi wi-day-snow",
    371: "wi wi-day-snow",
    374: "wi wi-day-snow",
    377: "wi wi-day-snow",
    386: "wi wi-thunderstorm",
    389: "wi wi-thunderstorm",
    392: "wi wi-thunderstorm",
    395: "wi wi-thunderstorm"
};
/* harmony export (immutable) */ __webpack_exports__["a"] = iconMap;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mapDetails;
/* harmony export (immutable) */ __webpack_exports__["b"] = mapAndReduce;
function mapDetails(array, subset, property, decorator) {
        return array.map(currentValue => currentValue[subset][property] + decorator);
}

function mapAndReduce(array, subset, property, decorator, precision) {
        return array.map(currentValue => (currentValue[subset].reduce((accumulator, currentValue) => accumulator + currentValue[property], 0) / currentValue[subset].length).toFixed(precision) + decorator);
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTranslation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__translations_eng_json__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__translations_eng_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__translations_eng_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translations_ger_json__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translations_ger_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__translations_ger_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translations_pol_json__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translations_pol_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__translations_pol_json__);




function getTranslation(lang) {
    switch (lang) {
        case "eng":
            {
                return __WEBPACK_IMPORTED_MODULE_0__translations_eng_json__;
            }
        case "ger":
            {
                return __WEBPACK_IMPORTED_MODULE_1__translations_ger_json__;
            }
        case "pol":
            {
                return __WEBPACK_IMPORTED_MODULE_2__translations_pol_json__;
            }
        default:
            return __WEBPACK_IMPORTED_MODULE_0__translations_eng_json__;
    }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(33)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(60),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(44)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(71),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-d744c7e2",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_refactor_dash_root__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_refactor_dash_root___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_refactor_dash_root__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_refactor_settings_settings_root__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_refactor_settings_settings_root___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_refactor_settings_settings_root__);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Dashboard',
    component: __WEBPACK_IMPORTED_MODULE_2__components_refactor_dash_root___default.a
  }, {
    path: '/settings',
    name: 'Settings',
    component: __WEBPACK_IMPORTED_MODULE_3__components_refactor_settings_settings_root___default.a
  }]
}));

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getters_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_lang_lang_js__ = __webpack_require__(4);







__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

const state = {
  weather: "weather",
  coords: "coords",
  status: 'INIT',
  activeDay: 0,
  theme: null,
  units: null,
  language: null,
  lang: null
};

const store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  strict: true,
  state,
  mutations: __WEBPACK_IMPORTED_MODULE_2__mutations_js__["a" /* default */],
  getters: __WEBPACK_IMPORTED_MODULE_4__getters_js__["a" /* default */],
  actions: __WEBPACK_IMPORTED_MODULE_3__actions_js__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(40)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(67),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_refactor_loading__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_refactor_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_refactor_loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_refactor_dash_root__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_refactor_dash_root___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_refactor_dash_root__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_refactor_settings_settings_root__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_refactor_settings_settings_root___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_refactor_settings_settings_root__);
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    loading: __WEBPACK_IMPORTED_MODULE_0__components_refactor_loading___default.a,
    dashboard: __WEBPACK_IMPORTED_MODULE_1__components_refactor_dash_root___default.a,
    settings: __WEBPACK_IMPORTED_MODULE_2__components_refactor_settings_settings_root___default.a
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    init() {
      this.$store.dispatch('FETCH_COORDS').then(() => this.$store.dispatch('FETCH_WEATHER', `${this.$store.getters.latitude},${this.$store.getters.longitude}`)).then(() => {
        if (window.localStorage.getItem("theme") === null) {
          this.$store.dispatch('SET_THEME', "light");
        } else {
          this.$store.dispatch('SET_THEME', window.localStorage.getItem("theme"));
        }
        if (window.localStorage.getItem("units") === null) {
          this.$store.dispatch('SET_UNITS', "metric");
        } else {
          this.$store.dispatch('SET_UNITS', window.localStorage.getItem("units"));
        }
        if (window.localStorage.getItem("language") === null) {
          this.$store.dispatch('SET_LANGUAGE', "eng");
        } else {
          this.$store.dispatch('SET_LANGUAGE', window.localStorage.getItem("language"));
        }
      }).then(() => this.$store.dispatch('SET_STATUS', "EXECUTION"));
    }
  },
  mounted() {
    this.init();
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__iconMap__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'calendar',
    components: {},
    data() {
        return {};
    },
    methods: {
        mapIcon(url) {
            const re = /(?!\/)(\d{3})(?!\w{3})/;
            return __WEBPACK_IMPORTED_MODULE_0__iconMap__["a" /* iconMap */][re.exec(url)[0]];
        },
        mapDate(date, index) {
            if (index === 0) return this.$store.getters.lang.calendar.today;else return this.$store.getters.lang.calendar[new Date(date).getDay()].slice(0, 3);
        },
        changeDay(index) {
            this.$store.dispatch('SET_ACTIVE_DAY', index);
        }
    }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__iconMap__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: "current",
    methods: {
        mapIcon(url) {
            const re = /(?!\/)(\d{3})(?!\w{3})/;
            return __WEBPACK_IMPORTED_MODULE_0__iconMap__["a" /* iconMap */][re.exec(url)[0]];
        }
    }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'day-night',
    components: {},
    data() {
        return {};
    }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__details_detail__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__details_detail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__details_detail__);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'details',
    components: {
        detail: __WEBPACK_IMPORTED_MODULE_0__details_detail___default.a
    },
    data() {
        return {
            index: this.$store.getters.activeDay,
            childComponents: [{
                name: "temperature",
                icon: "wi-thermometer"
            }, {
                name: "humidity",
                icon: "wi-humidity"
            }, {
                name: "uv",
                icon: "wi-day-sunny"
            }, {
                name: "wind",
                icon: "wi-strong-wind"
            }, {
                name: "precipation",
                icon: "wi-umbrella"
            }, {
                name: "pressure",
                icon: "wi-barometer"
            }]
        };
    }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'thumbnail',
  components: {},
  data() {
    return {};
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'menu-bar',
  components: {},
  data() {
    return {};
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dash_menu_bar__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dash_menu_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dash_menu_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dash_current__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dash_current___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dash_current__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dash_day_night__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dash_day_night___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dash_day_night__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dash_details__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dash_details___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__dash_details__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dash_image__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dash_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__dash_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dash_calendar__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dash_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__dash_calendar__);
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'dashboard',
  components: {
    menuBar: __WEBPACK_IMPORTED_MODULE_0__dash_menu_bar___default.a,
    thumbnail: __WEBPACK_IMPORTED_MODULE_4__dash_image___default.a,
    current: __WEBPACK_IMPORTED_MODULE_1__dash_current___default.a,
    dayNight: __WEBPACK_IMPORTED_MODULE_2__dash_day_night___default.a,
    dashDetails: __WEBPACK_IMPORTED_MODULE_3__dash_details___default.a,
    calendar: __WEBPACK_IMPORTED_MODULE_5__dash_calendar___default.a
  },
  data() {
    return {};
  }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "detail",
  props: {
    name: String,
    icon: String
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'loading',
  data() {
    return {};
  }
});
//https://vuejs.org/images/logo.png

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "language",
    data() {
        return {
            toggle: false
        };
    },
    methods: {
        toggleSetting() {
            return this.toggle = !this.toggle;
        },
        changeLanguage(language) {
            this.$store.dispatch('SET_LANGUAGE', language);
        }
    }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'menu-bar',
  components: {},
  data() {
    return {};
  }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_menu_bar__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_menu_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__settings_menu_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_theme__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__settings_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_units__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_units___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__settings_units__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_language__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_language___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__settings_language__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    name: "settings",
    components: {
        menuBar: __WEBPACK_IMPORTED_MODULE_0__settings_menu_bar___default.a,
        theme: __WEBPACK_IMPORTED_MODULE_1__settings_theme___default.a,
        units: __WEBPACK_IMPORTED_MODULE_2__settings_units___default.a,
        language: __WEBPACK_IMPORTED_MODULE_3__settings_language___default.a
    }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "theme",
    data() {
        return {
            toggle: false
        };
    },
    methods: {
        toggleSetting() {
            return this.toggle = !this.toggle;
        },
        changeTheme(theme) {
            this.$store.dispatch('SET_THEME', theme);
        }
    }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "units",
    data() {
        return {
            toggle: false
        };
    },
    methods: {
        toggleSetting() {
            return this.toggle = !this.toggle;
        },
        changeUnits(units) {
            this.$store.dispatch('SET_UNITS', units);
        }
    }
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const baseUrl = 'https://api.apixu.com/v1/forecast.json?';
const key = 'cb18824ab7e140d2944131821172407';

const get = location => `${baseUrl}key=${key}&q=${location}&days=7`;
/* harmony export (immutable) */ __webpack_exports__["a"] = get;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vuex_store_js__ = __webpack_require__(8);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = true;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  store: __WEBPACK_IMPORTED_MODULE_3__vuex_store_js__["a" /* default */],
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_apixu__ = __webpack_require__(25);
/*global fetch*/


const FETCH_WEATHER = "FETCH_WEATHER";
/* unused harmony export FETCH_WEATHER */

const SET_STATUS = "SET_STATUS";
/* unused harmony export SET_STATUS */

const FETCH_COORDS = "FETCH_COORDS";
/* unused harmony export FETCH_COORDS */


const actions = {
	FETCH_WEATHER({ commit }, location) {
		return new Promise((resolve, reject) => {
			fetch(__WEBPACK_IMPORTED_MODULE_0__api_apixu__["a" /* get */](location)).then(resonse => resonse.json()).then(weather => {
				commit('SET_WEATHER', weather);
				resolve();
			}).catch(error => console.error(error));
		}, err => {
			console.error(err.message);
		});
	},

	SET_STATUS({ commit }, status) {
		return new Promise((resolve, reject) => {
			commit('SET_STATUS', status);
			resolve();
		}, err => {
			console.error(err.message);
		});
	},

	SET_ACTIVE_DAY({ commit }, day) {
		return new Promise((resolve, reject) => {
			commit('SET_ACTIVE_DAY', day);
			resolve();
		}, err => {
			console.error(err.message);
		});
	},

	SET_THEME({ commit }, theme) {
		return new Promise((resolve, reject) => {
			window.localStorage.setItem("theme", theme);
			commit('SET_THEME', theme);
			resolve();
		}, err => {
			console.error(err.message);
		});
	},

	SET_UNITS({ commit }, units) {
		return new Promise((resolve, reject) => {
			window.localStorage.setItem("units", units);
			commit('SET_UNITS', units);
			resolve();
		}, err => {
			console.error(err.message);
		});
	},

	SET_LANGUAGE({ commit }, language) {
		return new Promise((resolve, reject) => {
			window.localStorage.setItem("language", language);
			commit('SET_LANGUAGE', language);
			commit('SET_LANG', language);
			resolve();
		}, err => {
			console.error(err.message);
		});
	},

	/*SET_LANG ({ commit }, language) {
 	return new Promise((resolve, reject) => {
 		commit('SET_LANGUAGE', store.getters.language);
         resolve();
 	},
 	(err => {
 		console.error(err.message);
 	}));
 },*/

	FETCH_COORDS({ commit }) {
		return new Promise((resolve, reject) => {
			window.navigator.geolocation.getCurrentPosition(position => {
				commit('SET_COORDS', {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				});
				resolve();
			}, err => {
				console.error(err.message);
			});
		});
	}
};

/* harmony default export */ __webpack_exports__["a"] = (actions);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_details_js__ = __webpack_require__(3);



const getters = {
    currentWeather: state => {
        return state.weather.current;
    },
    forecast: state => {
        return state.weather.forecast;
    },
    location: state => {
        return state.weather.location;
    },
    latitude: state => {
        return state.coords.latitude;
    },
    longitude: state => {
        return state.coords.longitude;
    },
    status: state => {
        return state.status;
    },
    activeDay: state => {
        return state.activeDay;
    },
    theme: state => {
        return state.theme;
    },
    units: state => {
        return state.units;
    },
    language: state => {
        return state.language;
    },
    lang: state => {
        return state.lang;
    },
    currentTemp: state => {
        if (state.units === "imperial") {
            return {
                avg: state.weather.current.temp_f + "\xB0F",
                min: state.weather.forecast.forecastday[0].day.mintemp_f + "\xB0F",
                max: state.weather.forecast.forecastday[0].day.maxtemp_f + "\xB0F"
            };
        } else {
            return {
                avg: state.weather.current.temp_c + "\xB0C",
                min: state.weather.forecast.forecastday[0].day.mintemp_c + "\xB0C",
                max: state.weather.forecast.forecastday[0].day.maxtemp_c + "\xB0C"
            };
        }
    },

    dashDetails: state => {
        if (state.units === "imperial") {
            return {
                humidity: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_details_js__["a" /* mapDetails */])(state.weather.forecast.forecastday, 'day', 'avghumidity', '%'),
                uv: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_details_js__["a" /* mapDetails */])(state.weather.forecast.forecastday, 'day', 'uv', ''),
                temperature: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_details_js__["a" /* mapDetails */])(state.weather.forecast.forecastday, 'day', 'avgtemp_f', '\xB0F'),
                precipation: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_details_js__["a" /* mapDetails */])(state.weather.forecast.forecastday, 'day', 'totalprecip_in', ' in'),
                pressure: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_details_js__["b" /* mapAndReduce */])(state.weather.forecast.forecastday, 'hour', 'pressure_in', ' in', 0),
                wind: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_details_js__["a" /* mapDetails */])(state.weather.forecast.forecastday, 'day', 'maxwind_mph', ' MPH')
            };
        } else {
            return {
                humidity: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_details_js__["a" /* mapDetails */])(state.weather.forecast.forecastday, 'day', 'avghumidity', '%'),
                uv: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_details_js__["a" /* mapDetails */])(state.weather.forecast.forecastday, 'day', 'uv', ''),
                temperature: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_details_js__["a" /* mapDetails */])(state.weather.forecast.forecastday, 'day', 'avgtemp_c', '\xB0C'),
                precipation: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_details_js__["a" /* mapDetails */])(state.weather.forecast.forecastday, 'day', 'totalprecip_mm', ' in'),
                pressure: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_details_js__["b" /* mapAndReduce */])(state.weather.forecast.forecastday, 'hour', 'pressure_mb', ' hPa', 0),
                wind: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_details_js__["a" /* mapDetails */])(state.weather.forecast.forecastday, 'day', 'maxwind_kph', ' KPH')
            };
        }
    }
};
/* harmony default export */ __webpack_exports__["a"] = (getters);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_lang_lang_js__ = __webpack_require__(4);


const mutations = {
    SET_WEATHER: (state, data) => {
        state.weather = data;
    },
    SET_COORDS: (state, data) => {
        state.coords = data;
    },
    SET_STATUS: (state, status) => {
        state.status = status;
    },
    SET_ACTIVE_DAY: (state, day) => {
        state.activeDay = day;
    },
    SET_THEME: (state, theme) => {
        state.theme = theme;
    },
    SET_UNITS: (state, units) => {
        state.units = units;
    },
    SET_LANGUAGE: (state, language) => {
        state.language = language;
    },
    SET_LANG: (state, language) => {
        state.lang = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_lang_lang_js__["a" /* getTranslation */])(language);
    }
};

/* harmony default export */ __webpack_exports__["a"] = (mutations);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(35)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(62),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(41)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(68),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7046f0ad",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(34)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(61),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(39)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(66),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(31)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(58),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(37)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(64),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(30)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(57),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-01e65d26",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(42)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(69),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(38)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(65),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4757b105",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(43)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(70),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(36)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(63),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2eaca4ec",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(32)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(59),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-12884392",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail"
  }, [_c('i', {
    staticClass: "wi icon",
    class: _vm.icon
  }), _vm._v(" "), _c('p', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.$store.getters.dashDetails[_vm.name][_vm.$store.getters.activeDay]))]), _vm._v(" "), _c('p', {
    staticClass: "text"
  }, [_vm._v(" " + _vm._s(_vm.$store.getters.lang.details[_vm.name]) + " ")])])
},staticRenderFns: []}

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "thumbnail"
  }, [_c('main')])
}]}

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "units"
  }, [_c('main', [_c('button', {
    staticClass: "setting",
    on: {
      "click": function($event) {
        _vm.toggleSetting()
      }
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$store.getters.lang.settings.units.name))]), _vm._v(" "), _c('div', {
    staticClass: "values"
  }, [_c('div', {
    staticClass: "arrow-down",
    class: {
      invetred: _vm.toggle
    }
  })])]), _vm._v(" "), (this.toggle === true) ? _c('div', {
    staticClass: "content"
  }, [_c('form', [_c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.$store.getters.units),
      expression: "$store.getters.units"
    }],
    attrs: {
      "type": "radio",
      "value": "metric"
    },
    domProps: {
      "checked": _vm._q(_vm.$store.getters.units, "metric")
    },
    on: {
      "change": function($event) {
        _vm.changeUnits('metric')
      },
      "__c": function($event) {
        _vm.$store.getters.units = "metric"
      }
    }
  }), _vm._v(" "), _c('label', [_vm._v(_vm._s(_vm.$store.getters.lang.settings.units.metric))])]), _vm._v(" "), _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.$store.getters.units),
      expression: "$store.getters.units"
    }],
    attrs: {
      "type": "radio",
      "value": "imperial"
    },
    domProps: {
      "checked": _vm._q(_vm.$store.getters.units, "imperial")
    },
    on: {
      "change": function($event) {
        _vm.changeUnits('imperial')
      },
      "__c": function($event) {
        _vm.$store.getters.units = "imperial"
      }
    }
  }), _vm._v(" "), _c('label', [_vm._v(_vm._s(_vm.$store.getters.lang.settings.units.imperial))])])])]) : _vm._e()])])
},staticRenderFns: []}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dashboard"
  }, [_c('menu-bar'), _vm._v(" "), _c('current'), _vm._v(" "), _c('calendar'), _vm._v(" "), _c('dash-details'), _vm._v(" "), _c('day-night')], 1)
},staticRenderFns: []}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "day-night"
  }, [_c('main', [_c('div', {
    staticClass: "visualisation"
  }, [_c('div', {
    staticClass: "day"
  }, [_c('div', {
    staticClass: "current"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "description"
  }, [_c('div', {
    staticClass: "desc, start"
  }, [_c('p', {
    staticClass: "key"
  }, [_vm._v("Sunrise")]), _vm._v(" "), _c('p', {
    staticClass: "value"
  }, [_c('strong', [_vm._v("04:51")])])]), _vm._v(" "), _c('div', {
    staticClass: "desc, end"
  }, [_c('p', {
    staticClass: "key"
  }, [_vm._v("Sunset")]), _vm._v(" "), _c('p', {
    staticClass: "value"
  }, [_c('strong', [_vm._v("19:21")])])])])])])
}]}

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "calendar"
  }, [_c('main', [_c('div', {
    staticClass: "wrapper"
  }, _vm._l((this.$store.getters.forecast.forecastday), function(item, index) {
    return _c('div', {
      staticClass: "day",
      on: {
        "click": function($event) {
          _vm.changeDay(index)
        }
      }
    }, [(_vm.$store.getters.activeDay !== index) ? _c('div', {
      staticClass: "not-active"
    }, [_c('div', {
      staticClass: "offset"
    }), _vm._v(" "), _c('div', {
      staticClass: "icon",
      class: _vm.mapIcon(item.day.condition.icon)
    }), _vm._v(" "), _c('p', [_vm._v(" " + _vm._s(_vm.mapDate(item.date, index)) + " ")]), _vm._v(" "), _c('div', {
      staticClass: "offset"
    })]) : _c('div', {
      staticClass: "active"
    }, [_c('div', {
      staticClass: "offset"
    }), _vm._v(" "), _c('div', {
      staticClass: "icon",
      class: _vm.mapIcon(item.day.condition.icon)
    }), _vm._v(" "), _c('p', [_vm._v(" " + _vm._s(_vm.mapDate(item.date, index)) + " ")]), _vm._v(" "), _c('div', {
      staticClass: "offset"
    })])])
  }))])])
},staticRenderFns: []}

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "theme"
  }, [_c('main', [_c('button', {
    staticClass: "setting",
    on: {
      "click": function($event) {
        _vm.toggleSetting()
      }
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$store.getters.lang.settings.theme.name))]), _vm._v(" "), _c('div', {
    staticClass: "values"
  }, [_c('div', {
    staticClass: "arrow-down",
    class: {
      invetred: _vm.toggle
    }
  })])]), _vm._v(" "), (this.toggle === true) ? _c('div', {
    staticClass: "content"
  }, [_c('form', [_c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.$store.getters.theme),
      expression: "$store.getters.theme"
    }],
    attrs: {
      "type": "radio",
      "value": "light"
    },
    domProps: {
      "checked": _vm._q(_vm.$store.getters.theme, "light")
    },
    on: {
      "change": function($event) {
        _vm.changeTheme('light')
      },
      "__c": function($event) {
        _vm.$store.getters.theme = "light"
      }
    }
  }), _vm._v(" "), _c('label', [_vm._v(_vm._s(_vm.$store.getters.lang.settings.theme.light))])]), _vm._v(" "), _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.$store.getters.theme),
      expression: "$store.getters.theme"
    }],
    attrs: {
      "type": "radio",
      "value": "dark"
    },
    domProps: {
      "checked": _vm._q(_vm.$store.getters.theme, "dark")
    },
    on: {
      "change": function($event) {
        _vm.changeTheme('dark')
      },
      "__c": function($event) {
        _vm.$store.getters.theme = "dark"
      }
    }
  }), _vm._v(" "), _c('label', [_vm._v(_vm._s(_vm.$store.getters.lang.settings.theme.dark))])])])]) : _vm._e()])])
},staticRenderFns: []}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "menu-bar"
  }, [_c('main', [_c('router-link', {
    staticClass: "router",
    attrs: {
      "to": {
        name: 'Settings'
      }
    }
  }, [_c('button', {
    staticClass: "hamburger"
  })]), _vm._v(" "), _c('p', {
    staticClass: "description"
  }, [_vm._v("\n      " + _vm._s(_vm.$store.getters.location.name) + ", " + _vm._s(_vm.$store.getters.location.country) + "\n    ")])], 1)])
},staticRenderFns: []}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "language"
  }, [_c('main', [_c('button', {
    staticClass: "setting",
    on: {
      "click": function($event) {
        _vm.toggleSetting()
      }
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$store.getters.lang.settings.language.name))]), _vm._v(" "), _c('div', {
    staticClass: "values"
  }, [_c('div', {
    staticClass: "arrow-down",
    class: {
      invetred: _vm.toggle
    }
  })])]), _vm._v(" "), (this.toggle === true) ? _c('div', {
    staticClass: "content"
  }, [_c('form', [_c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.$store.getters.language),
      expression: "$store.getters.language"
    }],
    attrs: {
      "type": "radio",
      "value": "eng"
    },
    domProps: {
      "checked": _vm._q(_vm.$store.getters.language, "eng")
    },
    on: {
      "change": function($event) {
        _vm.changeLanguage('eng')
      },
      "__c": function($event) {
        _vm.$store.getters.language = "eng"
      }
    }
  }), _vm._v(" "), _c('label', [_vm._v(_vm._s(_vm.$store.getters.lang.settings.language.eng))])]), _vm._v(" "), _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.$store.getters.language),
      expression: "$store.getters.language"
    }],
    attrs: {
      "type": "radio",
      "value": "pol"
    },
    domProps: {
      "checked": _vm._q(_vm.$store.getters.language, "pol")
    },
    on: {
      "change": function($event) {
        _vm.changeLanguage('pol')
      },
      "__c": function($event) {
        _vm.$store.getters.language = "pol"
      }
    }
  }), _vm._v(" "), _c('label', [_vm._v(_vm._s(_vm.$store.getters.lang.settings.language.pol))])])])]) : _vm._e()])])
},staticRenderFns: []}

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "details"
  }, _vm._l((_vm.childComponents), function(item, index) {
    return _c('div', {
      staticClass: "row"
    }, [_c('detail', {
      attrs: {
        "name": item.name,
        "icon": item.icon
      }
    })], 1)
  }))
},staticRenderFns: []}

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [(this.$store.getters.status === 'INIT') ? _c('loading') : _vm._e(), _vm._v(" "), (this.$store.getters.status === 'EXECUTION') ? _c('router-view') : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "current"
  }, [_c('p', {
    staticClass: "description"
  }, [_vm._v(_vm._s(_vm.$store.getters.currentWeather.condition.text))]), _vm._v(" "), _c('div', {
    staticClass: "icon",
    class: _vm.mapIcon(_vm.$store.getters.currentWeather.condition.icon)
  }), _vm._v(" "), _c('div', {
    staticClass: "temp"
  }, [_c('p', {
    staticClass: "avg"
  }, [_vm._v(_vm._s(_vm.$store.getters.currentTemp.avg))]), _vm._v(" "), _c('div', {
    staticClass: "minor"
  }, [_c('p', {
    staticClass: "max"
  }, [_c('i', {
    staticClass: "fa fa-caret-up",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" \n                " + _vm._s(_vm.$store.getters.currentTemp.max) + "\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "min"
  }, [_c('i', {
    staticClass: "fa fa-caret-down",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" \n                " + _vm._s(_vm.$store.getters.currentTemp.min) + "\n            ")])])])])
},staticRenderFns: []}

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "loading"
  }, [_c('div', {
    staticClass: "logo"
  }), _vm._v(" "), _c('h1', [_vm._v("WEATHER")])])
}]}

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "menu-bar"
  }, [_c('main', [_c('router-link', {
    staticClass: "router",
    attrs: {
      "to": {
        name: 'Dashboard'
      }
    }
  }, [_c('button', {
    staticClass: "back-arrow"
  })]), _vm._v(" "), _c('p', {
    staticClass: "description"
  }, [_vm._v("\n      " + _vm._s(_vm.$store.getters.lang.settings.name) + "\n    ")])], 1)])
},staticRenderFns: []}

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "settings"
  }, [_c('main', [_c('menuBar'), _vm._v(" "), _c('div', {
    staticClass: "wrapper"
  }, [_c('theme'), _vm._v(" "), _c('units'), _vm._v(" "), _c('language')], 1)], 1), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', [_c('p', [_vm._v("© 2017 Jacek Głąb. All rights reserved.")])])
}]}

/***/ }),
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */
/***/ (function(module, exports) {

module.exports = {"calendar":{"0":"Sunday","1":"Monday","2":"Tuesday","3":"Wednesday","4":"Thursday","5":"Friday","6":"Saturday","today":"Today"},"details":{"temperature":"Temperature","humidity":"Humidity","uv":"UV Index","wind":"wind","precipation":"Precipation","pressure":"Pressure"},"d3":{"sunrise":"Sunrise","sunset":"Sunset"},"settings":{"name":"Settings","theme":{"name":"Theme","light":"Lignt","dark":"Dark"},"units":{"name":"Units","metric":"Metric","imperial":"Imperial"},"language":{"name":"Language","eng":"English","ger":"German","pol":"Polish"}}}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = {"calendar":{"0":"Sunday","1":"Monday","2":"Tuesday","3":"Wednesday","4":"Thursday","5":"Friday","6":"Saturday","today":"Today"},"details":{"temperature":"Temperature","humidity":"Humidity","uv":"UV Index","wind":"wind","precipation":"Precipation","pressure":"Pressure"},"d3":{"sunrise":"Sunrise","sunset":"Sunset"},"settings":{"name":"Settings","theme":{"name":"Theme","light":"Lignt","dark":"Dark"},"units":{"name":"Units","metric":"Metric","imperial":"Imperial"},"Language":{"name":"Language","eng":"English","ger":"German","pl":"Polish"}}}

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = {"calendar":{"0":"Niedziela","1":"Poniedziałek","2":"Wtorek","3":"Środa","4":"Czwartek","5":"Piątek","6":"Sobota","today":"Dzisiaj"},"details":{"temperature":"Temperatura","humidity":"Wilgotność","uv":"Indeks UV","wind":"Wiatr","precipation":"Opady","pressure":"Ciśnienie"},"d3":{"sunrise":"Wschód","sunset":"Zachód"},"settings":{"name":"Ustawienia","theme":{"name":"Skórka","light":"Jasna","dark":"Ciemna"},"units":{"name":"Jednostki","metric":"Metryczne","imperial":"Imperialne"},"language":{"name":"Język","eng":"Angielski","ger":"Niemiecki","pol":"Polski"}}}

/***/ })
],[26]);
//# sourceMappingURL=app.910d81844201eae1c6e8.js.map