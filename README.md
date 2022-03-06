# advanced-bookmark
Searchable advanced bookmark

# Contribution Guide 
## Code Guide
### Use undefined
> 'null과 undefined' 중 'undefined'를 구현시 사용합니다.
### Do Not Use Advanced Typescript Grammar
Typescript의 사용 목적은 "개발의 편리함"외에는 없습니다, js/ts 종속적인 문법을 지양해주세요
### PR Guide
1. Write Your Code
2. Make PR
3. Check Pass required status
4. mention and set reviewer `tooktak/clipbook`


# Develop Guide
## Project Setting
1. Clone project
2. Run `npm ci` (install dependencies)
> `npm install` 을 하지 않고 `npm ci` 를 하는 이유는 
<br> `package.json` 과 `package-lock.json` 의 dependancy가 일치하지 않으면 
<br> 종료하여 안정성을 지킬 수 있습니다.

> ` Cannot find module` 에러 발생시 대처방법
<br> 1. `package-lock.json` 파일과 `node_modules` 디렉토리 삭제
<br> 2. `npm install` 명령어로 `package-lock.json` 생성
## Local Test
1. Run `npm run build` (build project)
2. If you want build with hot reloading, Run `npm run watch`
3. Upload built project to local chrome and debug
## Lint
1. install eslint
2. Run `eslint .`
    
