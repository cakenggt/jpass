from django.shortcuts import render

from django.http import JsonResponse
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

import json

from.models import Vault

# Create your views here.
class GetVaultView(APIView):
    """
    Retrieve all checklists for a user
    """
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        if hasattr(request.user, 'vault'):
            vault_data = request.user.vault.data
        else:
            Vault.objects.create(
                owner = request.user,
                data = ''
            );
            vault_data = ''
        return JsonResponse({'vault':vault_data})

class SetVaultView(APIView):
    """
    Set vault for a user
    """
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def post(self, request, format=None):
        if not request.body:
            print 'in post'
            encVault = request.POST.get('vault', '')
        else:
            print 'in body'
            encVault = json.loads(request.body)['vault']
        vault = request.user.vault
        vault.data = encVault
        vault.save()
        return JsonResponse({'status':'success'})

def main(request):
    return render(request, 'jpass/main.html')
