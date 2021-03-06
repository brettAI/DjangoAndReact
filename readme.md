# Django and React Full Stack Course

The following project is based on the Youtube tutorial [Django & ReactJS Full Stack Course][1]

This project was built using:

- [Visual Studio Code][2]
- [Python (v 3.9.5)][3]
- [Django (v 4.0)][4]
- [Django REST framework (v 3.13.1)][5]
- Javascript
- [NodeJS][6]
- [ReactJS][7]
- [Postman][8]

## Environment setup

A Python Virtual Environment was created within Visual Studio Code.

``` ps1
    python -m venv venv
    .\venv\Scripts\Activate.ps1
```

Python libraries were installed via pip.

``` ps1
    pip install Django
    pip install djangorestframework
```

Created the Django project and tested it using:

``` ps1
    django-admin startproject APIProject
    cd .\APIProject\
    python manage.py runserver
```

Created a 'launch.json' configuration file to enable quicker starting and stopping of Django within Visual Studio Code.

``` json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [

        {
            "name": "Python: Django",
            "type": "python",
            "request": "launch",
            "program": "${workspaceFolder}\\APIProject\\manage.py",
            "args": [
                "runserver"
            ],
            "django": true
        }
    ]
}
```

Generated a default database via:

 ``` ps1
    python manage.py migrate
 ```

## Setting up the API

This section creates the API Django App and an serialiser.

 Generates a new Django app for the 'api'

 ``` ps1 Tab 1
    python manage.py startapp api
```

Created an admin superuser via:

``` powershell
    python manage.py createsuperuser
```

## Updating the database

After new models are created, update the database as follows:

``` ps1
    python manage.py makemigrations
    python manage.py migrate
```

### Check the Rest Framework is working

After creating the model and a serializer, used the Django shell to confirm the API allows the creation of a new record.

``` ps1
    cd .\APIProject\
    python manage.py shell
```

``` python
    #Creates a new Record via the API
    >>> from api.serializers import ArticleSerializer
    >>> from rest_framework.renderers import JSONRenderer
    >>> from rest_framework.parsers import JSONParser
    >>> a = Article(title ="Django Shell created Article", description = "This is the description")
    >>> a.save()

    # Reads a record via the JSONParser
    >>> serializer = ArticleSerializer(a)
    >>> serializer.data
        {'title': 'Django Shell created Article', 'description': 'This is the description'}
    >>> json = JSONRenderer().render(serializer.data)
    >>> json
        b'{"title":"Django Shell created Article","description":"This is the description"}'
    
    # Can then work with Python data types
    >>> import io
    >>> stream = io.BytesIO(json)
    >>> data = JSONParser().parse(stream)
    >>> serializer = ArticleSerializer(data=data)
    >>> serializer.is_valid()
        True
    >>> serializer.validated_data
        OrderedDict([('title', 'Django Shell created Article'), ('description', 'This is the description')])
```

This new record can be seen in the Django Admin website.


## Token Authentication

Added token based Authentication with the rest_framework.authtoken. Once added, need to update the database with a new migration:

``` ps1
    cd APIProject
    python manage.py migrate
```

After refreshing the Django Admin page, a new 'Tokens' section appears. A simple token can be created manually by the Django Admin function.

This can be tested via Postman.
To the http://localhost:8000/auth/ folder, do a POST and include Body -> form-data that includes a 'username' and 'password'. Once posted, it will return the token created within Django for that user.

The Token can be added to the Headers within Postman.

## Front-end
Attempted this in the same project.  For a real project, the front-end and the backend API project should be separate projects.

### Create React Application

First ensured [nodeJS][6] was installed.  Then from a command line:

``` cmd
    npx create-react-app my-app
    cd my-app
    npm start
```
Note: this opens a browser to the correct port for this new app.

Installed Bootstrap:

``` cmd
    cd my-app
    npm install bootstrap
```

then added to ```index.js```

``` javascript
    import 'bootstrap/dist/css/bootstrap.min.css'
```

Installed Visual Studio Code extension ES7 React/Redux/GraphQL/React-Native snippets

Installed ```react-router-dom``` using the following:

``` cmd
    npm install react-router-dom
```

Installed ```axios``` to help get getting data:

``` cmd
    npm install axios
```


## CORS
In order to handle the CORS error message need to install ```djando-cors-headers```

``` cmd
    pip install django-cors-headers
```

and then in the settings.py, Installed apps:

``` python
INSTALLED_APPS = [
    ...
    'corsheaders',
    ...
]
```

and then also add the appropriate CorsMiddleware

``` python
MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    ...
]
```

and then add the whitelist

``` python
CORS_ALLOWED_ORIGINS = [
    "https://example.com",
    "https://sub.example.com",
    "http://localhost:8080",
    "http://127.0.0.1:9000",
]
```


# Up to 5:37:13

## Other random stuff

### ReactJS Showcase and helpful modules

[Sweet Alert](https://sweetalert.js.org/)





[1]: https://www.youtube.com/watch?v=VBqJ0-imSMU 'Django & ReactJS Full Stack Course'
[2]: https://code.visualstudio.com/ 'Visual Studio Code'
[3]: https://www.python.org/ 'Python'
[4]: https://www.djangoproject.com/ 'django'
[5]: https://www.django-rest-framework.org/ 'Django Rest Framework'
[6]: https://nodejs.org/en/ 'NodeJS'
[7]: https://reactjs.org/ 'ReactJS'
[8]: https://www.postman.com/downloads/ 'Postman'