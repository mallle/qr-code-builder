// Get elements
const qrUrl = document.querySelector('#url');
const qrColor = document.querySelector('#color');
const qrImage = document.getElementById('imageInput');

// Create Object with initial data
const qrCode = new QRCodeStyling({
  width: 250,
  height: 250,
  data: "https://example.com",
  image: "",
  dotsOptions: {
      color: "#000",
      type: "rounded"
  },
  backgroundOptions: {
      color: "#fff",
  },
  imageOptions: {
      crossOrigin: "anonymous",
      margin: 5
  }
});

// draw canvas
qrCode.append(document.getElementById("canvas"));

// Update Url of qrCode
const updateQrUrl = () => {
  const newQrUrl = qrUrl.value;
  qrCode.update({
    data: newQrUrl
  });
};

// Update image of qrCode
const updateQrImg = () => {
  let newQrImage;
  if(qrImage.files[0]) {
    newQrImage = URL.createObjectURL(qrImage.files[0]);
  }
  qrCode.update({
    image: newQrImage
  });
};

// Update color of qrCode
const updateQrColor = () => {
  const newQRColor = qrColor.value;
  qrCode.update({
    dotsOptions: {
      color: newQRColor
    }
  });
};

// Update type of qrCode
const updateQrType = () => {
  const qrType = document.querySelector('input[name="type"]:checked');
  const newQRType = qrType.value;
  qrCode.update({
    dotsOptions: {
      type: newQRType
    }
  });
};

// Download QR code
const download = (type) => qrCode.download(type);