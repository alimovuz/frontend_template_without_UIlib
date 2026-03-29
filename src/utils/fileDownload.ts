const fileDownload = (url: string) => {
    fetch(`${url}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "ngrok-skip-browser-warning": "true",
        },
    })
        .then((res) => {
            return res.blob()
        })
        .then((blob) => {
            const url = URL.createObjectURL(blob);
            window.open(url, "_blank");
        })
        .catch((e) => console.log(e));
};

export {fileDownload}