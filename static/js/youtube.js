fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCKySeviC7nVGyWM8T3sMkXA&maxResults=5&key=AIzaSyAAcEL5UeJgBX7hs7c9cFv-k0jcd-vp9os")
.then(async (res) => {
    return await res.json()
})
.then((data) => {
    let videos = data.items;
    const videoContent = document.getElementById("video-content");
    if(videos.length == 0){
        videoContent.innerHTML = "No videos found";
    }
    for(video of videos){
        let videoId = video.id.videoId;
        let videoTitle = video.snippet.title;
        let videoDescription = video.snippet.description;
        let videoThumbnail = video.snippet.thumbnails.medium.url;
        let videoDate = video.snippet.publishedAt;
        let videoUrl = "https://www.youtube.com/watch?v=" + videoId;
        videoContent.innerHTML += `
            <a href="${videoUrl}" target="_blank">
                <img src="${videoThumbnail}" alt="Video Thumbnail">
                <div class="video-info">
                    <h3>${videoTitle}</h3>
                    <p>${videoDescription}</p>
                    <p>${videoDate}</p>
                </div>
            </a>
        `;
    }
})