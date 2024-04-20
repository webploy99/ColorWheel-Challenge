
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/colorwheel-challenge/id6474930435";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/8c/90/aa/8c90aa4d-09b5-67fc-a90b-a343bcec327a/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
  image1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  image2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  image3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  image4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  image5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/22/72/c6/2272c6da-c3ed-56ab-41bb-6f7e2c9ef210/9f279a0d-0d98-4d3d-a6e3-ea4242b70cbf_IOS-Description_12.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/d6/00/3f/d6003f3d-0a47-f810-7072-186d51a949c2/953a9244-32f1-4cbc-915c-48d2e401f58e_IOS-Description_14.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/6a/20/55/6a2055ac-aada-9585-b22c-e53aa9cf9a2d/833ba16f-6f40-41e2-aa64-fdb8e71eb595_IOS-Description_13.jpg/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('img1').src = getImg.image1
document.getElementById('img2').src = getImg.image2
document.getElementById('img3').src = getImg.image3
document.getElementById('img4').src = getImg.image4
document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3

