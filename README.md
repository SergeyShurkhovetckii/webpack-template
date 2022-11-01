## Готовая сборка Webpack 5

<div>
    <a href="https://github.com/webpack/webpack">
        <img width="150" height="150" src="https://webpack.js.org/assets/icon-square-big.svg">
    </a>
</div>
<br/>
<br/>

![GitHub release](https://img.shields.io/github/release/SergeyShurkhovetckii/webpack-template.svg)
![GitHub stars](https://img.shields.io/github/stars/SergeyShurkhovetckii/webpack-template.svg?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/SergeyShurkhovetckii/webpack-template.svg?style=social)

## Особенности сборки

* используется [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах
* выбираете любой препроцессор SASS/SCSS/LESS
* ваш CSS и JS оптимизируется и минифицируется
* установлен пакет webpack-dev-server - вам не потребуется постоянно перезагружать браузер

## Файловая структура

```
webpack-frontend-template
├── dist
├── src
│   ├── assets
│       ├── fonts
│       └── images
│   ├── styles
│   ├── index.html
│   └── index.ts
├── webpack.config.js
├── package.json
├── .editorconfig
├── .eslintignore
├── .eslintrc.json
├── .gitignore
└── .prettierrc
```

> В зависимости от фреймворка, вы можете переделать организацию файлов в папке src т.к. обычно она отличается


## Команды

* ```yarn run dev``` - собираем development
* ```yarn run build``` - собираем production
* ```yarn start``` - слежение за файлами и открываем в браузере
* ```yarn run stats``` - смотрим размеры и статы бандла

## Установка

Установим все необходимые пакеты из package.json

```bash
yarn install
```

Запускаем

```bash
yarn start
```

## Связаться со мной
