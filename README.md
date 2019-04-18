

# city-news-mashup
  
> A mashup project with city news, developed for the Cloud Computing course.

<div style="float:left;"> 
<img src="https://img.shields.io/badge/deploy-success-brightgreen.svg?style=popout&logo=dev.to" alt="Build Status">  <img src="https://img.shields.io/badge/version-1.0-green.svg?style=popout&logo=dev.to" alt="Version">
<img src="https://img.shields.io/badge/npm-v2.6.10-blue.svg?style=popout&logo=npm" alt="Version">
<img src="https://img.shields.io/badge/license-MIT-red.svg?style=popout&logo=dev.to" alt="License">
<img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg?style=popout&logo=wechat" alt="Chat">
</div>


## Reminder and Checklist

[ ] Delete Baidu Map、JUHE Data、HeFeng Weather、NewsApi key

[ ] Complete readme

## Introduction

Page preview: [Click here](http://13.113.117.126:8080/dist/).

A mashup project with Vue.js frame. This is the first complete Vue Project for me, using only basic grammar and characteristics, which is also friendly to the starter of Vue.js frame. 

Since the project is for the course homework, warranty is not supported. However, if bugs are reported, fixing and strengthening this project is possible if time's allowed. To report the problem, please open (or create) an issue at this project on the GitHub, and pray for receiving response :-).  

## Technology Stack

vue2 + vue-router + npm + ES6 + ajax + jsonp

The project is a completely front-end project, without using any back-end framework such as Spring MVC or Laravel.

## API Calls

Project used series of API (Application programmable interface) to build. Brief intro are listed here:

| Source         | Website                  | Usage                                                        |
| -------------- | ------------------------ | ------------------------------------------------------------ |
| Baidu Map      | api.map.baidu.com        | Show the map data, helping users get a quick impression of cities' geography. |
| JuHe Data      | juhe.cn | Translate Chinese name to phonetic alphabet                  |
| NewsApi        | newsapi.org              | Get the news data in current city                            |
| HeFeng Weather | heweather.com       | Get the weather data in current city                         |

## Copyright

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.

If used for course homework or commercial situation, it should subject to the following conditions: Be sure to assert the author's name and details in the project with obvious position.

For the detail, read the complete [copyright](./LICENSE) here.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader). However, as a sample Vue.js project, tests are not included (since it's too simple to test).
