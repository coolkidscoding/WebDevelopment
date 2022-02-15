# [Cool Kids Coding School](https://www,coolkidscodingschool.com)
![CKCS logo >](./images/ckcslogo.png)
</br>

## Course: **Web Development**

### Lesson 5: **Python Decorators**

---
</br>

#### **Introduction**
In Python a decorator is a design pattern that we can use to add new functionality to an already existing object without the need to modify the actual object.  With decorators you can modify the functionality of a method, a function, or a class dynamically without directly using subclasses.  

#### **How to Create Decorators**
In this example we will create a decorator that we can use to convert a functions output to lowercase.  To do so we need to create a decorator function and we need to define a wrapper inside it.

    def lowercase(func):
        def wrapper():
            func_ret = func()
            change_to_lowercase = func_ret.lower()
            return change_to_lowercase

        return wrapper

Above we have created a decorator name `lowercase` that takes a function as an argument.  To test our decorator function we need to create a function that returns a string.

    def hello_function():
        return 'HELLO WORLD'

    decorate = lowercase(hello_function)
    print(decorate())

There is an easier way to do what we just did above.

    @lowercase
    def hello_function():
        return 'HELLO WORLD'

    print(hello_function())

**Output**

    hello world

#### **Passing Arguments to Decorator Functions**

Python decorators can also intercept the arguments that are passed to the decorated functions.  The arguments will in turn be passed to the decorated function at runtime.  Consider the following:

    def my_decorator(func):
        def my_wrapper(argument1, argument2):
            print("The arguments are: {0}, {1}".format(argument1, argument2))
            func(argument1, argument2)
        return my_wrapper


    @my_decorator
    def names(firstName, secondName):
        print("Your first and second names are {0} and {1} respectively".format(firstName, secondName))

    print(names("Nicholas", "Samuel"))

**Output**

    The arguments are: Nicholas, Samuel
    Your first and second names are Nicholas and Samuel respectively

#### **Creating General Purpose Decorators**

General purpose decorators can be applied to any function.  These kind of decorators are very helpful for debuggin purposes, for example.  
We can define them using the `args` and `**kwargs` arguments.  All the positional and keyword arguments are stored in these two variables respectively.  

    def my_decorator(func):
        def my_wrapper(*args, **kwargs):
            print('Positional arguments:', args)
            print('Keyword arguments:', kwargs)
            func(*args)
        return my_wrapper

    @my_decorator
    def function_without_arguments():
        print("No arguments")

    function_without_arguments()

**Output**

    Positional arguments: ()
    Keyword arguments: {}
    No arguments

Now an example with arguments.

    @my_decorator
    def function_with_arguments(x, y, z):
        print(x, y, z)

    function_with_arguments(5, 15, 25)

**Output**

    Positional arguments: (5, 15, 25)
    Keyword arguments: {}
    5 15 25

Now an example with keywords.

    @my_decorator
    def passing_keyword_arguments():
        print("Passing keyword arguments")

    passing_keyword_arguments(firstName="Nicholas", secondName="Samuel")

**Output**

    Positional arguments: ()
    Keyword arguments: {'secondName': 'Samuel', 'firstName': 'Nicholas'}
    Passing keyword arguments

#### **Conclusion**

The purpose of decorators is to change the functionality of a class, method, or function dynamically without using subclasses directly or changing the source code of the class, method, or the function that we need to decorate. In this article, we saw how to create simple and general purpose decorators and how to pass arguments to the decorators.

---

##### **Cool Kids Coding School 2022, for any questions or comments contact info@coolkidscodingschool.com**
