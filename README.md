# TODOLIST Web Application

## Description

- A task manage web application with React frontend and Django backend
- Using Django REST framework api to achieve the communication between frontend and backend
- Deployment is done on AWS EC2

## Completed all functions

- Create a todo
  ![1](https://p1.tr0.n0.cdn.getcloudapp.com/items/2NuAyPQq/增加待办事项.gif?v=e0926612340e9f8161c83caf77cac637)
- Modify a todo
  ![2](https://p1.tr0.n0.cdn.getcloudapp.com/items/wbue7YQE/编辑待办事项.gif?v=31841b828d88b9aba7f08bafc0cfa8be)
- Delete a todo
  ![3](https://p1.tr0.n0.cdn.getcloudapp.com/items/qGuzNr6x/删除待办事项.gif?v=8f5affb7ce5bf0d3257a54d105b362af)
- Tag a done todo
  ![4](https://p1.tr0.n0.cdn.getcloudapp.com/items/QwuQ04oE/标记完成待办事项.gif?v=1331c1c91e28b5310a8ee358083cf41b)
- Delete a done todo
  ![5](https://p1.tr0.n0.cdn.getcloudapp.com/items/6quDeEp5/删除一个完成事项.gif?v=9e7764a606cd7a06be524229e68fb797)
- List all todos/done todos
  ![6](https://p1.tr0.n0.cdn.getcloudapp.com/items/2NuAyvZp/列出所有待办%2F完成事项.gif?v=49f092d4246195b40e6cc138ea8378cf)
- Modify the deadline
  ![7](https://p1.tr0.n0.cdn.getcloudapp.com/items/lluwY6Kj/更改待办事项Deadline.gif?v=74da30a947265bfad7063a5bf85f1b0f)

## Requirements

- follow the `SETUP.md`

## Techniques

- frontend
  - React
    > SPA
  - Bootstrap
- backend
  - Django
  - PostgreSQL
  - psycopg2 -> adapter
- communication
  - Django REST framework -> API
    > Swagger for API look(optional)
  - CORS
    > allows client applications to interface with APIs hosted on different domains
- deployment
  - AWS ubuntu@EC2

## Reference

### Backend

- [Env Setup](https://gist.github.com/harisibrahimkv/8279101)
- [Tutorial: Django REST with React (Django 2.0 and a sprinkle of testing)](https://www.valentinog.com/blog/drf/)
- [Modern Django — Part 2: REST APIs, Apps, and Django REST Framework](https://medium.com/@djstein/modern-django-part-2-rest-apis-apps-and-django-rest-framework-ea0cac5ab104)
- [Django REST framework doc](https://www.django-rest-framework.org/)
- [Django Rest Framework with React Tutorial](https://wsvincent.com/django-rest-framework-react-tutorial/)
- [Django REST framework--quickstart](https://www.django-rest-framework.org/tutorial/quickstart/)

### Frontend

- [React doc](https://reactjs.org/docs/hello-world.html)
- [React Tutorial: Call & Consume a JSON REST API with Axios](https://www.techiediaries.com/react-axios/)
- [Django and React Tutorial](https://www.youtube.com/watch?v=uZgRbnIsgrA)
- [Axios in React — Bring Your Data to the Front](https://programmingwithmosh.com/javascript/axios-in-react-bring-your-data-to-the-front/)
- [reactdj](http://srplabs.in/home)
- [axios](https://github.com/axios/axios)
- [React Icons Gets You Access to Hundreds of Open Source Icons](https://alligator.io/react/react-icons-open-source-icons/)
