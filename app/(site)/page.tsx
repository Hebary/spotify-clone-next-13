import { Header, ListItem } from "../components/ui";



const HomePage = () => {
  return (
    <div className='w-full h-full bg-neutral-900 rounded-lg overflow-hidden overflow-y-auto'>
      <Header>
          <div className='mb-2'>
            <h1 className='text-white text-3xl font-semibold'>Welcome back</h1>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4 '>
            <ListItem/>
          </div>
      </Header>
    </div>
  )
}

export default HomePage;