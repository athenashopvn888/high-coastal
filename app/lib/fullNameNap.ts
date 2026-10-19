/**
 * LC01 exact full name + NAP. Name = the store's full name as used on its Google Business Profile.
 * Public GBP primary phone only. Map link = this store's own Google place ID.
 */
export const FULL_NAME_NAP = {
  "code": "LC01",
  "fullName": "High Coastal Cannabis Dispensary Weed Delivery",
  "street": "1720 Lakeshore Rd W",
  "city": "Mississauga",
  "region": "ON",
  "postal": "L5J 1J5",
  "phoneDisplay": "(289) 815-5222",
  "phoneTel": "tel:+12898155222",
  "hours": "Open 24 hours, 7 days a week",
  "mapsUrl": "https://www.google.com/maps/place/?q=place_id:ChIJMe1QOXhFK4gRBHt1da_euwY",
  "placeId": "ChIJMe1QOXhFK4gRBHt1da_euwY",
  "neighbourhood": "Clarkson / Lakeshore",
  "intersection": "Lakeshore Rd W & Clarkson Rd N",
  "transit": "Steps from Clarkson GO Station and accessible by local MiWay routes.",
  "visitPath": "/visit"
} as const;

export const FULL_NAME_NAP_ADDRESS = `${FULL_NAME_NAP.street}, ${FULL_NAME_NAP.city}, ${FULL_NAME_NAP.region} ${FULL_NAME_NAP.postal}`;
