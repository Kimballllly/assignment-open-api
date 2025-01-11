TikTok API Integration Documentation

Base URL
http://localhost:3000/tiktok

Endpoints
1. Get User Info
Retrieve information about a TikTok user based on their unique ID.

URL: /user-info
Method: GET
Query Parameters:
uniqueId (string, required): The TikTok username to fetch information for.

Request Example

GET http://localhost:3000/tiktok/user-info?uniqueId=taylorswift

Response Example

{
  "status": "success",
  "data": {
    "userInfo": {
      "uniqueId": "taylorswift",
      "nickname": "Taylor Swift",
      "bio": "Singer and songwriter",
      "followers": 1000000,
      "following": 20,
      "likes": 5000000,
      "profilePictureUrl": "https://example.com/taylor.jpg"
    }
  }
}

2. Get User Followings
Retrieve the list of users that a TikTok user is following.

URL: /user-followings
Method: GET
Query Parameters:
secUid (string, required): The secure ID of the TikTok user.
count (integer, optional, default: 50): The number of followings to retrieve.
minCursor (integer, optional, default: 0): The starting point for pagination.
maxCursor (integer, optional, default: 0): The ending point for pagination.

Request Example

GET http://localhost:3000/tiktok/user-followings?secUid=MS4wLjABAAAATtFKZYaOb-9nF_w7QRi4y64d45mvuWuwf5ACEd3c6f-GTlfW9rJJlKfV2vWhg0aw&count=50


Response Example


