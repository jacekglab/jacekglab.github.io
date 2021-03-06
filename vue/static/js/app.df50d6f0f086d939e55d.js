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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getters_js__ = __webpack_require__(23);






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

const state = {
  weather: "weather",
  coords: "coords",
  status: 'INIT',
  activeDay: 0
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(34)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(63),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_refactor_loading__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_refactor_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_refactor_loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_refactor_dash_root__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_refactor_dash_root___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_refactor_dash_root__);
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
  name: 'app',
  components: {
    loading: __WEBPACK_IMPORTED_MODULE_0__components_refactor_loading___default.a,
    dashboard: __WEBPACK_IMPORTED_MODULE_1__components_refactor_dash_root___default.a
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    init() {
      this.$store.dispatch('FETCH_COORDS').then(() => this.$store.dispatch('FETCH_WEATHER', `${this.$store.getters.latitude},${this.$store.getters.longitude}`)).then(() => this.$store.dispatch('SET_STATUS', "EXECUTION"));
    }
  },
  mounted() {
    this.init();
  }
});

/***/ }),
/* 6 */
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
            if (index === 0) return "Today";else return new Date(date).toDateString().slice(0, 3);
        },
        changeDay(index) {
            this.$store.dispatch('SET_ACTIVE_DAY', index);
        }
    }
});

/***/ }),
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__details_temperature__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__details_temperature___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__details_temperature__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details_humidity__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details_humidity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__details_humidity__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_uvindex__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_uvindex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__details_uvindex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_wind__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_wind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__details_wind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_precip__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_precip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__details_precip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_pressure__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_pressure___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__details_pressure__);
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
    name: 'details',
    components: {
        temperature: __WEBPACK_IMPORTED_MODULE_0__details_temperature___default.a,
        humidity: __WEBPACK_IMPORTED_MODULE_1__details_humidity___default.a,
        uvindex: __WEBPACK_IMPORTED_MODULE_2__details_uvindex___default.a,
        wind: __WEBPACK_IMPORTED_MODULE_3__details_wind___default.a,
        precip: __WEBPACK_IMPORTED_MODULE_4__details_precip___default.a,
        pressure: __WEBPACK_IMPORTED_MODULE_5__details_pressure___default.a
    },
    data() {
        return {
            index: this.$store.getters.activeDay
        };
    },
    methods: {
        calc(data, type) {
            return parseInt(data.map(data => data[type]).reduce((prev, next) => prev + next) / data.length);
        }
    }
});

/***/ }),
/* 10 */
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
/* 11 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'menu-bar',
  components: {},
  data() {
    return {};
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dash_menu_bar__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dash_menu_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dash_menu_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dash_current__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dash_current___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dash_current__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dash_day_night__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dash_day_night___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dash_day_night__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dash_details__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dash_details___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__dash_details__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dash_image__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dash_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__dash_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dash_calendar__ = __webpack_require__(40);
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "humidity"
});

/***/ }),
/* 14 */
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
    name: "precip",
    methods: {
        calc(data, type) {
            return parseInt(data.map(data => data[type]).reduce((prev, next) => prev + next) / data.length);
        }
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'pressure',
    methods: {
        calc(data, type) {
            return parseInt(data.map(data => data[type]).reduce((prev, next) => prev + next) / data.length);
        }
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "temperature"

});

/***/ }),
/* 17 */
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
    name: "uvindex"
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
    name: "wind",
    methods: {
        calc(data, type) {
            return parseInt(data.map(data => data[type]).reduce((prev, next) => prev + next) / data.length);
        }
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

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const baseUrl = 'https://api.apixu.com/v1/forecast.json?';
const key = 'cb18824ab7e140d2944131821172407';

const get = location => `${baseUrl}key=${key}&q=${location}&days=7`;
/* harmony export (immutable) */ __webpack_exports__["a"] = get;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vuex_store_js__ = __webpack_require__(3);




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = true;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  store: __WEBPACK_IMPORTED_MODULE_2__vuex_store_js__["a" /* default */],
  el: '#app',
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_apixu__ = __webpack_require__(20);
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    }
};
/* harmony default export */ __webpack_exports__["a"] = (getters);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    }
};

/* harmony default export */ __webpack_exports__["a"] = (mutations);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(28)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(57),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(36)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(65),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7046f0ad",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(27)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(56),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(33)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(25)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(54),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(29)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(26)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(55),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(39)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(68),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-bc937862",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(30)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(59),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4dcaf563",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(32)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(61),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5521f73e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(38)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(67),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-a29a6cf0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(31)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(60),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-54c57b36",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(35)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(64),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-614ba6a4",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(37)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
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
/* 54 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "thumbnail"
  }, [_c('main')])
}]}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dashboard"
  }, [_c('menu-bar'), _vm._v(" "), _c('current'), _vm._v(" "), _c('calendar'), _vm._v(" "), _c('dash-details'), _vm._v(" "), _c('day-night')], 1)
},staticRenderFns: []}

/***/ }),
/* 56 */
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
    staticClass: "desc"
  }, [_c('p', [_vm._v("Sunrise")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("04:51")])])]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_c('p', [_vm._v("Sunset")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("19:21")])])])])])])
}]}

