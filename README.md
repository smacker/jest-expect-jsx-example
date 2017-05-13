Recent versions of jest have moved to jasmine2 and disabled mocking by default. And now jest is a first class citizen for jasmine-expect-jsx.

You can read how to use it with jest in README:
https://github.com/smacker/jasmine-expect-jsx#jest

Beside that every change to jasmine-expect-jsx is tested not only with jasmine, but with jest too.

# Example repo how to use jasmine-expect-jsx with jest

1. Use jasmine2, not jasmine1
2. add `jasmine-expect-jsx` in `unmockedModulePathPatterns` section of package.json
3. import `jasmine-expect-jsx` in `setupTestFrameworkScriptFile` file
