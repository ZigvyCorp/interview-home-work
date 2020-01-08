from django.shortcuts import render, get_object_or_404
from .models import *
from django.views.generic import ListView
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .forms import *
from taggit.models import Tag
from django.db.models import Count
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import generics
from rest_framework import viewsets
from taggit.models import Tag
from .serializers import *

class PostList(viewsets.GenericViewSet, generics.ListCreateAPIView):
    queryset = PostBlog.objects.all()
    serializer_class = PostSerializer
    filter_backends = [DjangoFilterBackend]

    # permission_classes = (IsAdmindNotGet, )
   

    def get_queryset(self):
        qs = self.request.query_params.get('q', None)
        if qs is None:
            return self.queryset
        qs = qs.upper()

        return Products.objects.filter(Q(title__contains=qs) | Q(tags__contains=qs) )[:30]


class PostDetail(viewsets.GenericViewSet,
                 generics.RetrieveUpdateDestroyAPIView):
    queryset = PostBlog.objects.all()
    serializer_class = PostSerializer


class CommentList(viewsets.GenericViewSet, generics.ListCreateAPIView):
    queryset = CommentBlog.objects.all()
    serializer_class = CommentSerializer
    # permission_classes = (IsAdmindNotGet, )


class CommentDetail(viewsets.GenericViewSet,
                    generics.RetrieveUpdateDestroyAPIView):
    queryset = CommentBlog.objects.all()
    serializer_class = CommentSerializer
    # permission_classes = (IsAdmindNotGet, )

class UserList(viewsets.GenericViewSet, generics.ListCreateAPIView):
    queryset = UserBlog.objects.all()
    serializer_class = CommentSerializer
    # permission_classes = (IsAdmindNotGet, )


class UserDetail(viewsets.GenericViewSet,
                    generics.RetrieveUpdateDestroyAPIView):
    queryset = UserBlog.objects.all()
    serializer_class = CommentSerializer
    # permission_classes = (IsAdmindNotGet, )


class TagList(viewsets.GenericViewSet,
              generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

