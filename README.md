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

<p>In the file <code>routes/index.js</code>,  add 3 new endpoints:</p>

<ul>
<li><code>GET /connect</code> =&gt; <code>AuthController.getConnect</code></li>
<li><code>GET /disconnect</code> =&gt; <code>AuthController.getDisconnect</code></li>
<li><code>GET /users/me</code> =&gt; <code>UserController.getMe</code></li>
</ul>

<p>Inside <code>controllers</code>, add a file <code>AuthController.js</code> that contains new endpoints:</p>

<p><code>GET /connect</code> should sign-in the user by generating a new authentication token:</p>

<ul>
<li>By using the header <code>Authorization</code> and the technique of the Basic auth (Base64 of the <code>&lt;email&gt;:&lt;password&gt;</code>), find the user associate to this email and with this password (reminder: we are storing the SHA1 of the password)</li>
<li>If no user has been found, return an error <code>Unauthorized</code> with a status code 401</li>
<li>Otherwise:

<ul>
<li>Generate a random string (using <code>uuidv4</code>) as token</li>
<li>Create a key: <code>auth_&lt;token&gt;</code> </li>
<li>Use this key for storing in Redis (by using the <code>redisClient</code> create previously) the user ID for 24 hours</li>
<li>Return this token: <code>{ "token": "155342df-2399-41da-9e8c-458b6ac52a0c" }</code> with a status code 200</li>
</ul></li>
</ul>

<p>Now, we have a way to identify a user, create a token (= avoid to store the password on any front-end) and use this token for 24h to access to the API!</p>

<p>Every authenticated endpoints of our API will look at this token inside the header <code>X-Token</code>.</p>

<p><code>GET /disconnect</code> should sign-out the user based on the token:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
<li>Otherwise, delete the token in Redis and return nothing with a status code 204</li>
</ul></li>
</ul>

<p>Inside the file <code>controllers/UsersController.js</code> add a new endpoint:</p>

<p><code>GET /users/me</code> should retrieve the user base on the token used:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
<li>Otherwise, return the user object (<code>email</code> and <code>id</code> only)</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"031bffac-3edc-4e51-aaae-1c121317da8a"}
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/users/me -H "X-Token: 031bffac-3edc-4e51-aaae-1c121317da8a" ; echo ""
{"id":"5f1e7cda04a394508232559d","email":"bob@dylan.com"}
bob@dylan:~$ 
bob@dylan:~$ curl 0.0.0.0:5000/disconnect -H "X-Token: 031bffac-3edc-4e51-aaae-1c121317da8a" ; echo ""

bob@dylan:~$ curl 0.0.0.0:5000/users/me -H "X-Token: 031bffac-3edc-4e51-aaae-1c121317da8a" ; echo ""
{"error":"Unauthorized"}
bob@dylan:~$ 
</code></pre>

</details>

<details>
<summary>

### 5. First file
`mandatory`

File: [utils/](), [routes/index.js](), [controllers/FilesController.js]()
</summary>

<p>In the file <code>routes/index.js</code>,  add a new endpoint:</p>

<ul>
<li><code>POST /files</code> =&gt; <code>FilesController.postUpload</code></li>
</ul>

<p>Inside <code>controllers</code>, add a file <code>FilesController.js</code> that contains the new endpoint:</p>

<p><code>POST /files</code> should create a new file in DB and in disk:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>To create a file, you must specify:

<ul>
<li><code>name</code>: as filename</li>
<li><code>type</code>: either <code>folder</code>, <code>file</code> or <code>image</code></li>
<li><code>parentId</code>: (optional) as ID of the parent (default: 0 -&gt; the root)</li>
<li><code>isPublic</code>: (optional) as boolean to define if the file is public or not (default: false)</li>
<li><code>data</code>: (only for <code>type=file|image</code>) as Base64 of the file content</li>
</ul></li>
<li>If the <code>name</code> is missing, return an error <code>Missing name</code> with a status code 400</li>
<li>If the <code>type</code> is missing or not part of the list of accepted type, return an error <code>Missing type</code> with a status code 400</li>
<li>If the <code>data</code> is missing and <code>type != folder</code>, return an error <code>Missing data</code> with a status code 400</li>
<li>If the <code>parentId</code> is set:

