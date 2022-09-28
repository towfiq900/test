var image;


image = ['https://www.theflagshop.co.uk/pub/media/catalog/product/cache/1aa45e34d8351bef7860daeb50e7952c/e/r/eritrea-flag-std.jpg', 'https://www.theflagshop.co.uk/pub/media/catalog/product/cache/1aa45e34d8351bef7860daeb50e7952c/u/n/union-jack-flag-std.jpg', 'https://www.theflagshop.co.uk/pub/media/catalog/product/cache/1aa45e34d8351bef7860daeb50e7952c/s/a/saudi-arabia-flag-std_1.jpg'];

let element_image = document.getElementById('image');
image.push(image[0]);
element_image.setAttribute("src", image[0]);


document.getElementById('previous').addEventListener('click', (event) => {
  let element_image2 = document.getElementById('image');
  image.push(image[0]);
  element_image2.setAttribute("src", image[0]);

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_image3 = document.getElementById('image');
  image.push(image[0]);
  element_image3.setAttribute("src", image.shift());

});