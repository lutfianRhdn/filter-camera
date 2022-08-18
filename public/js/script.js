const readCamera = async (videoContainer) => {
	const stream = await navigator.mediaDevices.getUserMedia({
		video: true,
		audio: false,
	});
	const video = videoContainer;
	video.srcObject = stream;
	video.play();
	return video;
};
function drawCanvas(ctx, video) {
	ctx.drawImage(video, 0, 0, 640, 640);
	var canvasData = canvas.toDataURL();
	image = String(canvasData).replace("data:image/png;base64,", "");
	return image;
}
const sendImage = async (image) => {
	$.ajax({
		type: "POST",
		data: { image },
		url: "http://localhost:3000/",
		dataType: "json",
		async: false,
		success: function (result) {
			// call the function that handles the response/results
		},
		error: function () {},
	});
};

// const response = await fetch("http://localhost:3000/", {
// 	method: "POST",
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// 	body: image,
// });
// const data = await response.json();
// };

readCamera(document.querySelector("#fake-video"));
const video = document.querySelector("#video");
readCamera(video);

setInterval(() => {
	const image = drawCanvas(
		document.querySelector("#canvas").getContext("2d"),
		video
	);
	sendImage(image);
}, 9000);
