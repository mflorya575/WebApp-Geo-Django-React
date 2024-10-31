from django.contrib import admin
from .models import Listings
from .forms import ListingsForm


class ListingAdmin(admin.ModelAdmin):
    form = ListingsForm


admin.site.register(Listings, ListingAdmin)
