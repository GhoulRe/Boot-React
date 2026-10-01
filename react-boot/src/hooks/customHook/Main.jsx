import useFetch from "./useFetch"

export const Main = ()=>{
    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos')
    console.log(data);
    
    return (
        <section id="center" className="max-h-60 overflow-y-scroll">
            {data && 
            data.map(data => (
                <p className={data.completed ? '':'line-through'} key={data.id}>{data.title}</p>
            ))}
        </section>
    )
}