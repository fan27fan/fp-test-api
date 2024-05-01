module.exports = async (req) => {
    return new Promise((res, rej) => {
        try {
            let data = "";
            req.on('data', (chunk) => {
                data += chunk;
                res(JSON.parse(data));
            })
        } catch (err) {
            console.log(err);
            rej(err);
        }
    })
}