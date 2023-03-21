# Документация к библиотеке EhLib 11.0

Документация написана с использованием библиотеки VuePress 
https://v2.vuepress.vuejs.org/

с расширением vuepress-theme-hope
https://theme-hope.vuejs.press/

  Какие фитчи добавляет vuepress-theme-hope?
   

Используется VuePress версии 2.0 beeta

# Окружение, необходимое для разработки документации.

Базовой библиотекой является библиотека VueJS.
VuePress это дополнительная библиотека, которая позовляет писать документацию на основе md файлов.
В папке src\EhLibDoc необходимо создавать md файлы.
Они будут автоматически включены в документацию.

Настроки сборки документации находятся в файлах:
src\.vuepress\config.ts
src\.vuepress\theme.ts

Папку с этим файлом необходимо открывать в редакторе VSCode 
https://code.visualstudio.com/

Настройки библиотек VueJS находятся в файле package.json

# Запуск и работа с докуметацией в режиме разработки.
Для запуска проекта в режиме разработки в TERMINAL нажно набрать команду
  npm run docs:dev

После этого открыть ссылку
  http://localhost:8080/online-help-vuepress-hope/

При изменении md файлов в проекте данные в браузере должны обновлятся автоматически.

# Сборка документации для деплоймента.
Для сборку документации для деплоймента на сервер небходимо набрать команду 
  npm run docs:build

Конечные скомпилированные файлы буду выгружены в папку 
  EhLib-vp-theme-hope\src\.vuepress\dist\

При сборке проекта библиотека VuePress транслирует md файлы в html файлы.

В текущей настроке проекта папку dist\ необходимо компировать в папку 'online-help-vuepress-hope' на сервере.


# Расширения vuepress-theme-hope

## Вначале md файла можно сделать настройки по отображения страницы в sidebar (Левая панель с деревом содержимого документации)

---
title: TDBGridEh Component
icon: stack
index: false
---

index: false - не показывать страницу в sidebar

# Быстрые клавиши в VSCode
Чтобы обрамить выбранные текст в html tag нажми
- Ctrl + Shift + P
- Выбери Emmit: Wrap with Abbreviation
- Набери нужный tag
- Выбранный текст должен обрамится в указанный tag


# Вставка pascal кода в MD текст

```pascal:no-line-numbers
```

# Вставка текста с отступами

Для простого одинарного отсупа для одинарного текста
  <dd>Text</dd>

Для блока с нексолькими уровнями
  <dd>Text
  <dl><dd>Text2</dd></dl>
  </dd>

  <dd>Text</dd>

# Вставка пробелов 
По умолчанию двойные/ тройные пробелы игнорируются в текста заменяя все на одинарные.
Также из текста удаляются начальные проблемы.
Чтобы вставить пробел в текст и он не удалялся используй символ.
&nbsp is the Non Breaking Space
&emsp is a wide kind of space

# Про Git
Если добавил папку в .gitignore она автоматисески не удаляется и из репозитория.
Для удаления папок из репозитория которые появились в .gitignore, нобходимо выполнить команды

```
# Remove the files from the index (not the actual files in the working copy)
$ git rm -r --cached .

# Add these removals to the Staging Area...
$ git add .

# ...and commit them!
$ git commit -m "Clean up ignored files"
```

# Про тег sh
В MD используется нестандартный тег `sh`
На самом деле это `vue` компонент, 
который реализован в файле `sh.vue`

Подлкючение файла к проекту настроено в config.ts - 
  plugins: 
     registerComponentsPlugin.


# Next
...