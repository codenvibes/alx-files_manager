<h1 align="center"><b>0x04. FILES MANAGER</b></h1>
<div align="center"><code>Back-end</code> <code>JavaScript</code> <code>ES6</code> <code>NoSQL</code> <code>MongoDB</code> <code>Redis</code> <code>NodeJS</code> <code>ExpressJS</code> <code>Kue</code></div>

<!-- <br>

## Background Context -->


<!-- <br>
<hr>
<h3><a href=>Notes</a></h3>
<hr> -->

<br>

<p>This project is a summary of this back-end trimester: authentication, NodeJS, MongoDB, Redis, pagination and background processing.</p>

<p>The objective is to build a simple platform to upload and view files:</p>

<ul>
<li>User authentication via a token </li>
<li>List all files</li>
<li>Upload a new file</li>
<li>Change permission of a file</li>
<li>View a file</li>
<li>Generate thumbnails for images</li>
</ul>

<p>You will be guided step by step for building it, but you have some freedoms of implementation, split in more files etc… (<code>utils</code> folder will be your friend)</p>

<p>Of course, this kind of service already exists in the real life - it’s a learning purpose to assemble each piece and build a full product.</p>

<p>Enjoy!</p>

<br>

## Resources
<details>
<summary><b><a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs">Node JS getting started</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" ">Process API doc</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="expressjs.com/en/starter/installing.html">Express getting started</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://mochajs.org">Mocha documentation</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://github.com/remy/nodemon#nodemon">Nodemon documentation</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://github.com/mongodb/node-mongodb-native">MongoDB</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://github.com/OptimalBits/bull">Bull</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://www.npmjs.com/package/image-thumbnail">Image thumbnail</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://www.npmjs.com/package/mime-types">Mime-Types</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://github.com/redis/node-redis">Redis</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<!-- <br>

**man or help:**
- `` -->

<br>

## Learning Objectives
<details>
<summary><b><a href=" "> </a>how to create an API with Express</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>how to authenticate a user</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>how to store data in MongoDB</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>how to store temporary data in Redis</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>how to setup and use a background worker</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<br>

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using `node` (version 12.x.x)
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be verified against lint using ESLint

<br>

<h2>Provided files</h2>

