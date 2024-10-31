from django import forms
from django.contrib.gis.geos import Point

from .models import Listings


class ListingsForm(forms.ModelForm):
    class Meta:
        model = Listings
        fields = ['title', 'description', 'area', 'borough', 'listing_type', 'property_status', 'price',
                  'rental_frequency', 'rooms', 'furnished', 'pool', 'elevator', 'cctv', 'parking', 'date_posted',
                  'location', 'latitude', 'longitude']

    latitude = forms.FloatField()
    longitude = forms.FloatField()

    def clean(self):
        data = super().clean()
        latitude = float(data.pop('latitude'))
        longitude = float(data.pop('longitude'))
        location = Point(longitude, latitude)
        location.srid = 4326
        data['location'] = location
        return data

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        location = self.initial.get('location')
        if isinstance(location, Point):
            self.initial['latitude'] = location.tuple[0]
            self.initial['longitude'] = location.tuple[1]
