from django.urls import path, include
#from .views import Index
#from .views import article_list, article_details
#from .views import ArticleList, ArticleDetails
from .views import ArticleViewSet
from .views import ArticleViewSetGeneric
from .views import ArticleViewSetModel
from rest_framework.routers import DefaultRouter
from .views import UserViewSet

router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='articles')
router.register('articlesgen', ArticleViewSetGeneric, basename='articlesgen')
router.register('articlesmod', ArticleViewSetModel, basename='articlesmod')
router.register('users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    #path('', Index),
    #path('articles/', article_list),               # used for function based views
    #path('articles/<int:pk>', article_details),    # used for function based views
    #path('articles/', ArticleList.as_view()),
    #path('articles/<int:id>', ArticleDetails.as_view()),
]