from django.urls import path, include
#from .views import Index
#from .views import article_list, article_details
#from .views import ArticleList, ArticleDetails
from .views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='articles')

urlpatterns = [
    path('', include(router.urls)),
    #path('', Index),
    #path('articles/', article_list),               # used for function based views
    #path('articles/<int:pk>', article_details),    # used for function based views
    #path('articles/', ArticleList.as_view()),
    #path('articles/<int:id>', ArticleDetails.as_view()),


]