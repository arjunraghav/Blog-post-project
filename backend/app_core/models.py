from django.db import models
from django.contrib.auth.models import User
from django.db.models.fields import CharField
from django.db.models.fields.related import ForeignKey
from django.utils import timezone

# Create your models here.


class Category(models.Model):
    # fields
    name = CharField(max_length=100)

    def __str__(self):
        return self.name


class Post(models.Model):
    # Custom model manager
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    # options
    OPTIONS = (
        ('draft', 'Draft'),
        ('published', 'Published')
    )

    # fields
    category = models.ForeignKey(
        Category, on_delete=models.PROTECT, default=1)
    title = models.CharField(max_length=250)
    excerpt = models.TextField(null=True)
    content = models.TextField()
    slug = models.SlugField(max_length=250, unique_for_date='published')
    published = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='app_core_posts')
    status = models.CharField(
        max_length=10, choices=OPTIONS, default='published')
    # Model managers
    objects = models.Manager()  # default manager
    postobjects = PostObjects()  # custom manager

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title
