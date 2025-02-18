# JavaScript Practice Questions: Objects & Arrays

## 📌 Basic Level Questions

### 🟢 Objects (Basic)
1. **Create an object:**
   - Create an object named `person` with properties: `name`, `age`, and `city`.
   - Access and print the `name` property.

2. **Add and delete properties:**
   - Add a new property `email` to the `person` object.
   - Delete the `city` property.
   - Print the updated object.

3. **Nested objects:**
   - Create an object `student` with properties:
     ```js
     {
       name: "John",
       marks: { math: 90, science: 85, english: 88 }
     }
     ```
   - Access and print the `math` marks.

4. **Loop through an object:**
   - Use a `for...in` loop to iterate over the `person` object and print all key-value pairs.

5. **Object methods:**
   - Add a method `greet` to the `person` object that returns `"Hello, my name is [name]"`.
   - Call this method and print the output.

### 🟢 Arrays (Basic)
6. **Create and access array elements:**
   - Create an array `fruits = ["apple", "banana", "mango"]`.
   - Print the second element.

7. **Modify an array:**
   - Add "orange" to the end and "grapes" to the beginning of the `fruits` array.
   - Print the updated array.

8. **Remove elements from an array:**
   - Use `.pop()` to remove the last element and `.shift()` to remove the first element.
   - Print the updated array.

9. **Loop through an array:**
   - Use `forEach` to print each element of the `fruits` array.

10. **Find elements in an array:**
   - Given `numbers = [10, 20, 30, 40, 50]`, use `.find()` to get the first number greater than `25`.

---

## 📌 Intermediate Level Questions

### 🔵 Objects (Intermediate)
1. **Object with dynamic keys:**
   - Create an object `user = { name: "Alice", age: 25 }`.
   - Use a variable `key = "email"` to add a property dynamically (`user.email = "alice@example.com"`).

2. **Check if a key exists:**
   - Write a function `hasKey(obj, key)` that checks if a key exists in an object.

3. **Merge two objects:**
   ```js
   let obj1 = { a: 1, b: 2 };
   let obj2 = { b: 3, c: 4 };
   ```
   - Merge them into a new object where `b` should have the value from `obj2`.

4. **Object with computed properties:**
   - Create an object where keys are calculated dynamically using `[ ]`.
   ```js
   let dynamicKey = "score";
   let student = { name: "Emma", [dynamicKey]: 95 };
   ```
   - Print the `score` value.

5. **Convert object keys to an array:**
   - Given `let car = { brand: "Toyota", model: "Corolla", year: 2020 }`, write a function to return an array of all the keys (`["brand", "model", "year"]`).

### 🔵 Arrays (Intermediate)
6. **Filter numbers from an array:**
   - Given `[1, 5, 8, 10, 15, 20]`, use `.filter()` to return only numbers greater than `8`.

7. **Map an array:**
   - Given `[2, 4, 6, 8]`, use `.map()` to create a new array where each number is squared (`[4, 16, 36, 64]`).

8. **Reduce an array:**
   - Given `let numbers = [5, 10, 15, 20]`, use `.reduce()` to find the sum of all numbers.

9. **Find duplicates in an array:**
   - Write a function that takes `[1, 2, 2, 3, 4, 4, 5]` and returns `[2, 4]`.

10. **Sort an array of objects:**
    - Given:
      ```js
      let students = [
        { name: "Alice", score: 90 },
        { name: "Bob", score: 85 },
        { name: "Charlie", score: 95 }
      ];
      ```
    - Sort the array in descending order of `score`.

---

### 🔥 Bonus Challenge


Happy coding! 🚀