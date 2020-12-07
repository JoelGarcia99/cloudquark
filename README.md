# What is clodium?

Some description here....

# HTTP documentation  
## List of elements in directory
```
[GET]
http://$server:$port/directory/$path
```
This will give you a list of elements in the $path as a json file with the structure  
```
{
    "status": "success",
    "files": [
        {"element":"courses", "isDir":true}
    ]
}
```

# Requirements  
In order to use this backend you need to install wamp server or any server to be able to run a MySQL instance. You can use the Flutter app located in [this repository](http:wwwww).  

You have to create a .env file too, with the PORT and DB_PORT variables, and the HOST as well, something like this:
```
HOST=localhost
PORT=8050
DB_PORT=3306
```

