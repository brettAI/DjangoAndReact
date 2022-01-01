from django.urls import path
#from .views import Index
from .views import article_list, article_details

urlpatterns = [
    #path('', Index),
    path('articles/', article_list),
    path('articles/<int:pk>', article_details),
]