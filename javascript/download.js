// function autoClick() {
//   $("#download").click();
// }

// $(document).ready(function () {
//   var element = $(".htmlContent:visible");

//   $("#download").on("click", function () {
//     html2canvas(element, {
//       onrendered: function (canvas) {
//         var imageData = canvas.toDataURL("image/jpg");
//         var newData = imageData.replace(
//           /^data:image\/png/,
//           "data:application/octet-stream"
//         );
//         $("#download").attr("download", "image.jpg").attr("href", newData);
//       },
//     });
//   });
// });

const iphoneBtn = document.getElementById("iphone-btn");
const iphoneDevice = document.getElementById("iphone");

iphoneBtn.addEventListener("click", function () {
  html2canvas(iphoneDevice, {
    onrendered: function (canvas) {
      canvas.toBlob(function (blob) {
        // create a virtual link element
        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "screenshot.png";
        link.dispatchEvent(new MouseEvent("click"));
      });
    },
  });
});

const androidBtn = document.getElementById("android-btn");
const androidDevice = document.getElementById("android");

androidBtn.addEventListener("click", function () {
  html2canvas(androidDevice, {
    onrendered: function (canvas) {
      canvas.toBlob(function (blob) {
        // create a virtual link element
        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "screenshot.png";
        link.dispatchEvent(new MouseEvent("click"));
      });
    },
  });
});
