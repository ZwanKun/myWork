//scroll about
document.querySelector('.scroll-mouse').addEventListener('click',function(){
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
})

//skill front//
document.getElementById('Front').addEventListener('click', function() {
    let skillList = document.querySelectorAll('#Front + ul li');
    skillList.forEach(function(item) {
        if (item.style.display === "none") {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

//skill design//
document.getElementById('Design').addEventListener('click', function() {
    let skillList = document.querySelectorAll('#Design + ul li');
    skillList.forEach(function(list) {
        if (list.style.display === "none") {
            list.style.display = "block";
        } else {
            list.style.display = "none";
        }
    });
});







