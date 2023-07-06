import Background from '../assets/images/insidecar.jpg'

function Home() {
  return (
    <div 
        style={{ backgroundImage: `url(${ Background })`}} 
        className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
        >
            <div className='flex place-items-center h-screen'>
                <h1 className='p-5 text-yellow-950 bg-yellow-100 bg-opacity-50 rounded mb-36 border
                 border-amber-100 border-opacity-40 tracking-wide'
                >
                    Welcome to Your Garage
                </h1>
            </div>
    </div>
  )
}

export default Home