### reverseColor
得到某个颜色的互补色

### github地址：https://github.com/LiuJiaWeb/reverseColor

### npm地址：https://www.npmjs.com/package/reversecolor

### 个人博客：https://liujiaweb.cn/

### 说明
假如有一个需求，背景色是动态改变的，背景之上有文字，要求背景无论怎么改变，文字都必须看得清楚；

所以这时候文字的颜色，必须是背景的互补色，例如：背景为深灰色，则文字为浅色，否则都为深色系或浅色系就看不清。

### 使用
#### 安装
npm i reversecolor
#### 项目中引入
import CalcColor from 'reversecolor'
#### 函数中使用
如 const result = CalcColor('#333') //输出的result值为 '#cccccc'
