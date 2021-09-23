const Home = () => {
    return (
        <div className="Home">

            
    );
}


{data.map((e, i) => <div className={`
            style${Math.floor((i % 6) + 1)}
            ${i % 2 == 0 ? 'left' : 'right'}
            `} 
            key={e.id}
            >
            {e.name}
            </div>)}


export default Home;