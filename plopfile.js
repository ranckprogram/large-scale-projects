module.exports = (plop) => {
  plop.setGenerator("create component", {
    description: "创建react函数式组件",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "componentName is ",
        default: "App",
      },
    ],
    actions: [
      {
        type: "add",
        path: "components/{{componentName}}.jsx",
        templateFile: "./templates/com.hbs",
      },
    ],
  });

  plop.setGenerator("create commonjs", {
    description: "创建普通js",
    prompts: [
      {
        type: "input",
        name: "method",
        message: "methodName is ",
        default: "tool",
      },
    ],
    actions: [
      {
        type: "add",
        path: "tools/{{method}}.js",
        templateFile: "./templates/tool.hbs",
      },
    ],
  });
};
