from django.conf.urls import url
from rest_framework.authtoken import views as authViews

from . import views

urlpatterns = [
    url(r'^api-token-auth/', authViews.obtain_auth_token),
    url(r'^get-vault/$', views.GetVaultView.as_view(), name='get-vault'),
    url(r'^set-vault/$', views.SetVaultView.as_view(), name='set-vault'),
    url(r'^$', views.main, name='main'),
]
