# Django and React Full Stack Course

The following project is based on the Youtube tutorial [Django & ReactJS Full Stack Course][1]

This project was built using:
- [Visual Studio Code][2]
- [Python (v 3.9.5)][3]
- [Django (v 4.0)][4]
- [Django REST framework (v 3.13.1)][5]
- Javascript
- ReactJS

## Environment setup

A Python Virtual Environment was created within Visual Studio Code.
```
    python -m venv venv
    .\venv\Scripts\Activate.ps1
```

Python libraries were installed via pip.
```
    pip install Django
    pip install djangorestframework
```

Created the Django project and tested it using:
```
    django-admin startproject APIProject
    cd .\APIProject\
    python manage.py runserver
```

Created a 'launch.json' configuration file to enable quicker starting and stopping of Django within Visual Studio Code.

```
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

Genearted a default database via:
 ```
    python manage.py migrate
 ```


[1]: https://www.youtube.com/watch?v=VBqJ0-imSMU 'Django & ReactJS Full Stack Course'
[2]: https://code.visualstudio.com/ 'Visual Studio Code'
[3]: https://www.python.org/ 'Python'
[4]: https://www.djangoproject.com/ 'django'
[5]: https://www.django-rest-framework.org/ 'Django Rest Framework'