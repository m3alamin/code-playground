from django.urls import path
from . import views

urlpatterns = [
    path('add/', views.add, name = 'add_post'),
    path('<id>/', views.show, name='show_post'),
    path('comment/<post_id>/', views.add_comment, name='add_comment'),
    path('edit/<id>/', views.edit, name='edit_post'),
    path('delete/<id>/', views.delete, name='delete_post')
    
]
