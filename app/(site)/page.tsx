import { Header, ListItem } from "../components/ui";



const HomePage = () => {
  return (
    <div className='w-full h-full bg-neutral-900 rounded-lg overflow-hidden overflow-y-auto'>
      <Header>
          <div className='mb-2'>
            <h1 className='text-white text-3xl font-semibold'>Welcome back</h1>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4 p-2'>
            <ListItem
              image='/images/liked.png'
              name='Liked Songs'
              href='/images/liked.png'
            />
          </div>
      </Header>
      <div className='mt-2 mb-7 px-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-white text-xl font-semibold'>
            Newest Songs
          </h1>
        </div>
        <div className=''>
            Song list
        </div>
      </div>
    </div>
  )
}

export default HomePage;