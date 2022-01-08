from django.test import TestCase
from django.contrib.auth.models import User
from .models import Category, Post

# Create your tests here.


# test creation of post
# class Test_Create_Post(TestCase):

#   # setup test data create model entries
#     @classmethod
#     def setupTestData(cls):
#         test_category = Category.objects.create(name='django')
#         test_user1 = User.objects.create_user(
#             username='test_user1',
#             password='12345')
#         test_post = Post.objects.create(
#             category_id=1,
#             title='Post Title',
#             excerpt='Post excerpt',
#             contents='Post content',
#             slug='post-slug',
#             author_id=1,
#             status='published')

#   # test created model entries
#     def test_blog_content(self):

#         post = Post.postobjects.get(id=1)
#         cat = Category.objects.get(id=1)
#         author = f'{post.author}'
#         excerpt = f'{post.excerpt}'
#         title = f'{post.title}'
#         content = f'{post.content}'
#         status = f'{post.content}'

#         # test author = test_user1 etc
#         self.assertEqual(author, 'test_user1')
#         self.assertEqual(title, 'Post Title')
#         self.assertEqual(content, 'Post content')
#         self.assertEqual(status, 'published')

#         # test dunder method
#         self.assertEqual(str(post), 'Post Title')
#         self.assertEqual(str(cat), 'django')
