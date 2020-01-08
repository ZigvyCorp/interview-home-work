from django.conf.urls import url
from . import views
from rest_framework import routers
from django.urls import path
from django.conf.urls import include

router = routers.SimpleRouter()


# Basic Route
router.register("posts", views.PostList)
router.register("users", views.UserList)
router.register("comments", views.CommentList)
router.register("tags", views.TagList)
app_name = 'blog'
urlpatterns = [
    # post views
    path("", include(router.urls)),

]
