const fetchUrl = ( url)=> { console.log(`fetching ${url}`)}
const debounce = (func,delay)=>{
    let timer;
    return (url)=>{
        clearTimeout(timer)
        timer = setTimeout(() => {
            func(url)
        }, delay)
    }
}

const fetching = debounce(fetchUrl, 500)

fetching(1)
fetching(2)
fetching(3)
fetching(4)
fetching(5)