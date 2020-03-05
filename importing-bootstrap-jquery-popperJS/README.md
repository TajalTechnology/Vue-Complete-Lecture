# ecomerce-shop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

process: for bootstrap
1. npm install bootstrap --save
2.main.js{
	import 'bootstarp';
	}
3.create css file in assets{
	app.scss
	}
4.main.js{
	import './assets/app.scss';
	}
5.app.scss{
	@import '~bootstrap/scss/bootstrap';
	}
Now you can enjoy bootstrap in your vue project

process: for jquery

1.npm install jquery --save

2.main.js{

	import jQuery from 'jquery';

	window.$ = window.jQuery =jQuery;

	}

Now you can enjoy jquery in your vue project

process: for popper.js

1.main.js{

	import 'popper.js';

	}

Now you can enjoy popper.js in your vue project
