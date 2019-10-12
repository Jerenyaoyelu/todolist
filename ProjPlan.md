# TODO web application development
##Pre-Project
- Get familiar decoupled Frontend and Backend process
    > - 在前后端分离架构中，后端只需要负责按照约定的数据格式向前端提供可调用的API服务即可。
    > - 前后端之间通过HTTP请求进行交互，前端获取到数据后，进行页面的组装和渲染，最终返回给浏览器。
    > - Mock 测试

- Techniques in this project
    - frontend
        - React
          > SPA
        - Bootstrap
    - backend
        - Django
        - PostgreSQL
    - communication
        - Django REST framework -> API
          > Swagger for API look(optional)
        - CORS
          > allows client applications to interface with APIs hosted on different domains
    - deployment
        - AWS ubuntu@EC2
    
- Project plan
    - features analysis
    - UI design 
    - env setup
    - project pipeline
    - develop and test
    - deployment

- Directory Structure
```
    - frontend
       
    - backend
        - todo_proj
            - __init__.py
            - urls.py
                > add api instead of urls
            - settings.py
            - wsgi.py
        - todo_app
            - migrations
            - __init__.py
            - admin.py
            - models.py
            - views.py
            - tests.py
            - app.py
```

##In-Project
- Decide interaction bewteen front end and back end
- Parallel development and test
- 