{
    "requestDetails": {
        "secUid": "MS4wLjABAAAATtFKZYaOb-9nF_w7QRi4y64d45mvuWuwf5ACEd3c6f-GTlfW9rJJlKfV2vWhg0aw",
        "count": "50",
        "minCursor": 0,
        "maxCursor": 0
    },
    "metadata": {
        "totalFollowings": 76,
        "hasMore": true,
        "maxCursor": 0,
        "minCursor": 1656812667,
        "logId": "20250111155934E455EDD1CB08AC3FE50F"
    },
    "followings": [
        {
            "username": "cnn",
            "nickname": "CNN",
            "avatar": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/99d43f49d3f1749ffa85f5954ca10a8c~c5_100x100.jpeg?lk3s=a5d48078&nonce=30165&refresh_token=a0046da069879b2b28870cb739b2f7a5&x-expires=1736780400&x-signature=9tT0AwL9Av6Q%2FadBrBZPmjpYkyI%3D&shp=a5d48078&shcp=81f88b70",
            "verified": true,
            "bio": "This is CNN...",
            "stats": {
                "followers": 6900000,
                "followings": 8,
                "likes": 204600000,
                "videos": 5588
            }
        },
        {
            "username": "theclearcut",
            "nickname": "The Clear Cut",
            "avatar": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ba342c5ffa49e9508ef15d69ebd80c31~c5_100x100.jpeg?lk3s=a5d48078&nonce=6833&refresh_token=e6a077c7fcdc71f6243b7ac4b69bb351&x-expires=1736780400&x-signature=mvV18UxUmJYQQI5Az8RgCrl77TE%3D&shp=a5d48078&shcp=81f88b70",
            "verified": false,
            "bio": "Olivia CEO of TCC\nNatural 💎 Jewelry \nGIA GG / 4th Gen 💎 Expert \nForbes 30U30",
            "stats": {
                "followers": 92100,
                "followings": 219,
                "likes": 3400000,
                "videos": 366
            }
        },
        {
            "username": "francescagizz3",
            "nickname": "francescagizzio",
            "avatar": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0c82ac81e76d13575855698d041b05e8~c5_100x100.jpeg?lk3s=a5d48078&nonce=76948&refresh_token=88286c2eb353b88abd318d3f2dcb7245&x-expires=1736780400&x-signature=vpIRB%2BmAyUmoobHweyCwHyI6kTw%3D&shp=a5d48078&shcp=81f88b70",
            "verified": false,
            "bio": "Tik tok shop finds ✨fashion, beauty & my life💋\n📩: Francescagizzio3@gmail.com",
            "stats": {
                "followers": 107300,
                "followings": 221,
                "likes": 1300000,
                "videos": 421
            }
        },
        {
            "username": "cmg.events",
            "nickname": "CMG EVENTS",
            "avatar": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e235875792fb22c665d951d67ee2a87c~c5_100x100.jpeg?lk3s=a5d48078&nonce=94137&refresh_token=6e045f11bbcc11c15ab7afae810a1c6c&x-expires=1736780400&x-signature=al2jVLtI%2FFNj07mIKJqNl4FLDw4%3D&shp=a5d48078&shcp=81f88b70",
            "verified": false,
            "bio": "• Luxury weddings with a wow factor •\nNapa | SF | LA | Destination",
            "stats": {
                "followers": 8792,
                "followings": 45,
                "likes": 1400000,
                "videos": 110
            }
        },
        {
            "username": "jeffreestar",
            "nickname": "Jeffree Star",
            "avatar": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1a11e84d0015044cd16291269bb66c07~c5_100x100.jpeg?lk3s=a5d48078&nonce=91928&refresh_token=6dfed3127bc27ee73f84573ab2dcc552&x-expires=1736780400&x-signature=CpxnxxuIjhEmsBO6PJQuOY7iEDk%3D&shp=a5d48078&shcp=81f88b70",
            "verified": true,
            "bio": "Makeup mogul and Yak rancher 💖 Living in Wyoming, living my dreams! ⭐️🦄",
            "stats": {
                "followers": 7500000,
                "followings": 259,
                "likes": 160100000,
                "videos": 474
            }
        },
        {
            "username": "itsbennyblanco",
            "nickname": "benny blanco",
            "avatar": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7310280392722890798~c5_100x100.jpeg?lk3s=a5d48078&nonce=22795&refresh_token=8b527490be8b87949633f0d123e1b9e3&x-expires=1736780400&x-signature=no2e42w%2FHYGyReqSXWnDNho0yH0%3D&shp=a5d48078&shcp=81f88b70",
            "verified": true,
            "bio": "i know u r wondering why i’m verified\ninquiries - bennyblancoinfo@icloud.com",
            "stats": {
                "followers": 5800000,
                "followings": 192,
                "likes": 192700000,
                "videos": 244
            }
        },
        {
            "username": "timothyy.b",
            "nickname": "Tim:)",
            "avatar": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0192e3ef3053c84c53aeb5ca92485b2e~c5_100x100.jpeg?lk3s=a5d48078&nonce=6332&refresh_token=ad1a5d723b94d552a66ec670a3dc7271&x-expires=1736780400&x-signature=Yd8VHy4ELcSo%2F12C4SNRvGYZxJc%3D&shp=a5d48078&shcp=81f88b70",
            "verified": false,
            "bio": "Stage 4 Cancer Kid 👨🏻‍🦲\ntimothyy.bb@gmail.com📧\nDonate below! 🔗 ⤵️",
            "stats": {
                "followers": 113200,
                "followings": 448,
                "likes": 4500000,
                "videos": 1029
            }
        },
        {
            "username": "minazibayi",
            "nickname": "Mina",
            "avatar": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b76236b532690487e4c3575c535e8e85~c5_100x100.jpeg?lk3s=a5d48078&nonce=30923&refresh_token=d415ff32501333c73450886186aef8f0&x-expires=1736780400&x-signature=Sz0sdu8EIQTT3k%2FhxSMZhd5jfjI%3D&shp=a5d48078&shcp=81f88b70",
            "verified": false,
            "bio": "Simple city ✨\nCalifornia 📍\nContact : Mina@minazibayi.com",
            "stats": {
                "followers": 1100000,
                "followings": 317,
                "likes": 51700000,
                "videos": 1321
            }
