from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from app_core.models import Category, Post
from django.contrib.auth.models import User

# Create your tests here.


class PostTests(APITestCase):

    def test_view_posts(self):
        url = reverse('api:listcreate')
        response = self.client.get(url, format='json')
        # test status
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def create_post(self):
        self.test_category = Category.objects.create(name='django')
        self.test_user1 = User.objects.create(
            username='test_user1', password='12345')

        data = {
            "title": "new",
            "author": 1,
            "excerpt": "new",
            "content": "new"
        }

        url = reverse('api:listcreate')
        response = self.client.get(url, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
