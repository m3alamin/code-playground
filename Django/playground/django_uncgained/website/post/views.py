from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from .models import Post
from .forms import CommentForm, EditForm, DeleteForm, AddForm

# Create your views here.


def list_posts(request):
    posts = Post.objects.all()
    delete_form = DeleteForm()
    return render(request, 'post/list_posts.html', {'posts': posts, 'delete_form': delete_form})


def show(request, id):
    post = Post.objects.get(pk=id)
    comments = post.comment_set.all()
    form = CommentForm()
    return render(request, 'post/show_post.html', {'post': post, 'comments': comments, 'form': form})
    #return HttpResponse(comments)


def add(request):
    form = AddForm()

    if request.method == 'POST':
        form = AddForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.user_id = 2
            post.save()
            return redirect('show_post', id=post.id)

    return render(request, 'post/add_post.html', {'form': form})


def add_comment(request, post_id):
    form = CommentForm(request.POST)
    comment = form.save(commit=False)
    comment.post_id = post_id
    comment.save()
    return redirect( 'show_post', id=post_id)


def edit(request, id):
    post = get_object_or_404(Post, pk=id)

    if request.method == 'POST':
        form = EditForm(request.POST, instance=post)
        if form.is_valid():
            post = form.save(commit = False)
            post.save()
            return redirect('show_post', id=id)
    else:
        form = EditForm(instance=post)

    return render(request, 'post/edit_post.html', {'post': post,'form': form})


def delete(request, id):
    post = get_object_or_404(Post, pk=id)

    if request.method == 'POST':
        form = DeleteForm(request.POST, instance = post)
        if form.is_valid():
            post.delete()
            return redirect('/')
    return HttpResponse(id)
