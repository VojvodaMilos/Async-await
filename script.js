(
    async () => {
        try {
            const data = await API.getData()
            document.images[0].setAttribute("src", data.message)
        }
        catch (e) {
            console.log("random text error " + e);
        }
    }
)()