<h3><code>package.json</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
{
  "name": "files_manager",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "start-server": "nodemon --exec babel-node --presets @babel/preset-env ./server.js",
    "start-worker": "nodemon --exec babel-node --presets @babel/preset-env ./worker.js",
    "dev": "nodemon --exec babel-node --presets @babel/preset-env",
    "test": "./node_modules/.bin/mocha --require @babel/register --exit" 
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bull": "^3.16.0",
    "chai-http": "^4.3.0",
    "express": "^4.17.1",
    "image-thumbnail": "^1.0.10",
    "mime-types": "^2.1.27",
    "mongodb": "^3.5.9",
    "redis": "^2.8.0",
    "sha1": "^1.1.1",
    "uuid": "^8.2.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.8.0",
    "@babel/core": "^7.8.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.8.2",
    "@babel/register": "^7.8.0",
    "chai": "^4.2.0",
    "chai-http": "^4.3.0",
    "mocha": "^6.2.2",
    "nodemon": "^2.0.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}
</code>
</pre>
</details>

<h3><code>.eslintrc.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
module.exports = {
    env: {
      browser: false,
      es6: true,
      jest: true,
    },
    extends: [
      'airbnb-base',
      'plugin:jest/all',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
      'max-classes-per-file': 'off',
      'no-underscore-dangle': 'off',
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
    overrides:[
      {
        files: ['*.js'],
        excludedFiles: 'babel.config.js',
      }
    ]
};
</code>
</pre>
</details>

<h3><code>babel.config.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
};
</code>
</pre>
</details>

<h3>and…</h3>

<p>Don’t forget to run <code>$ npm install</code> when you have the <code>package.json</code></p>



<br>

## Tasks
<details>
<summary>

### 0. Redis utils
`mandatory`

File: [utils/redis.js]()
</summary>

<p>Inside the folder <code>utils</code>, create a file <code>redis.js</code> that contains the class <code>RedisClient</code>.</p>

<p><code>RedisClient</code> should have:</p>

<ul>
<li>the constructor that creates a client to Redis:

<ul>
<li>any error of the redis client must be displayed in the console (you should use <code>on('error')</code> of the redis client)</li>
</ul></li>
<li>a function <code>isAlive</code> that returns <code>true</code> when the connection to Redis is a success otherwise, <code>false</code></li>
<li>an asynchronous function <code>get</code> that takes a string key as argument and returns the Redis value stored for this key</li>
<li>an asynchronous function <code>set</code> that takes a string key, a value and a duration in second as arguments to store it in Redis (with an expiration set by the duration argument)</li>
<li>an asynchronous function <code>del</code> that takes a string key as argument and remove the value in Redis for this key</li>
</ul>

<p>After the class definition, create and export an instance of <code>RedisClient</code> called <code>redisClient</code>.</p>

<pre><code>bob@dylan:~$ cat main.js
import redisClient from './utils/redis';

(async () =&gt; {
    console.log(redisClient.isAlive());
    console.log(await redisClient.get('myKey'));
    await redisClient.set('myKey', 12, 5);
    console.log(await redisClient.get('myKey'));

    setTimeout(async () =&gt; {
        console.log(await redisClient.get('myKey'));
    }, 1000*10)
})();

bob@dylan:~$ npm run dev main.js
true
null
12
null
bob@dylan:~$ 
</code></pre>

</details>

<details>
<summary>

### 1. MongoDB utils
`mandatory`

File: [utils/db.js]()
</summary>

<p>Inside the folder <code>utils</code>, create a file <code>db.js</code> that contains the class <code>DBClient</code>.</p>

<p><code>DBClient</code> should have:</p>

<ul>
<li>the constructor that creates a client to MongoDB:

<ul>
<li>host: from the environment variable <code>DB_HOST</code> or default: <code>localhost</code></li>
<li>port: from the environment variable <code>DB_PORT</code> or default: <code>27017</code></li>
<li>database: from the environment variable <code>DB_DATABASE</code> or default: <code>files_manager</code></li>
</ul></li>
<li>a function <code>isAlive</code> that returns <code>true</code> when the connection to MongoDB is a success otherwise, <code>false</code></li>
<li>an asynchronous function <code>nbUsers</code> that returns the number of documents in the collection <code>users</code></li>
<li>an asynchronous function <code>nbFiles</code> that returns the number of documents in the collection <code>files</code></li>
</ul>

<p>After the class definition, create and export an instance of <code>DBClient</code> called <code>dbClient</code>.</p>

<pre><code>bob@dylan:~$ cat main.js
import dbClient from './utils/db';

const waitConnection = () =&gt; {
    return new Promise((resolve, reject) =&gt; {
        let i = 0;
        const repeatFct = async () =&gt; {
            await setTimeout(() =&gt; {
                i += 1;
                if (i &gt;= 10) {
                    reject()
                }
                else if(!dbClient.isAlive()) {
                    repeatFct()
                }
                else {
                    resolve()
                }
            }, 1000);
        };
        repeatFct();
    })
};

(async () =&gt; {
    console.log(dbClient.isAlive());
    await waitConnection();
    console.log(dbClient.isAlive());
    console.log(await dbClient.nbUsers());
    console.log(await dbClient.nbFiles());
})();

bob@dylan:~$ npm run dev main.js
false
true
4
30
bob@dylan:~$ 
</code></pre>

</details>

<details>
<summary>

### 2. First API
`mandatory`

File: [server.js](), [routes/index.js](), [controllers/AppController.js]()
</summary>

<p>Inside <code>server.js</code>, create the Express server:</p>

<ul>
<li>it should listen on the port set by the environment variable <code>PORT</code> or by default 5000</li>
<li>it should load all routes from the file <code>routes/index.js</code></li>
</ul>

<p>Inside the folder <code>routes</code>, create a file <code>index.js</code> that contains all endpoints of our API:</p>

<ul>
<li><code>GET /status</code> =&gt; <code>AppController.getStatus</code></li>
<li><code>GET /stats</code> =&gt; <code>AppController.getStats</code></li>
</ul>

<p>Inside the folder <code>controllers</code>, create a file <code>AppController.js</code> that contains the definition of the 2 endpoints:</p>

<ul>
<li><code>GET /status</code> should return if Redis is alive and if the DB is alive too by using the 2 utils created previously: <code>{ "redis": true, "db": true }</code> with a status code 200</li>
<li><code>GET /stats</code> should return the number of users and files in DB: <code>{ "users": 12, "files": 1231 }</code> with a status code 200

<ul>
<li><code>users</code> collection must be used for counting all users</li>
<li><code>files</code> collection must be used for counting all files</li>
</ul></li>
</ul>

<p><strong>Terminal 1:</strong></p>

<pre><code>bob@dylan:~$ npm run start-server
Server running on port 5000
...
</code></pre>

<p><strong>Terminal 2:</strong></p>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/status ; echo ""
{"redis":true,"db":true}
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/stats ; echo ""
{"users":4,"files":30}
bob@dylan:~$ 
</code></pre>

</details>

<details>
<summary>

### 3. Create a new user
`mandatory`

File: [utils/](), [routes/index.js](), [controllers/UsersController.js]()
</summary>

<p>Now that we have a simple API, it’s time to add users to our database.</p>

<p>In the file <code>routes/index.js</code>,  add a new endpoint:</p>

<ul>
<li><code>POST /users</code> =&gt; <code>UsersController.postNew</code></li>
</ul>

<p>Inside <code>controllers</code>, add a file <code>UsersController.js</code> that contains the new endpoint:</p>

<p><code>POST /users</code> should create a new user in DB:</p>

<ul>
<li>To create a user, you must specify an <code>email</code> and a <code>password</code> </li>
<li>If the <code>email</code> is missing, return an error <code>Missing email</code> with a status code 400</li>
<li>If the <code>password</code> is missing, return an error <code>Missing password</code> with a status code 400</li>
<li>If the <code>email</code> already exists in DB, return an error <code>Already exist</code> with a status code 400</li>
<li>The <code>password</code> must be stored after being hashed in <code>SHA1</code></li>
<li>The endpoint is returning the new user with only the <code>email</code> and the <code>id</code> (auto generated by MongoDB) with a status code 201</li>
<li>The new user must be saved in the collection <code>users</code>:

<ul>
<li><code>email</code>: same as the value received</li>
<li><code>password</code>: <code>SHA1</code> value of the value received</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/users -XPOST -H "Content-Type: application/json" -d '{ "email": "bob@dylan.com", "password": "toto1234!" }' ; echo ""
{"id":"5f1e7d35c7ba06511e683b21","email":"bob@dylan.com"}
bob@dylan:~$ 
bob@dylan:~$ echo 'db.users.find()' | mongo files_manager
{ "_id" : ObjectId("5f1e7d35c7ba06511e683b21"), "email" : "bob@dylan.com", "password" : "89cad29e3ebc1035b29b1478a8e70854f25fa2b2" }
bob@dylan:~$ 
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/users -XPOST -H "Content-Type: application/json" -d '{ "email": "bob@dylan.com", "password": "toto1234!" }' ; echo ""
{"error":"Already exist"}
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/users -XPOST -H "Content-Type: application/json" -d '{ "email": "bob@dylan.com" }' ; echo ""
{"error":"Missing password"}
bob@dylan:~$ 
</code></pre>

</details>

<details>
<summary>

### 4. Authenticate a user
`mandatory`

File: [utils/](), [routes/index.js](), [controllers/UsersController.js](), [controllers/AuthController.js]()
</summary>


</details>

<details>
<summary>

### 5. First file
`mandatory`

File: [utils/](), [routes/index.js](), [controllers/FilesController.js]()
</summary>


</details>

<details>
<summary>

### 6. Get and list file
`mandatory`

File: [utils/](), [routes/index.js](), [controllers/FilesController.js]()
</summary>


</details>

<details>
<summary>

### 7. File publish/unpublish
`mandatory`

File: [utils/](), [routes/index.js](), [controllers/FilesController.js]()
</summary>


</details>

<details>
<summary>

### 8. File data
`mandatory`

File: [utils/](), [routes/index.js](), [controllers/FilesController.js]()
</summary>


</details>

<details>
<summary>

### 9. Image Thumbnails
`mandatory`

File: [utils/](), [controllers/FilesController.js](), [worker.js]()
</summary>


</details>

<details>
<summary>

### 10. Tests!
`#advanced`

File: [tests/]()
</summary>


</details>

<details>
<summary>

### 11. New user - welcome email
`#advanced`

File: [utils/](), [worker.js](), [controllers/UsersController.js]()
</summary>


</details>

