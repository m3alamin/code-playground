from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import requests

# Create your views here.

def exp(request):
    api_data = requests.get('https://jsonplaceholder.typicode.com/posts')
    response = api_data.json()
    # response = request
    # print(vars(response))
    # quit()
    return JsonResponse(response, safe=False)
