export function showMessage(message, type) {
    Toastify({
        text: message,
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: type === "success" ? "linear-gradient(to right, #00b09b, #96c93d)" : "linear-gradient(to right, #4300b0, #c93dc2)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}