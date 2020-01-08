from django.contrib import admin
from .models import *


class PostAdmin(admin.ModelAdmin):
        list_display = ('title', 'slug', 'author', 'publish',
                        'status')
        list_filter = ('status', 'created', 'publish', 'author')
        search_fields = ('title', 'body')
        prepopulated_fields = {'slug': ('title',)}
        raw_id_fields = ('author',)
        date_hierarchy = 'publish'
        ordering = ['status', 'publish']


class CommentAdmin(admin.ModelAdmin):
       list_display = ('name', 'email', 'post', 'created', 'active')
       list_filter = ('active', 'created', 'updated')
       search_fields = ('name', 'email', 'body')



class PostBlogAdmin(admin.ModelAdmin):
        list_display = ('title', 'slug', 'author', 'created_at',
                        'tags')
        prepopulated_fields = {'slug': ('title',)}
        raw_id_fields = ('author',)


class UserBlogAdmin(admin.ModelAdmin):
        list_display = ('username', 'password', 'name', 'created_at',
                        'dob')

class CommentBlogAdmin(admin.ModelAdmin):
        list_display = ('owner', 'post', 'content')       
# admin.site.register(Post,PostAdmin)
admin.site.register(PostBlog,PostBlogAdmin)
admin.site.register(UserBlog,UserBlogAdmin)
admin.site.register(CommentBlog,CommentBlogAdmin)

admin.site.register(Comment,CommentAdmin)
