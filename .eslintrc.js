/*
 * @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-15 17:55:55
 * @LastEditTime: 2019-05-16 13:55:13
 */
module.exports = {
  extends: ["taro"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: true,
    project: "./tsconfig.json"
  },
  rules: {
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] }
    ],
    //强制return
    'getter-return': 1,
    'no-await-in-loop': 0,
    //必须使用\n换行
    "linebreak-style": [2, "unix"],
    //使用单引号
    quotes: [2, "single"],
    //必须使用括号包裹箭头函数的参数
    "arrow-parens": [2, "always"],
    //强制 generator 函数
    "generator-star-spacing": [2, { before: false, after: true }],
    "no-debugger": 2,
    //函数空格的问题
    "space-before-function-paren": [2, {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    //分号
    semi: [2, "always"],
    "semi-spacing": [2, { before: false, after: true }],
    "semi-style": [2, "last"],
    //console
    "no-console": [
      1,
      {
        allow: [
          1,
          2,
          "info",
          "group",
          "groupCollapsed",
          "groupEnd",
          "table"
        ]
      }
    ],
    //禁用常量表达式
    "no-constant-condition": 2,
    //禁止出现重复的键
    "no-dupe-keys": 2,
    //禁止导入重复模块
    "no-duplicate-imports": 2,
    //jsx中使用单引号
    "jsx-quotes": [2, "prefer-double"],
    //括号内空格
    "space-in-parens": [2, "never"],
    //禁止使用嵌套的三元表达式
    "no-nested-ternary": 2,
    //禁止混合缩进
    "no-mixed-spaces-and-tabs": 2,
    //空格缩进
    indent: [2, 2, { "SwitchCase": 1 }],
    //调用构造函数必须带括号
    "new-parens": 2,
    //多行注释风格
    // 'multiline-comment-style': ['error', 'starred-block'],
    //this别名
    "consistent-this": [2, "_this"],
    //大括号风格
    "brace-style": 2,
    //拖尾逗号
    "comma-dangle": [2, "always-multiline"],
    //正则表达式必须被括起来
    "wrap-regex": 2,
    //不要省地方
    "arrow-spacing": 2,
    //标记无效或缺失的 super() 调用
    "constructor-super": 2,
    //操作符和箭头函数混用
    "no-confusing-arrow": 2,
    //九年制调用 super() 之前使用 this 或 super
    "no-this-before-super": 2,
    //不要玩花
    "no-useless-computed-key": 2,
    //避免新手问题
    "no-new-symbol": 2,
    //不要使用var
    "no-var": 2,
    //简写
    "object-shorthand": 2,
    //必须要有 yield
    "require-yield": 2,
    //不要省地方
    "rest-spread-spacing": [2, "never"],
    //不要省括号
    curly: 2,
    //switch
    "default-case": 2,
    //点点和操作符
    "dot-location": [2, "property"],
    //恒等号
    eqeqeq: [2, "always"],
    //for-in 中必须判断
    "guard-for-in": 2,
    //alert
    // 'no-alert': 'error',
    "no-caller": 2,
    //switch 词法声明
    "no-case-declarations": 2,
    //消除正则则表达式歧义
    "no-div-regex": 2,
    //结构不能为空
    "no-empty-pattern": 2,
    //禁止 null 比较
    "no-eq-null": 2,
    //禁止 eval
    "no-eval": 2,
    //禁止扩展原生类型
    "no-extend-native": 2,
    //禁止不必要的标签
    "no-extra-label": 2,
    //switch
    "no-fallthrough": 2,
    //金庸浮点小数
    "no-floating-decimal": 2,
    //禁止改变原生对象的值
    "no-global-assign": 2,
    //禁止使用短符号进行类型转换
    "no-implicit-coercion": 2,
    //禁止在全局范围使用变量和函数声明
    "no-implicit-globals": 2,
    //禁用迭代器
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    //多空格问题
    "no-multi-spaces": 2,
    //多行字符串
    "no-multi-str": 2,
    "no-new": 2,
    //禁用Function构造函数
    "no-new-func": 2,
    //禁止原始包装实例
    "no-new-wrappers": 2,
    //禁用八进制字面量
    "no-octal": 2,
    //禁止对函数参数再赋值
    "no-param-reassign": 2,
    //禁用__proto__
    "no-proto": 2,
    //禁止多次声明同一个变量
    "no-redeclare": 2,
    //return禁止赋值
    "no-return-assign": [2, "always"],
    //禁止return await
    "no-return-await": 2,
    "no-script-url": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    //禁止未使用过的表达式
    "no-unused-expressions": 2,
    "no-useless-concat": 2,
    //void
    "no-void": 2,
    //禁用 with 语句
    "no-with": 2,
    //要求使用 Error 对象作为 Promise 拒绝的原因
    "prefer-promise-reject-errors": 2,
    //要求必须有基数 parseInt
    radix: 2,
    //禁止使用不带 await 表达式的 async 函数
    "require-await": 2,
    //var 必须在作用域顶部
    "vars-on-top": 2,
    //需要把立即执行的函数包裹起来
    "wrap-iife": [2, "outside"],
    // if Yoda 条件
    yoda: 2,
    //禁止删除变量
    "no-delete-var": 2,
    "no-shadow-restricted-names": 2,
    "no-undef": 2,
    "no-undefined": 2,
    "no-unused-vars": 1,
    "no-use-before-define": 2
  }
};

// 详细规则说明请查看 http://eslint.cn/docs/rules/
