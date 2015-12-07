from django.shortcuts import render

from django.http import JsonResponse
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

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
        vault = request.POST.get('vault', '{}')
        print vault
        request.user.vault.data = vault

def main(request):
    return render(request, 'jpass/main.html')
