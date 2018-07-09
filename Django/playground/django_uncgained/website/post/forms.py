from django.forms import ModelForm
from comment.models import Comment
from .models import Post

class CommentForm(ModelForm):
    '''
    Comment form
    '''

    class Meta:
        model = Comment
        fields = ('body', 'name', 'email')


class EditForm(ModelForm):
    """
    Edit form
    """

    class Meta:
        model = Post
        fields = ('title', 'body')


class DeleteForm(ModelForm):

    class Meta:
        model = Post
        fields = []


class AddForm(ModelForm):

    class Meta:
        model = Post
        fields = ('title', 'body')
