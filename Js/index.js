let likeCount = 9;
let likeCount2 = 12;
let likeCount3 = 9;
function incrementLikes(likeId) {
    if (likeId === 'likeCount') {
    likeCount++;
    document.getElementById('likeCount').innerText = likeCount + (likeCount2 === 1 ? ' like' : ' like(s)');
} else if (likeId === 'likeCount2') {
    likeCount2++;
    document.getElementById('likeCount2').innerText = likeCount2 + (likeCount2 === 1 ? ' like' : ' like(s)');
}
 else if (likeId === 'likeCount3') {
    likeCount3++;
    document.getElementById('likeCount3').innerText = likeCount3 + (likeCount3 === 1 ? ' like' : ' like(s)');

}
}
