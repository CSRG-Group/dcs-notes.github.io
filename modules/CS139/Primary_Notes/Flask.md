---
layout: notes
title: Flask
part: true
---

## Introduction

Flask is a micro-framework used for developing web applications. It utilises python for server-side scripting.

It is classified as a micro-framework as it has comparatively fewer features than other frameworks such as Django. This does not necessarily mean that it is worse or less powerful, as flask is utilised by companies such as Netflix, Reddit and Uber. 

Flask was released in 2010 making it much more recent than PHP which was released in 1995

Flask uses templates to generate web pages dynamically based on the client's request.

## Basic

Notes on installation can be found on the [official flask website](https://flask.palletsprojects.com/en/2.1.x/installation/)

### Initialisation

1. Create a python file in your flask project directory
2. Import flask
3. Create an instance of the flask class

A minimal flask application with no routes lookes like this:

```
from flask import Flask

app = Flask(__name__)

```

### Adding routes

A route represents a unique URL path that is used to make a request to the webserver. Routes are often used to navigate to a specific web page however they may also be used to pass data to the server or carry out a different function.

A route is defined using a function and a corresponding decorator.

```
@app.route("/routeName")
def routeName():
    #Some computation may occur here
    return someResource
```

Whatever is returned by the function is going to be the response of the webserver to the request made by the client.

#### Escaping

When returning HTML, which includes user-provided values, any of the data provided by the user should be escaped to protect against XSS attacks. Escaping involves replacing any special characters which may be used to execute a script with character escapes that are treated as regular text and not interpreted as code.

You can escape text using the `escape()` method from the `markupsafe` module that is installed alongside flutter.

```
from markupsafe import escape

@app.route("/<name>")
def hello(name):
    return f"Hello, {escape(name)}!"
```

## Templates

* A template is a html file that acts as a skeleton of a web page which is often combined with some data to generate the full web page so it can be sent as a response to a client's request. 
* They often contain some static data, which is included in all responses, and placeholders for dynamic data that will be replaced with specific data when a request is made.
* Templates in Flask are stored in the `templates` folder.
* In order to render a template and send it back as a response, you must use the `render_template()` function which needs to be imported from flask.
* You can pass data to `render_template()` using named parameters which can then be used when generating the web page. 
* Flask uses Jinja2 for generating templates

```
@app.route("/CS139")
def CS139():
    return render_template("coursePage.html", code="139", name="Web Development Technologies")
```

*Note that `render_template()` automatically escapes any input data hence there is no need to do it manually.* 

## Jinja

{% raw %}

As stated previously, Jinja (AKA Jinja2) is the template generation engine used by Flask. Jinja has its own syntax which is somewhat similar to that of python. All Jinja code should be included within html templates.

`{{ }}` Is used to add content to the HTML file. Anything between the braces will be added to the final generated web page as content.
`{% %}` Is used to surround program components such as if statements or loops.
`{# #}` Can be used to add comments to your Jinja code.

### Setting Variables
```
{% set var = "<h1>Page Title</h1>" %}
{{ var }}
```
The second line is used to add the contents of `var` to the page.

*You can define and access lists and tuples in Jinja in the same way that you would in python*

### Conditional statements
Conditional statements can be used to omit certain HTML depending on the data passed to the template. For example, you may decide to only show the login button when the user is logged out, once a user signs in you may want to hide it.
```
{% if condition1 %}
...
{% elif condition2 %}
....
{% else %}
...
{% endif %}
```

### For loops
You can iterate over items in a sequence using `for`, very similarly to how you would do it in Python. A for loop can be combined with an else statement that will execute in the case that there are no items to iterate over.
```
<ul>
{% for user in users %}
    <li>Username: {{ user.username }}</li>
{% else %}
    <li>No users found</li>
{% endfor %}
</ul>
```

*This is likely all you will need to know about Jinja for the module however if you're interested in the rest of Jinja's features, you can read more about it on the [official website](https://jinja.palletsprojects.com/en/3.1.x/)*

{% endraw %}

## Accessing Requests Data

In order to access request data you must import the request module from flask
`from flask import request`

### Handling GET requests

Flask routes respond to GET requests by default. If any data is passed through the URL as a query string you can access it by defining it in the route name like so:
```
@app.route("/payBill/<billID>)
def payBill(billID):
    pass #Now the billID that was passed using the GET request can be accessed as a normal variable
```

### Handling POST requests

In order to accept POST requests, you must add it to the methods that the route can handle in the function wrapper like so `@app.route("/routeName", methods=["POST", "GET"])`

To access form data passed through a post request use `request.form` which is essentially just a dictionary of key value pairs with the keys corresponding to the name of the input element from the form.

```
@app.route("/register", methods=["POST", "GET"])
def register():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        return "User registered successfully"
```

When handling a post request, it is common to redirect the user once the request has been handled to prevent a duplicate request being sent if the user decides to refresh the page. This can be done using the `redirect()` function.
```
    ...
    return redirect("/routeName")
```


## Cookies

Cookies are one way of maintaining state when using HTTP/S which involves creating a "cookie" file that is sent to a client who doesn't already possess one. The cookie is then sent by the client in subsequent requests and will include any relevant data about the client and their past sessions (time spend on the site).

Each cookie is a single key:value pair. You can get around this restriction by setting the value to be a JSON string storing multiple key:value pairs which can then be deserialised when sent back to the server. You may also simple set multiple cookies on a single response, ensuring that each one has a different key to prevent overwriting.

When a server sends a cookie to a client the browser will store it locally on the machine so that next time you visit the site it can be sent alongside your requests.

Cookies are often given an expiration date which will allow the browser to determine when they should be deleted. A cookie that does not have an expiry date specified will be deleted when the browser is closed.

An online retailer may use cookies to keep track of what is stored in your shopping cart so it does not have to be rebuilt each time you visit the site.

### Flask implementation

#### Creating and sending a cookie

To create and send a cookie in Flask you must first create a response object then set the cookie of that response. 

This is achieved using the `make_response()` and `set_cookie()` functions.

```
from flask import make_response

@app.route('/')
def index():
    resp = make_response(render_template("index.html"))
    resp.set_cookie('attribute', 'value')
    return resp
```

Storing multiple key value pairs in a single cookie:

```
from flask import make_response
import json

@app.route('/')
def index():
    resp = make_response(render_template("index.html"))
    resp.set_cookie('attribute', json.dumps({"attr1" : "val1", "attr2" : "val2", "attr3 : val3"}))
    return resp
```

#### Reading a cookie

A cookie is read from the response object, the `cookies` dictionary is used to access all of the cookies sent as a part of the request.

```
from flask import request

@app.route('/')
def index():
    attribute = request.cookies.get('attribute')
```

if `attribute is None` is true then the cookie has not yet been set or has expired.

If the value stored in the cookie is a JSON string you will need to make use of the `json.loads()` function from the `json` module.


## Sessions

A session is an alternative way of managing state when using HTTP/S. 

There are two main types of sessions, client-side and server-side.

Server-side sessions
* Data about a session is stored on the server.
* Client is given a session identifier which is then sent alongside subsequent requests to identify them.
* No size limit on data stored.
* Suited to large web applications which store a lot of data about each user.

Client-side sessions
* Implemented on top of cookies.
* Cookie signed cryptographically, any modifications will invalidate it unless signed with secret key.
* Suited to applications which do not store large amounts of data per session.
* This is the type of session that you can set up using Flask without any additional extensions.

In both cases, session ends when the user closes their browser or logs out of the website. A session may also have an expiry time which will cause the session to expire after a certain period of inactivity.

Less confidential websites such as Facebook may use long-lived sessions to prevent the number of logins you must carry out however websites of banks often have very short-lived sessions to ensure that others cannot access your bank account if you accidentally forgot to log out of it on your computer.

### Flask implementation

#### Generating a session
```
from flask import session

# Set the secret key to some random bytes. Keep this really secret!
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session['username'] = request.form['username']
        return redirect(url_for('index'))
    return render_template("login.html")
```

#### Reading from a session
```
from flask import session

app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

@app.route('/')
def index():
    if 'username' in session:
        return f'Logged in as {session["username"]}'
    return 'You are not logged in'

@app.route('/logout')
def logout():
    # remove the username from the session if it's there
    session.pop('username', None)
    return redirect(url_for('index'))
```

## Flask-SQLAlchemy

Flask-SQLAlchemy adds support for SQLAlchemy which is allows you to access and modify your database from within your Flask application. 

### Creating a database schema

A Schema is a file which defines the structure and configuration of your database. It acts as a blueprint used when constructing your database.

In SQLAlchemy, each table is represented as a class, the attributes of which represent different columns.

This is the structure of a table defined in SQLAlchemy:
```
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class tableName(db.Model):
    __tablename__='tableName'
    pKey = db.Column(db.Integer, primary_key=True)
    attribute1 = db.Column(db.type)
    attribute2 = db.Column(db.type)
    ...
    
    def __init__(self, attribute1, attribute2, ...):
        self.attribute1 = attribute1
        self.attribute2 = attribute2
        ...
```

The most used column types are:
* Integer
* String(size)
* Text 
* DateTime #Expressed as a datetime object in python
* Float
* Boolean

When defining a primary key you should set the `primary_key` parameter of `db.Column` to true. To define a composite key you must set `primary_key` to true on all columns used to create the composite key.

### Creating the database

To create the database you must run the following commands:

```
db.create_all()
db.session.commit()
```

**Replace db with whatever you called your SQLAlchemy instance when initialising it**

### Making queries

In order to access your database you will need to import your database and any of the models you created into your flask application python file.
```
from db_schema import db, table1, table2, table3
```

You can either make queries using raw SQL or by using the predefined methods. The second way can be more secure as it prevents SQL injection attacks however it is fine to use raw SQL queries as long as you sanitise and/or validate the input.

#### Raw SQL

To execute raw SQL queries use `db.engine.execute()`

```
result = db.session.execute("SELECT * FROM tableName WHERE columnName = value;").fetchall() #Using fetchall() will return a tuple representing the query result

db.session.execute("INSERT INTO tableName (column1, column2) VALUES (value1, value2);")
db.session.commit() #Used to commit changes to the database.
```

#### Using functions

##### Insertion

```
newEntry = ModelName("value1", "value2")
db.session.add(newEntry)
db.session.commit()
```

##### Deletion

```
db.session.delete(newEntry)
db.session.commit()
```

##### Making queries

```
results = ModelName.query.filter_by(attribute="value", attribute2="value2") #Checking for equality
moreComplexQuery = ModelName.query.filter(ModelName.attribute == "value", ModelName.attribute3 > 0) #Use filter for more complex queries
```

To retrieve a record using a primary key use the `get` function:
```
userRecord = Users.query.get("primaryKey")
```

To update a record simply query it, change an attribute then use `db.session.commit()` to save the changes to the database.
```
queriedRecord.attribute = "newValue"
db.session.commit()
```