<ul>
<li>If no file is present in DB for this <code>parentId</code>, return an error <code>Parent not found</code> with a status code 400</li>
<li>If the file present in DB for this <code>parentId</code> is not of type <code>folder</code>, return an error <code>Parent is not a folder</code> with a status code 400</li>
</ul></li>
<li>The user ID should be added to the document saved in DB - as owner of a file</li>
<li>If the type is <code>folder</code>, add the new file document in the DB and return the new file with a status code 201</li>
<li>Otherwise:

<ul>
<li>All file will be stored locally in a folder (to create automatically if not present):

<ul>
<li>The relative path of this folder is given by the environment variable <code>FOLDER_PATH</code> </li>
<li>If this variable is not present or empty, use <code>/tmp/files_manager</code> as storing folder path</li>
</ul></li>
<li>Create a local path in the storing folder with filename a UUID </li>
<li>Store the file in clear (reminder: <code>data</code> contains the Base64 of the file) in this local path</li>
<li>Add the new file document in the collection <code>files</code> with these attributes:

<ul>
<li><code>userId</code>: ID of the owner document (owner from the authentication)</li>
<li><code>name</code>: same as the value received</li>
<li><code>type</code>: same as the value received</li>
<li><code>isPublic</code>: same as the value received</li>
<li><code>parentId</code>: same as the value received - if not present: 0</li>
<li><code>localPath</code>: for a <code>type=file|image</code>, the absolute path to the file save in local</li>
</ul></li>
<li>Return the new file with a status code 201</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ curl -XPOST 0.0.0.0:5000/files -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" -H "Content-Type: application/json" -d '{ "name": "myText.txt", "type": "file", "data": "SGVsbG8gV2Vic3RhY2shCg==" }' ; echo ""
{"id":"5f1e879ec7ba06511e683b22","userId":"5f1e7cda04a394508232559d","name":"myText.txt","type":"file","isPublic":false,"parentId":0}
bob@dylan:~$
bob@dylan:~$ ls /tmp/files_manager/
2a1f4fc3-687b-491a-a3d2-5808a02942c9
bob@dylan:~$
bob@dylan:~$ cat /tmp/files_manager/2a1f4fc3-687b-491a-a3d2-5808a02942c9 
Hello Webstack!
bob@dylan:~$
bob@dylan:~$ curl -XPOST 0.0.0.0:5000/files -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" -H "Content-Type: application/json" -d '{ "name": "images", "type": "folder" }' ; echo ""
{"id":"5f1e881cc7ba06511e683b23","userId":"5f1e7cda04a394508232559d","name":"images","type":"folder","isPublic":false,"parentId":0}
bob@dylan:~$
bob@dylan:~$ cat image_upload.py
import base64
import requests
import sys

file_path = sys.argv[1]
file_name = file_path.split('/')[-1]

file_encoded = None
with open(file_path, "rb") as image_file:
    file_encoded = base64.b64encode(image_file.read()).decode('utf-8')

r_json = { 'name': file_name, 'type': 'image', 'isPublic': True, 'data': file_encoded, 'parentId': sys.argv[3] }
r_headers = { 'X-Token': sys.argv[2] }

r = requests.post("http://0.0.0.0:5000/files", json=r_json, headers=r_headers)
print(r.json())