/***/ }),
/* 57 */
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
      staticClass: "icon",
      class: _vm.mapIcon(item.day.condition.icon)
    }), _vm._v(" "), _c('p', [_vm._v(" " + _vm._s(_vm.mapDate(item.date, index)) + " ")])]) : _c('div', {
      staticClass: "active"
    }, [_c('div', {
      staticClass: "icon",
      class: _vm.mapIcon(item.day.condition.icon)
    }), _vm._v(" "), _c('p', [_vm._v(" " + _vm._s(_vm.mapDate(item.date, index)) + " ")])])])
  }))])])
},staticRenderFns: []}

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "menu-bar"
  }, [_c('main', [_c('i', {
    staticClass: "fa fa-bars",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('p', [_c('strong', [_vm._v(_vm._s(_vm.$store.getters.location.name))]), _vm._v(" | " + _vm._s(_vm.$store.getters.location.country) + "\n      "), _c('i', {
    staticClass: "fa fa-caret-down",
    attrs: {
      "aria-hidden": "true"
    }
  })])])])
},staticRenderFns: []}

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "precip detail"
  }, [_c('i', {
    staticClass: "wi wi-umbrella icon"
  }), _vm._v(" "), _c('p', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.calc(this.$store.getters.forecast.forecastday[_vm.$store.getters.activeDay].hour, "precip_mm")))]), _vm._v(" "), _c('p', {
    staticClass: "text"
  }, [_vm._v("Precip")])])
},staticRenderFns: []}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "uvindex detail"
  }, [_c('i', {
    staticClass: "wi wi-day-sunny icon"
  }), _vm._v(" "), _c('p', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.$store.getters.forecast.forecastday[_vm.$store.getters.activeDay].day.uv))]), _vm._v(" "), _c('p', {
    staticClass: "text"
  }, [_vm._v("UV Index")])])
},staticRenderFns: []}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pressure detail"
  }, [_c('i', {
    staticClass: "wi wi-barometer icon"
  }), _vm._v(" "), _c('p', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.calc(this.$store.getters.forecast.forecastday[_vm.$store.getters.activeDay].hour, "pressure_mb")))]), _vm._v(" "), _c('p', {
    staticClass: "text"
  }, [_vm._v("Pressure")])])
},staticRenderFns: []}

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "details"
  }, [_c('main', [_c('div', {
    staticClass: "row"
  }, [_c('temperature'), _vm._v(" "), _c('humidity'), _vm._v(" "), _c('uvindex')], 1), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('wind'), _vm._v(" "), _c('precip'), _vm._v(" "), _c('pressure')], 1)])])
},staticRenderFns: []}

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [(this.$store.getters.status === 'INIT') ? _c('loading') : _vm._e(), _vm._v(" "), (this.$store.getters.status === 'EXECUTION') ? _c('dashboard') : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wind detail"
  }, [_c('i', {
    staticClass: "wi wi-strong-wind icon"
  }), _vm._v(" "), _c('p', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.calc(this.$store.getters.forecast.forecastday[_vm.$store.getters.activeDay].hour, "wind_kph")))]), _vm._v(" "), _c('p', {
    staticClass: "text"
  }, [_vm._v("Wind")])])
},staticRenderFns: []}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "current"
  }, [_c('main', [_c('p', {
    staticClass: "description"
  }, [_vm._v(_vm._s(_vm.$store.getters.currentWeather.condition.text))]), _vm._v(" "), _c('div', {
    staticClass: "icon",
    class: _vm.mapIcon(_vm.$store.getters.currentWeather.condition.icon)
  }), _vm._v(" "), _c('div', {
    staticClass: "temp"
  }, [_c('p', {
    staticClass: "avg"
  }, [_vm._v(_vm._s(_vm.$store.getters.currentWeather.temp_c + "\xB0C"))]), _vm._v(" "), _c('div', {
    staticClass: "minor"
  }, [_c('p', [_c('i', {
    staticClass: "fa fa-caret-up",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v("\n                      " + _vm._s(_vm.$store.getters.forecast.forecastday[0].day.maxtemp_c + "\xB0C") + "\n                  ")]), _vm._v(" "), _c('p', [_c('i', {
    staticClass: "fa fa-caret-down",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v("\n                      " + _vm._s(_vm.$store.getters.forecast.forecastday[0].day.mintemp_c + "\xB0C") + "\n                  ")])])])])])
},staticRenderFns: []}

/***/ }),
/* 66 */
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
/* 67 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "temperature detail"
  }, [_c('i', {
    staticClass: "wi wi-thermometer icon"
  }), _vm._v(" "), _c('p', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.$store.getters.forecast.forecastday[_vm.$store.getters.activeDay].day.avgtemp_c))]), _vm._v(" "), _c('p', {
    staticClass: "text"
  }, [_vm._v("Temperature")])])
},staticRenderFns: []}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "humidity detail"
  }, [_c('i', {
    staticClass: "wi wi-humidity icon"
  }), _vm._v(" "), _c('p', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.$store.getters.forecast.forecastday[_vm.$store.getters.activeDay].day.avghumidity))]), _vm._v(" "), _c('p', {
    staticClass: "text"
  }, [_vm._v("Humidity")])])
},staticRenderFns: []}

/***/ })
],[21]);
//# sourceMappingURL=app.df50d6f0f086d939e55d.js.map