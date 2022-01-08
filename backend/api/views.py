from rest_framework import generics, serializers

# project module imports
from app_core.models import Post
from .serializers import PostSerializer


# get post
class PostList(generics.ListCreateAPIView):
    # list post with default manager object
    # queryset = Post.objects.all()

    # list posts with custom manager object - post flagged as published
    queryset = Post.postobjects.all()
    serializer_class = PostSerializer
    pass


# get delete
class PostDetail(generics.RetrieveDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    pass
