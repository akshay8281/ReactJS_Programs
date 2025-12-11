class APIStorage {
    inProgress = true
    data = null

    doFetch = async function () {
        const rowData = await fetch('https://jsonplaceholder.typicode.com/comments')
        const jsonData = await rowData.json()

        return jsonData
    }

    start = function () {
        if (this.inProgress) {
            throw this.doFetch().then(
                res => {
                    this.inProgress = false
                    this.data = res
                },
                err => {
                    this.inProgress = false
                    this.data = err
                }
            )
        } else {
            if (this.data instanceof Error) {
                throw this.data
            } else {
                return this.data
            }
        }
    }
}

const z = new APIStorage()

export default function LazyComp() {
    const result = JSON.stringify(z.start())

    return (
        <div>
            <h1> {result} </h1>
        </div>
    )
}
