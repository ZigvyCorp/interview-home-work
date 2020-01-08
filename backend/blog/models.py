from django.db import models

from django.utils import timezone

from django.contrib.auth.models import User

from django.urls import reverse

from taggit.managers import TaggableManager

from django.contrib.postgres.fields import ArrayField


class PublishedManager(models.Manager):
    def get_queryset(self):
        return super(PublishedManager,
                     self).get_queryset()\
                          .filter(status='published')

class PostBlog(models.Model):
    title = models.CharField(max_length=250)
    slug = models.SlugField(max_length=250
                           )
    author = models.ForeignKey("UserBlog",
                               related_name='posts',
                               on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.CharField(max_length=250)
    tags = ArrayField(models.CharField(max_length=80, blank=True), size=5)

    def __str__(self):
        return self.title

class UserBlog(models.Model):
    username = models.CharField(unique=True, max_length=50, blank=True, null=True)
    password = models.CharField(max_length=50, blank=True, null=True)
    name = models.CharField(max_length=250)
    created_at = models.CharField(max_length=250)
    dob = models.CharField(max_length=250)
    
    # list_display = [field.name for field in this._meta.get_fields()]

class CommentBlog(models.Model):
    owner = models.ForeignKey(UserBlog,
                               related_name='comments',
                               on_delete=models.CASCADE)
    post = models.ForeignKey(PostBlog,
                               related_name='posts',
                               on_delete=models.CASCADE)
    content = models.CharField(max_length=250)
    created_at = models.CharField(max_length=250)
    

class Post(models.Model):
     # Our custom manager.
    tags = TaggableManager()

    STATUS_CHOICES = (
        ('draft', 'Draft'),
        ('published', 'Published')
    )
    objects = models.Manager()  # The default manager.
    published = PublishedManager()
    title = models.CharField(max_length=250)
    slug = models.SlugField(max_length=250,
                            unique_for_date='publish')
    author = models.ForeignKey(User,
                               related_name='blog_posts',
                               on_delete=models.CASCADE)
    body = models.TextField()
    
    publish = models.DateTimeField(default=timezone.now)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=10,
                              choices=STATUS_CHOICES,
                              default='draft')

    def get_absolute_url(self):
        return reverse('blog:post_detail',
                       args=[self.publish.year,
                             self.publish.strftime('%m'),
                             self.publish.strftime('%d'),
                             self.slug])

    class Meta:
        ordering = ('-publish',)

    def __str__(self):
        return self.title


class Comment(models.Model):
    post = models.ForeignKey(PostBlog, related_name='comments',on_delete=models.CASCADE)
    name = models.CharField(max_length=80)
    email = models.EmailField()
    body = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return 'Comment by {} on {}'.format(self.name, self.post)
