# My TODO Practice

###### tags: `todo`, `JavaScript`, `JQuery`, `Vue`

---

### Demo

[Vanilla JavaScipt](https://askiebaby.github.io/todo/js-version/) / [JQuery](https://askiebaby.github.io/todo/jq-version/) / [Vue](https://askiebaby.github.io/todo/vue-version/)

---

![](https://i.imgur.com/oNP1uv9.gif)

---

### Project 說明

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

這是一個透過 `Vanilla JavaScipt` / `JQuery` / `Vue` 實作 `To Do List` 的練習。學習透過原生 `JavaScipt` 操作 `DOM API`，再比較使用 `Library` 和 `Framework` 的異同，去理解它們底層分別處理掉了什麼原生語法需要處理的麻煩事。

---

### 使用說明

1. 輸入**待辦事項**後，點選**新增**可以將事項加入未完成的項目。
2. 並且可以針對待辦事項直接做內容的**修改**及**刪除**。
3. 做完的事項可以勾選變成 **已完成項目**，也能將**已完成的項目**的**狀態**改為**未完成**。

---

### 學習紀錄

#### Vanilla JavaScipt

- selector：`.querySelector()`, `.querySelectorAll()`
- array maniputation：`.push()`, `.unshift()`, `.splice()`, `.length`
- hierarchy：`.parentElement`, `.children[i]`
- what's `this` !
- data：`.innerHTML`, `.textContent`, `value`
- event handler：`.addEventListener()`, `.removeEventListener()`, `click`, `blur`, `focus`
- 三元表達式
- `var` versus `let`
- `template literals`
- `ES5 function` versus `arrow function`
- array loop：`.forEach()`
- 防止冒泡向上傳遞：`event.stopPropogation()`
- 防止觸發預設事件：`event.preventDefault()`
- `return`

##### 註記 css: input 元素不能使用偽元素！

#### JQuery

```javascript=
// Vanilla
document.addEventListener("DOMContentLoaded", function() {});

// 等於 JQuery 的
$(document).ready(function() {});
```

- selector：`$.( )`
- loop：`.each()`
- 防止冒泡向上傳遞：`event.stopPropogation()`
- 防止觸發預設事件：`event.preventDefault()`
- getter and setter：`.val()`, `.empty()`, `.text()`
- event handler：`click`, `blur`, `focus`, `on`, `off`
- `JQuery Objects` 才能使用 `JQuery Methods`
- hierarchy：`.parent()`, `.children()`
- dataset：`$('[data-name]')`
- `this` versus `$(this)`

#### Vue

- Vue
  - Event handlers
  - value passing between parent component and child component
  - Attribute - ref
  - Directives
  - Config
  - Modifiers
- VueX
  - state, getters, mutations, actions
- Vue Router
