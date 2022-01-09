from rest_framework import generics
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
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


# class SimpleView(APIView):

#     def get(self, request):
#         post = Post.postobjects.all()
#         serializer = PostSerializer(instance=post, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)


# get delete
class PostDetail(generics.RetrieveDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
