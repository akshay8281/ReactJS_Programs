let result = null

export default function Comp1() {
    if (result === null)
        throw new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Data is Here')
            }, 3000)
        })
            .then(res => (result = res))
            .then(err => (result = err))

    return (
        <div>
            <h1>{result}</h1>
        </div>
    )
}