bob@dylan:~$
bob@dylan:~$ python image_upload.py image.png f21fb953-16f9-46ed-8d9c-84c6450ec80f 5f1e881cc7ba06511e683b23
{'id': '5f1e8896c7ba06511e683b25', 'userId': '5f1e7cda04a394508232559d', 'name': 'image.png', 'type': 'image', 'isPublic': True, 'parentId': '5f1e881cc7ba06511e683b23'}
bob@dylan:~$
bob@dylan:~$ echo 'db.files.find()' | mongo files_manager
{ "_id" : ObjectId("5f1e881cc7ba06511e683b23"), "userId" : ObjectId("5f1e7cda04a394508232559d"), "name" : "images", "type" : "folder", "parentId" : "0" }
{ "_id" : ObjectId("5f1e879ec7ba06511e683b22"), "userId" : ObjectId("5f1e7cda04a394508232559d"), "name" : "myText.txt", "type" : "file", "parentId" : "0", "isPublic" : false, "localPath" : "/tmp/files_manager/2a1f4fc3-687b-491a-a3d2-5808a02942c9" }
{ "_id" : ObjectId("5f1e8896c7ba06511e683b25"), "userId" : ObjectId("5f1e7cda04a394508232559d"), "name" : "image.png", "type" : "image", "parentId" : ObjectId("5f1e881cc7ba06511e683b23"), "isPublic" : true, "localPath" : "/tmp/files_manager/51997b88-5c42-42c2-901e-e7f4e71bdc47" }
bob@dylan:~$
bob@dylan:~$ ls /tmp/files_manager/
2a1f4fc3-687b-491a-a3d2-5808a02942c9   51997b88-5c42-42c2-901e-e7f4e71bdc47
bob@dylan:~$
</code></pre>

</details>

<details>
<summary>

### 6. Get and list file
`mandatory`

File: [utils/](), [routes/index.js](), [controllers/FilesController.js]()
</summary>

<p>In the file <code>routes/index.js</code>,  add 2 new endpoints:</p>

<ul>
<li><code>GET /files/:id</code> =&gt; <code>FilesController.getShow</code></li>
<li><code>GET /files</code> =&gt; <code>FilesController.getIndex</code></li>
</ul>

<p>In the file <code>controllers/FilesController.js</code>, add the 2 new endpoints:</p>

<p><code>GET /files/:id</code> should retrieve the file document based on the ID:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>If no file document is linked to the user and the ID passed as parameter, return an error <code>Not found</code> with a status code 404</li>
<li>Otherwise, return the file document</li>
</ul>

<p><code>GET /files</code> should retrieve all users file documents for a specific <code>parentId</code> and with pagination:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>Based on the query parameters <code>parentId</code> and <code>page</code>, return the list of file document

<ul>
<li><code>parentId</code>:

<ul>
<li>No validation of <code>parentId</code> needed - if the <code>parentId</code> is not linked to any user folder, returns an empty list</li>
<li>By default, <code>parentId</code> is equal to 0 = the root</li>
</ul></li>
<li>Pagination:

<ul>
<li>Each page should be 20 items max</li>
<li><code>page</code> query parameter starts at 0 for the first page. If equals to 1, it means it’s the second page (form the 20th to the 40th), etc…</li>
<li>Pagination can be done directly by the <code>aggregate</code> of MongoDB</li>
</ul></li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
[{"id":"5f1e879ec7ba06511e683b22","userId":"5f1e7cda04a394508232559d","name":"myText.txt","type":"file","isPublic":false,"parentId":0},{"id":"5f1e881cc7ba06511e683b23","userId":"5f1e7cda04a394508232559d","name":"images","type":"folder","isPublic":false,"parentId":0},{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":true,"parentId":"5f1e881cc7ba06511e683b23"}]
bob@dylan:~$
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files?parentId=5f1e881cc7ba06511e683b23 -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
[{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":true,"parentId":"5f1e881cc7ba06511e683b23"}]
bob@dylan:~$
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25 -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":true,"parentId":"5f1e881cc7ba06511e683b23"}
bob@dylan:~$
</code></pre>

</details>

<details>
<summary>

### 7. File publish/unpublish
`mandatory`

File: [utils/](), [routes/index.js](), [controllers/FilesController.js]()
</summary>

<p>In the file <code>routes/index.js</code>,  add 2 new endpoints:</p>

<ul>
<li><code>PUT /files/:id/publish</code> =&gt; <code>FilesController.putPublish</code></li>
<li><code>PUT /files/:id/publish</code> =&gt; <code>FilesController.putUnpublish</code></li>
</ul>

<p>In the file <code>controllers/FilesController.js</code>, add the 2 new endpoints:</p>

<p><code>PUT /files/:id/publish</code> should set <code>isPublic</code> to <code>true</code> on the file document based on the ID:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>If no file document is linked to the user and the ID passed as parameter, return an error <code>Not found</code> with a status code 404</li>
<li>Otherwise:

<ul>
<li>Update the value of <code>isPublic</code> to <code>true</code> </li>
<li>And return the file document with a status code 200</li>
</ul></li>
</ul>

<p><code>PUT /files/:id/unpublish</code> should set <code>isPublic</code> to <code>false</code> on the file document based on the ID:</p>

<ul>
<li>Retrieve the user based on the token:

<ul>
<li>If not found, return an error <code>Unauthorized</code> with a status code 401</li>
</ul></li>
<li>If no file document is linked to the user and the ID passed as parameter, return an error <code>Not found</code> with a status code 404</li>
<li>Otherwise:

<ul>
<li>Update the value of <code>isPublic</code> to <code>false</code> </li>
<li>And return the file document with a status code 200</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25 -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":false,"parentId":"5f1e881cc7ba06511e683b23"}
bob@dylan:~$
bob@dylan:~$ curl -XPUT 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/publish -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":true,"parentId":"5f1e881cc7ba06511e683b23"}
bob@dylan:~$ 
bob@dylan:~$ curl -XPUT 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/unpublish -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e8896c7ba06511e683b25","userId":"5f1e7cda04a394508232559d","name":"image.png","type":"image","isPublic":false,"parentId":"5f1e881cc7ba06511e683b23"}
bob@dylan:~$ 
</code></pre>

</details>

<details>
<summary>

### 8. File data
`mandatory`

File: [utils/](), [routes/index.js](), [controllers/FilesController.js]()
</summary>

<p>In the file <code>routes/index.js</code>,  add one new endpoint:</p>

<ul>
<li><code>GET /files/:id/data</code> =&gt; <code>FilesController.getFile</code></li>
</ul>

<p>In the file <code>controllers/FilesController.js</code>, add the new endpoint:</p>

<p><code>GET /files/:id/data</code> should return the content of the file document based on the ID:</p>

<ul>
<li>If no file document is linked to the ID passed as parameter, return an error <code>Not found</code> with a status code 404</li>
<li>If the file document (folder or file) is not public (<code>isPublic: false</code>) and no user authenticate or not the owner of the file, return an error <code>Not found</code> with a status code 404</li>
<li>If the type of the file document is <code>folder</code>, return an error <code>A folder doesn't have content</code> with a status code 400</li>
<li>If the file is not locally present, return an error <code>Not found</code> with a status code 404</li>
<li>Otherwise:

<ul>
<li>By using the module <code>mime-types</code>, get the <a href="https://intranet.alxswe.com/rltoken/buV7HGNuNMB5ZCUH0LdECw" title="MIME-type" target="_blank">MIME-type</a> based on the <code>name</code> of the file</li>
<li>Return the content of the file with the correct MIME-type</li>
</ul></li>
</ul>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ curl -XPUT 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/unpublish -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e879ec7ba06511e683b22","userId":"5f1e7cda04a394508232559d","name":"myText.txt","type":"file","isPublic":false,"parentId":0}
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/data -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
Hello Webstack!

bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/data ; echo ""
{"error":"Not found"}
bob@dylan:~$ 
bob@dylan:~$ curl -XPUT 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/publish -H "X-Token: f21fb953-16f9-46ed-8d9c-84c6450ec80f" ; echo ""
{"id":"5f1e879ec7ba06511e683b22","userId":"5f1e7cda04a394508232559d","name":"myText.txt","type":"file","isPublic":true,"parentId":0}
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e879ec7ba06511e683b22/data ; echo ""
Hello Webstack!

bob@dylan:~$
</code></pre>

</details>

<details>
<summary>

### 9. Image Thumbnails
`mandatory`

File: [utils/](), [controllers/FilesController.js](), [worker.js]()
</summary>

<p>Update the endpoint <code>POST /files</code> endpoint to start a background processing for generating thumbnails for a file of type <code>image</code>:</p>

<ul>
<li>Create a <code>Bull</code> queue <code>fileQueue</code> </li>
<li>When a new image is stored (in local and in DB), add a job to this queue with the <code>userId</code> and <code>fileId</code></li>
</ul>

<p>Create a file <code>worker.js</code>:</p>

<ul>
<li>By using the module <code>Bull</code>, create a queue <code>fileQueue</code></li>
<li>Process this queue:

<ul>
<li>If <code>fileId</code> is not present in the job, raise an error <code>Missing fileId</code></li>
<li>If <code>userId</code> is not present in the job, raise an error <code>Missing userId</code></li>
<li>If no document is found in DB based on the <code>fileId</code> and <code>userId</code>, raise an error <code>File not found</code></li>
<li>By using the module <code>image-thumbnail</code>, generate 3 thumbnails with <code>width</code> = 500, 250 and 100 - store each result on the same location of the original file by appending <code>_&lt;width size&gt;</code></li>
</ul></li>
</ul>

<p>Update the endpoint <code>GET /files/:id/data</code> to accept a query parameter <code>size</code>:</p>

<ul>
<li><code>size</code> can be <code>500</code>, <code>250</code> or <code>100</code></li>
<li>Based on <code>size</code>, return the correct local file</li>
<li>If the local file doesn’t exist, return an error <code>Not found</code> with a status code 404</li>
</ul>

<p><strong>Terminal 3:</strong> (start the worker)</p>

<pre><code>bob@dylan:~$ npm run start-worker
...
</code></pre>

<p><strong>Terminal 2:</strong></p>

<pre><code>bob@dylan:~$ curl 0.0.0.0:5000/connect -H "Authorization: Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=" ; echo ""
{"token":"f21fb953-16f9-46ed-8d9c-84c6450ec80f"}
bob@dylan:~$ 
bob@dylan:~$ python image_upload.py image.png f21fb953-16f9-46ed-8d9c-84c6450ec80f 5f1e881cc7ba06511e683b23
{'id': '5f1e8896c7ba06511e683b25', 'userId': '5f1e7cda04a394508232559d', 'name': 'image.png', 'type': 'image', 'isPublic': True, 'parentId': '5f1e881cc7ba06511e683b23'}
bob@dylan:~$ ls /tmp/files_manager/
2a1f4fc3-687b-491a-a3d2-5808a02942c9   51997b88-5c42-42c2-901e-e7f4e71bdc47   6dc53397-8491-4b7c-8273-f748b1a031cb   6dc53397-8491-4b7c-8273-f748b1a031cb_100   6dc53397-8491-4b7c-8273-f748b1a031cb_250    6dc53397-8491-4b7c-8273-f748b1a031cb_500
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/data -so new_image.png ; file new_image.png
new_image.png: PNG image data, 471 x 512, 8-bit/color RGBA, non-interlaced
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/data?size=100 -so new_image.png ; file new_image.png
new_image.png: PNG image data, 100 x 109, 8-bit/color RGBA, non-interlaced
bob@dylan:~$ 
bob@dylan:~$ curl -XGET 0.0.0.0:5000/files/5f1e8896c7ba06511e683b25/data?size=250 -so new_image.png ; file new_image.png
new_image.png: PNG image data, 250 x 272, 8-bit/color RGBA, non-interlaced
bob@dylan:~$
</code></pre>

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

