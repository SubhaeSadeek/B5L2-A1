# B5L2-A1

---

# Two aspects of typescript that we all need to know

---

TypeScript brings type `safety`, `scalability`, and `powerful tooling` to JavaScript, making it ideal for large-scale applications. It enhances code quality, reduces bugs, and improves developer productivity with intelligent autocompletion, refactoring, and seamless collaboration.

**Let us Discuss two aspect of typescript**

## Some differences between interfaces and types in TypeScript:

- `interface` need to write in object like syntax. Whereas `type` can be written in old fashioned way.
- `type` is used to declare primitive data type and interface can be used for all.

## use of the `keyof` keyword in TypeScript:

The `keyof` keyword in `TypeScript` is used to create a union of all property names (keys) of a given type. It allows developers to reference keys in a type-safe way, enabling better tooling and error checking. `keyof` is often used with generics to build reusable functions, such as safely accessing object properties or creating utility types like `Pick` or `Record`, ensuring only valid keys are used at compile time.

- `keyof` is effective for dynamically use keys which is produce in union for all properties/keys
- It is used frequently with generic type
