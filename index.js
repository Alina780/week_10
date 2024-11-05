function changeImg(){
    let image = document.getElementById('img1');
    if(image.src.match('style/img-1.jpg')){
        image.src='style/img-2.jpg'
    }else{
        image.src = 'style/img-1.jpg'
    }
}
